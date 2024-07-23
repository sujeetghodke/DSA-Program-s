// var reduce = function (nums, fn, init) {
//   var accum = init;
//   for (let i = 0; i < nums.length; i++) {
//     accum = fn(accum, nums[i]);
//   }
//   return accum;
// };

//by using forEach
var reduce = function (nums, fn, init) {
  var val = init;
  nums.forEach((num) => {
    val = fn(val, nums);
  });
  return val;
};
