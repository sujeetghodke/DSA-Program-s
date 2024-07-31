var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }
  return functions.reduceRight(function (prevFun, nextFun) {
    return function (x) {
      return nextFun(prevFun(x));
    };
  });
};
