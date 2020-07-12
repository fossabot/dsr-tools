const path = require('path');

const baseURL = 'https://cdn.jsdelivr.net/gh/amzrk2/cdn-stcapi@1/dsrca';

function CDN(sourcePath) {
  if (process.env.NODE_ENV === 'production') {
    return path.resolve(baseURL, sourcePath);
  } else {
    return path.resolve('/mock', sourcePath);
  }
}

export default CDN;
