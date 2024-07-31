function MaxArr(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      console.log("max : ", i, " -- ", max);
    }
  }
  return max;
}

console.log(MaxArr([4, 6, 7, 2, 10, 8, 9]));
