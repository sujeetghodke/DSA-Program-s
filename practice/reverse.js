var reverse = function (x) {
  let rev = 0;

  while (x !== 0) {
    const digit = x % 10;
    console.log(" digit ", digit);
    rev = rev * 10 + digit;
    console.log("rev ", rev);
    x = Math.trunc(x / 10);
    console.log("x", x);
  }

  if (rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, 31)) {
    return 0;
  }

  return rev;
};

console.log(reverse("-1245666545453"));
