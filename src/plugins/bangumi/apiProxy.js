const API_URL = 'https://api.bgm.tv/';
const API_PATH = /^\/(.*)/;
const ALLOWED_ORIGIN = [
  /^https?:\/\/tools\.dsrkafuu\.co/,
  /^https?:\/\/dsr-tools-bgm\.dsrkafuu\.workers\.dev/,
  /^https?:\/\/localhost/,
];

/**
 * 验证 Origin 头
 * @param {String} origin
 */
function validateOrigin(origin) {
  if (origin) {
    for (let i = 0; i < ALLOWED_ORIGIN.length; i++) {
      if (ALLOWED_ORIGIN[i].exec(origin)) {
        return true; // 通过
      }
    }
  }
  return false; // 拒绝所有非 CORS 请求
}

/**
 * 解析 pathname
 * @param {String} url
 */
function validatePath(pathname) {
  const parsedPath = API_PATH.exec(pathname);
  if (parsedPath && parsedPath.length > 1) {
    return `/${parsedPath[1]}`; // `api.bgm.tv/*` => `worker.example.org/*`
  } else {
    return false; // 若不是对 `/*` 的访问则拒绝
  }
}

/**
 * 添加 CORS 头
 * @param {Request} request - 源请求
 * @param {String} origin - 源 origin
 * @param {String} pathname - 源请求解析出的正确 pathname
 * @param {URLSearchParams} searchParams - 源请求的 searchParams
 */
async function handleRequest(request, origin, pathname, searchParams) {
  const apiUrl = new URL(API_URL); // 构建一个新的 URL 对象 `api.bgm.tv/`
  apiUrl.pathname = pathname; // 设置正确的 pathname
  for (const [key, value] of searchParams) {
    apiUrl.searchParams.append(key, value);
  } // 迁移正确的 searchParams
  request = new Request(apiUrl, request); // 覆盖源 request
  request.headers.set('Origin', apiUrl.origin); // 伪装 Origin
  let response = await fetch(request); // 获取响应
  response = new Response(response.body, response); // 覆盖响应 response
  response.headers.set('Access-Control-Allow-Origin', origin); // 设置 CORS 头
  response.headers.append('Vary', 'Origin'); // 设置 Vary 头使浏览器正确进行缓存
  return response;
}

addEventListener('fetch', (event) => {
  // 获取请求的信息
  const request = event.request;
  const url = new URL(request.url);
  const origin = request.headers.get('Origin');
  const pathname = url.pathname;
  const searchParams = url.searchParams;
  // 验证和解析
  const validOrigin = validateOrigin(origin);
  const validPath = validatePath(pathname);
  if (validOrigin && validPath) {
    event.respondWith(handleRequest(request, origin, validPath, searchParams));
  } else {
    const response = new Response('[BGM API Proxy] Request not allowed', { status: 403 });
    event.respondWith(response);
  }
});
