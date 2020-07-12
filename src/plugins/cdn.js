const path = require('path');

const baseURL = 'https://cdn.jsdelivr.com/api';

function CDN(sourcePath) {
  if (process.env.NODE_ENV === 'production') {
    return path.resolve(baseURL, sourcePath);
  } else {
    return path.resolve('/mock', sourcePath);
  }
}

export default CDN;
