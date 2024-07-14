var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let a = s.charAt(i);
    switch (a) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (a !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

console.log(isValid("[]()"));
