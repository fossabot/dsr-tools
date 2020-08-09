const API_URL = 'https://api.bgm.tv/';
const ALLOW_REFERER = [
  /^https?:\/\/dsrca\.amzrk2\.cc/,
  /^https?:\/\/api-bgm\.amzrk2\.workers\.dev/,
  /^https?:\/\/localhost/
];
const API_PATH = /^\/bgm(.*)/;

/**
 * Validate referer
 * @param {String} referer
 */
function validateReferer(referer) {
  console.log(referer);
  // If CORS
  if (referer) {
    for (let i = 0; i < ALLOW_REFERER.length; i++) {
      if (ALLOW_REFERER[i].exec(referer)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Validate pathname
 * @param {String} url
 */
function validatePath(pathname) {
  const parsedPath = API_PATH.exec(pathname);
  if (parsedPath && parsedPath.length > 1) {
    if (parsedPath[1] === '') {
      return '/';
    } else {
      return parsedPath[1];
    }
  } else {
    return false;
  }
}

/**
 * Proxy API
 * @param {Request} request
 * @param {String} pathname
 */
async function handleRequest(request, pathname) {
  const apiUrl = new URL(API_URL);
  apiUrl.pathname = pathname;
  // Rewrite request to point to API url which also makes the request mutable
  // so we can add the correct Origin header to make the API server think
  // that this request isn't cross-site
  request = new Request(apiUrl, request);
  request.headers.set('Origin', apiUrl.origin);
  let response = await fetch(request);
  // Recreate the response so we can modify the headers
  response = new Response(response.body, response);
  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  // Append to/Add Vary header so browser will cache response correctly
  response.headers.append('Vary', 'Origin');
  return response;
}

addEventListener('fetch', event => {
  // Get request data
  const request = event.request;
  const url = new URL(request.url);
  // Validate
  const validReferer = validateReferer(request.headers.get('Referer'));
  const validPath = validatePath(url.pathname);
  if (validReferer && validPath) {
    event.respondWith(handleRequest(request, validPath));
  } else {
    const response = new Response('[BGM API Proxy] Request not allowed', { status: 403 });
    event.respondWith(response);
  }
});
