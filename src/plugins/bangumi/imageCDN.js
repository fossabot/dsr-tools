/**
 * Provided by https://github.com/czy0729/Bangumi-OSS
 */

const HOST_CDN = 'https://cdn.jsdelivr.net';
const I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');

function hash(input) {
  let hash = 5381;
  let i = input.length - 1;

  if (typeof input == 'string') {
    for (; i > -1; i -= 1) hash += (hash << 5) + input.charCodeAt(i);
  } else {
    for (; i > -1; i -= 1) hash += (hash << 5) + input[i];
  }
  let value = hash & 0x7fffffff;

  let retValue = '';
  do {
    retValue += I64BIT_TABLE[value & 0x3f];
  } while ((value >>= 6));

  return retValue;
}

// const HASH_SUBJECT = {
//   AMC5E: ''
// };

/**
 * 条目封面CDN
 * @url https://github.com/czy0729/Bangumi-OSS
 */
const subjectCache = {};
const CDN_OSS_SUBJECT = (src, HASH_SUBJECT) => {
  if (typeof src !== 'string') {
    return src;
  }

  if (subjectCache[src]) {
    return subjectCache[src];
  }

  // 修正图片地址
  let _src = src.split('?')[0];
  if (_src.indexOf('https:') === -1 && _src.indexOf('http:') === -1) {
    _src = `https:${_src}`;
  }
  _src = _src.replace('http://', 'https://');

  /**
   * 计算图片hash, 之后查询在不在OSS缓存里面
   * 计算规则: 带https://开头, 使用/c/质量, 去掉?后面的参数
   */
  const _hash = hash(_src);
  if (_hash in HASH_SUBJECT) {
    const path = _hash.slice(0, 1).toLocaleLowerCase();
    const cdnSrc = `${HOST_CDN}/gh/czy0729/Bangumi-OSS@master/data/subject/c/${path}/${_hash}.jpg`;
    subjectCache[src] = cdnSrc;
    return cdnSrc;
  }

  subjectCache[src] = src;
  // 确保 https 返回
  return src.replace('http://', 'https://');
};

export default CDN_OSS_SUBJECT;
