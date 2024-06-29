var strStr = function (haystack, needle) {
  //   return haystack.indexOf(needle);
  if (haystack.length < needle.length) {
    return -1;
  }
  for (let i = 0; i < haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("leetcode", "leeto"));
