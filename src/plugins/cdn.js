const path = require('path');

const baseURL = 'https://cdn.jsdelivr.net/gh/amzrk2/cdn-stcapi@1/dsrca';

function CDN(sourcePath) {
  if (process.env.NODE_ENV === 'production') {
    if (sourcePath.startsWith('.')) {
      return `${baseURL}${sourcePath.substring(1)}`;
    } else if (sourcePath.startsWith('/')) {
      return `${baseURL}${sourcePath}`;
    } else {
      return `${baseURL}/${sourcePath}`;
    }
  } else {
    return path.resolve('/mock', sourcePath);
  }
}

export default CDN;
