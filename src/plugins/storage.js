export default {
  getLS: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error(e);
    }
  },
  setLS: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  },
  getSS: (key) => {
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      console.error(e);
    }
  },
  setSS: (key, value) => {
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  },
};
