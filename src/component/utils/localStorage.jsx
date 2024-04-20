export const getItem = (key) => {
  try {
    const getValue = localStorage.getItem(key);
    if (getValue === null) {
      return undefined;
    }
    return JSON.parse(getValue);
  } catch (err) {
    console.error("Error getting item", err);
    return undefined;
  }
};

export const setItem = (key, value) => {
  try {
    const setValue = JSON.stringify(value);
    localStorage.setItem(key, setValue);
  } catch (err) {
    console.error("Error setting item", err);
  }
};
