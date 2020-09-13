const path = require('path');

function CDN(sourcePath, version = '1') {
  const baseURL = `https://cdn.jsdelivr.net/gh/amzrk2/cdn-stcapi@${version}`;

  if (process.env.NODE_ENV === 'production') {
    if (sourcePath.startsWith('.')) {
      return `${baseURL}${sourcePath.substring(1)}`;
    } else if (sourcePath.startsWith('/')) {
      return `${baseURL}${sourcePath}`;
    } else {
      return `${baseURL}/${sourcePath}`;
    }
  } else {
    if (sourcePath.startsWith('.')) {
      console.log(`[DEBUG] Fetching ${baseURL}${sourcePath.substring(1)}`);
    } else if (sourcePath.startsWith('/')) {
      console.log(`[DEBUG] Fetching ${baseURL}${sourcePath}`);
    } else {
      console.log(`[DEBUG] Fetching ${baseURL}/${sourcePath}`);
    }
    return path.resolve('/mock', sourcePath);
  }
}

export default CDN;
