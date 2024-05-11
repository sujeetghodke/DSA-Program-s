//javascript code to find minimum and maximum element in the array.

function setMini(a) {
  let mini = Infinity;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < mini) {
      mini = a[i];
    }
  }
  return mini;
}

function setMax(a) {
  let max = -Infinity;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
}

function main() {
  const a = [50, 40, 80, 90, 20, 70, 10];
  console.log("Minimum element is : ", setMini(a));
  console.log("Maximum element is : ", setMax(a));
}
main();
