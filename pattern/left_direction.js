let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "*";
  let spc = " ";
  console.log(spc.repeat(n - i) + str.repeat(i));
}

for (let i = n - 1; i >= 1; i--) {
  let str = "*";
  let spc = " ";
  console.log(spc.repeat(n - i) + str.repeat(i));
}
