// Callback
// In JS, functions are objects
// - can be passed as an argument to a function
// - a function can also be returned as values from other functions

function greet(name) {
  console.log(`Hello ${name}`);
}

function greetFEClass(fn) {
  const className = "VTI FE 2043";
  fn(className);
}

greetFEClass(greet);

// - any function that is passed as an argument to another function is called a callback function in JS
// - the function which accepts a function as an argument or returns a function is called HOF - higher order function

function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const className = "VTI FE 2043";
  callback(className);
}

// Callbacks
// synchronous vs asynchronous callbacks
// (1) Synchrounous callbacks:
// - a callback which is executed immediately is called a synchronous callback

// ex:
let numbers = [1, 2, 3, 4];
numbers.map((n) => n * 2);
numbers.filter((n) => n % 2 === 0);

// (2) asynchronous callbacks
// - a asynchronous callback is a callback that is often used to continue or resume code execution after an asynchronous operation has completed
// - callbacks are used to delay the execution of a function until a particular time or event has occured
// - data fetching takes time and we can only run the function we want to after the data has been fetched and not immediately

// ex:
function greet(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 2000, "NTS");

// - callback hell

// callbacks summary for interview
// - callbacks are functions passed as arguments to other functions
// - they can be synchronous if they execute immediately or they can be asynchronous where they get executed after some time has passed,
// some event has occured or some data has been fetched
// - callbacks were the go to pattern for asynchronous running code after fetching some data
// - as more and more requests had to be made based on the data obtained from the previous requests ---> callback hell
