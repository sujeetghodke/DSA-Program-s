// // Function scope example
// function exampleVar() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // 10
// }

// exampleVar();

// Hoisting example
// console.log(y); // undefined
// var y = 5;
// console.log(y); // 5

// // Re-declaration example
// var z = 1;
// var z = 2; // No error
// console.log(z); // 2

// Create a custom event named 'myCustomEvent' with some custom data
const myEvent = new CustomEvent("myCustomEvent", {
  detail: {
    message: "Hello, world!",
    time: new Date(),
  },
});

//Closur in js
function createCounter() {
  let count = 0; // This variable is inside the backpack

  return function () {
    count++; // The inner function can access and modify 'count'
    return count;
  };
}

const counter = createCounter(); // 'createCounter' returns the inner function

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function greeting(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
}

const greetJohn = greeting("John");
const greetJane = greeting("Jane");

greetJohn(); // "Hello, John!"
greetJane(); // "Hello, Jane!"
