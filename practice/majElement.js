var majorityElement = function (nums) {
  let count = 0;
  let maj = 0;

  for (let n of nums) {
    if (count === 0) {
      maj = n;
    }
    if (maj === n) {
      count++;
    } else count--;
  }
  return maj;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
