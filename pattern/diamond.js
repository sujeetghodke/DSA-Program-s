let n = 7;

// for (let i = 1; i <= n; i++) {
//   let str = "*";
//   let spc = " ";
//   console.log(spc.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// for (let i = n - 1; i >= 1; i--) {
//   let str = "*";
//   let spc = " ";
//   console.log(spc.repeat(n - i) + str.repeat(i * 2 - 1));
// }

for (let i = 1; i < n; i++) {
  let str = "*";
  let spc = " ";
  console.log(spc.repeat(n - i) + str.repeat(i * 2 - 1));
}
for (let i = n; i > 0; i--) {
  let str = "*";
  let spc = " ";
  console.log(spc.repeat(n - i) + str.repeat(i * 2 - 1));
}
