function expect(val) {
  const originalValue = val;
  return {
    toBe: function (newVal) {
      if (newVal !== originalValue) {
        throw new Error("Not Equal");
      } else return true;
    },
    notToBe: function (newVal) {
      if (newVal === originalValue) {
        throw new Error("Equal");
      } else return true;
    },
  };
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
