'use strict';
module.exports = function () {
  const vault = {};
  const setValue = (key, value) => {
    vault[key] = value;
  };

  const getValue = (key) => {
    if (!key || !vault[key]) {
      return null;
    } else {
      return vault[key];
    }
  };

  return {
    getValue,
    setValue
  }
};