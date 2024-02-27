// // Callback
// // In JS, functions are objects
// // - can be passed as an argument to a function
// // - a function can also be returned as values from other functions

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function greetFEClass(callback) {
//   const className = "VTI FE 2043";
//   callback(className);
// }

// greetFEClass(greet);

// // - any function that is passed as an argument to another function is called a callback function in JS
// // - the function which accepts a function as an argument or returns a function is called HOF - higher order function

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function higherOrderFunction(callback) {
//   const className = "VTI FE 2043";
//   callback(className);
// }

// // Callbacks
// // synchronous vs asynchronous callbacks
// // (1) Synchrounous callbacks:
// // - a callback which is executed immediately is called a synchronous callback

// // ex:

// function add(a, b) {
//   return a + b;
// }

// // arrow function --> ES6
// const add = (a, b) => {
//   return a + b;
// };

// let numbers = [1, 2, 3, 4];
// numbers.map((n) => n * 2);
// numbers.filter((n) => n % 2 === 0);

// // (2) asynchronous callbacks
// // - a asynchronous callback is a callback that is often used to continue or resume code execution after an asynchronous operation has completed
// // - callbacks are used to delay the execution of a function until a particular time or event has occured
// // - data fetching takes time and we can only run the function we want to after the data has been fetched and not immediately

// // ex:
// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// setTimeout(greet, 2000, "NTS");

// // - callback hell

// console.log("start");

// setTimeout(function () {
//   console.log("eating dinner");
//   const numberOfDishes = 100;
//   setTimeout(
//     function () {
//       console.log("washing dishes: ", numberOfDishes);
//       const amountOfTimeForPlaying = "2 hours";
//       setTimeout(
//         function () {
//           console.log("playing game in ", amountOfTimeForPlaying);
//           setTimeout(function () {
//             console.log("...");
//           });
//         },
//         1000,
//         amountOfTimeForPlaying
//       );
//     },
//     1000,
//     numberOfDishes
//   );
// }, 1000);

// console.log("end");

// promise:

function eatDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("eating dinner");
      const numberOfDishes = 100;
      resolve(numberOfDishes);
    }, 1000);
  });
}

function washDishes(numberOfDishes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("washing dishes:", numberOfDishes);
      const amountOfTimeForPlaying = "2 hours";
      resolve(amountOfTimeForPlaying);
    }, 1000);
  });
}

function playGame(amountOfTimeForPlaying) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("playing game in", amountOfTimeForPlaying);
      resolve();
    }, 1000);
  });
}

console.log("Start");

// eatDinner()
//   .then(washDishes)
//   .then(playGame)
//   .then(() => {
//     console.log("...");
//     console.log("End");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//   async function dinnerRoutine() {
//     const numberOfDishes = await eatDinner();
//     const amountOfTimeForPlaying = await washDishes(numberOfDishes);
//     await playGame(amountOfTimeForPlaying);
//   }

//   dinnerRoutine().then(() => {
//     console.log("End");
//   });

// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("eating dinner");
//     const numberOfDishes = 100;
//     resolve(numberOfDishes);
//   }, 1000);
// })
//   .then((numberOfDishes) => {
//     setTimeout(() => {
//       console.log("washing dishes:", numberOfDishes);
//       const amountOfTimeForPlaying = "2 hours";
//       return Promise.resolve(amountOfTimeForPlaying);
//     }, 1000);
//   })
//   .then((amountOfTimeForPlaying) => {
//     setTimeout(() => {
//       console.log("playing game in", amountOfTimeForPlaying);
//       console.log("...");
//       console.log("End");
//     }, 1000);
//   });

// // callbacks summary for interview
// // - callbacks are functions passed as arguments to other functions
// // - they can be synchronous if they execute immediately or they can be asynchronous where they get executed after some time has passed,
// // some event has occured or some data has been fetched
// // - callbacks were the go to pattern for asynchronous running code after fetching some data
// // - as more and more requests had to be made based on the data obtained from the previous requests ---> callback hell

function getTodoList() {
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(typeof promise);
  promise.then((response) => response.json()).then((json) => console.log(json));
}

getTodoList();
