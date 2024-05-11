let n = 7;
for (let i = 1; i <= n; i++) {
  let str = "*";
  let spc = " ";
  console.log(spc.repeat(n - i) + str.repeat(i * 2 - 1));
}

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
