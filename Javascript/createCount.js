var createCounter = function (n) {
  let currentCount = n - 1;
  return function () {
    currentCount += 1;
    return currentCount;
  };
};

const counter = createCounter(10);
console.log(counter()); //10
console.log(counter()); //11
console.log(counter()); //12
