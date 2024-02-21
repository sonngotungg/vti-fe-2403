// - a Promise is simply an object in JS
// - a promise is always in 1 of 3 states:
//     (1) pending: which is initial state, neither fulfilled nor rejected
//     (2) fulfilled: meaning that the operation completed successfully
//     (3) rejected: meaning that the operation failed

// 1. how to create a Promise
const promise = new Promise();

// 2. how to fulfill or reject the promise
const promise = new Promise((resolve, reject) => {
  // resolve and reject are callback functions
  if (res.ok) {
    // resolve: change status from 'pending' to 'fulfilled'
    resolve();
  } else {
    // reject: change status from 'pending' to 'rejected'
    reject();
  }
});

// mimic the async work
const resolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});
const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
});

resolvedPromise.then(() => console.log("fulfilled"));
rejectedPromise.catch(() => console.log("rejected"));

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = { id: 1, name: "nts" };
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "hello world");
});

const data = Promise.all([promise1, promise2, promise3, promise4]).then(
  (res) => res
);
// data = [3, 42, { id: 1, name: "nts" }, 'hello world'] after 1s

// summary for interview

// - what is promise?
// +) another way to handle asynchronous instead of using callback
// +) has 3 states
// +) how to create a promise with resolve() and reject() to change state
// +) promise.then().catch()
// +) give an example to demonstrate
// +) promise chains
// +) promise.finally()
