// // Asynchronous JS
// // 1. timeouts and intervals
// // 2. callbacks
// // 3. promises
// // 4. async-await
// // 5. event loop

// // - what and why of async javascript
// // in its most basic form, JavaScript is a synchronous, single-threaded language

// // - understand and solve exercise problems on timeouts, callbacks, promises and async-await
// // - understand how all of them behave with respect to the event loop

// console.log("first");
// console.log("second");
// console.log("third");

// console.log("first");
// setTimeout(function () {
//   console.log("second");
// }, 3000); // đợi 1 khoảng thời gian theo ms, hết khoảng tg đấy thì chạy code trong function
// console.log("third");

function callback1() {
  console.log("first");
}

function callback2() {
  console.log("second");
}

// setTimeout(callback1, 10_000)
// setTimeout(callback2, 5000)
// console.log('third')

setTimeout(callback1, 0);
console.log("second");
console.log("third");

// event loop - xử lý bất đồng bộ của JS
// // ============================================== (1) ================================================
// // setTimeout example
// console.log("Starting setTimeout example...");
// setTimeout(() => {
//   console.log("This message will be logged after 2 seconds.");
// }, 2000);
// console.log("setTimeout example has been initiated.");

// const timeoutId = setTimeout(() => {
//   console.log("This message will be logged after 2 seconds.");
// }, 4000);
// clearTimeout(timeoutId);

// // setInterval example
// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Interval count: ${count}`);
//   if (count >= 5) {
//     clearInterval(intervalId); // Stop the interval after count reaches 5
//     console.log("Interval stopped.");
//   }
// }, 1000);
// console.log("setInterval example has been initiated.");

// // ==================================================================================================================
// // ==================================================================================================================
// // ==================================================================================================================

// // Async & Performance
// /// synchronous
// const syncFunc = () => {
//   console.log("1");
//   console.log("2");
//   console.log("3");
// };

// const asyncFunc = () => {
//   // callback concept
//   setTimeout(() => console.log("1"), 2000);
//   console.log("2");
//   console.log("3");
// };

// // syncFunc()
// // asyncFunc()

// // Callback
// function fetchDataFromServer(callback) {
//   setTimeout(() => {
//     const data = "Data from the server";
//     callback(data);
//   }, 1000);
// }

// function processData(data, callback) {
//   setTimeout(() => {
//     const processedData = data.toUpperCase();
//     callback(processedData);
//   }, 1000);
// }

// function saveDataToFile(data, callback) {
//   setTimeout(() => {
//     console.log("Data saved to a file:", data);
//     callback();
//   }, 1000);
// }

// fetchDataFromServer((data1) => {
//   processData(data1, (processedData1) => {
//     saveDataToFile(processedData1, () => {
//       // More nested callbacks can make the code hard to read and maintain
//     });
//   });
// });

// // Promise
// function fetchDataWithPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "Data from the server";
//       resolve(data);
//     }, 1000);
//   });
// }

// function usingPromise() {
//   fetchDataWithPromise()
//     .then((data) => {
//       console.log("Using Promise:", data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// usingPromise();

// // async / await
// function fetchDataFromServer() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Data from the server";
//       resolve(data);
//     }, 1000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = data.toUpperCase();
//       resolve(processedData);
//     }, 1000);
//   });
// }

// function saveDataToFile(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Data saved to a file:", data);
//       resolve();
//     }, 1000);
//   });
// }

// async function fetchDataAndProcess() {
//   try {
//     const data = await fetchDataFromServer();
//     const processedData = await processData(data);
//     await saveDataToFile(processedData);
//     console.log("Data processing and saving complete");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetchDataAndProcess();

// // Promise.all
// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
//   .catch((err) => console.log(err));
