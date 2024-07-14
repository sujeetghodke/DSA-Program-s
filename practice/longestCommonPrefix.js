var longestCommonPrefix = function (strs) {
  if (!strs.length === 0) return "";
  let output = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) output += strs[0][i];
    else break;
  }
  return output;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
