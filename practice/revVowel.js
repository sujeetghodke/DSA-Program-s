var reverseVowels = function (s) {
  let revStr = "",
    vowels = "AEIOUaeiou",
    vow = "",
    i = 0;

  for (let char of s) {
    if (vowels.includes(char)) {
      vow += char;
    }
  }

  vow = vow.split("").reverse().join("");

  for (let char of s) {
    if (vowels.includes(char)) {
      revStr += vow[i];
      console.log("revStr : ", revStr);
      i++;
    } else {
      revStr += char;
      console.log("revStr : ", revStr);
    }
  }
  return revStr;
};

console.log(reverseVowels("Hello"));
