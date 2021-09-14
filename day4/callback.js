function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
}

processUserInput(greeting);

//
//
// //second example

// var add = (a, b) => a + b;
// var sub = (a, b) => a - b;

// var calculate = (a, b, operation) => {
//   return operation(a, b);
// };

// console.log(calculate(1, 2, add));
console.log(calculate(1, 2, sub));
