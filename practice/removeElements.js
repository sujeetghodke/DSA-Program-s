var removeElements = function (num, val) {
  let j = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] != val) {
      num[j++] = num[i];
    }
  }
  return j;
};

console.log(removeElements([1, 1, 2], 1));
