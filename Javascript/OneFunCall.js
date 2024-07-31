var once = function (fn) {
  let useOnce = false;
  let result;

  return function (...args) {
    if (!useOnce) {
      result = fn(...args);
      useOnce = true;
      return result;
    }
    return undefined;
  };
};
