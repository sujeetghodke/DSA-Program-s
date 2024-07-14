var singleNumber = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return i;
    }
  }
  return arr[arr.length - 1];
};

console.log(singleNumber([1]));
