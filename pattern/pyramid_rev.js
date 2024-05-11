//

let n = 5;
for (let i = n; i >= 1; i--) {
  let str = "*";
  let spc = " ";
  console.log(spc.repeat(n - i) + str.repeat(i * 2 - 1));
}
