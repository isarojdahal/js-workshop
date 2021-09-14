//first example

async function abc() {
  return "hello";
}

abc().then((data) => console.log(data));

// second example.
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();

// setTimeout(() => {
//   console.log("2");
// }, 2000);
// console.log("1");
// console.log("3");
