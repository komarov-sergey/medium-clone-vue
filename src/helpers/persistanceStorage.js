export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error('Error in getting data from localStorage', e);
    return null;
  }
};

export const setItem = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error in setting data to localStorage', e);
    return null;
  }
};
