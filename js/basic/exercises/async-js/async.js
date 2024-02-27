// // es6 - 2015
// // - arrow function:

// function sum(a, b) {
//   return a + b;
// }

// function intro() {
//   console.log("hello world");
// }

// const sum1 = (a, b) => {
//   // handle logics
//   return a + b;
// };

// const intro1 = () => {
//   // handle logics
//   console.log("hello world in arrow function");
// };

// const arr1 = [1, 2, 3];

// // arr1.filter(() => {})

// arr1.filter(function() {})

// console.log(sum(1, 2)); // 3
// intro(); // hello world
// intro1(); // hello world in arrow function
// console.log("sum in arrow function: ", sum1(2, 3)); // sum in arrow function: 5

// // input: name = Son
// // output: Hello Son
// const introWithName = (name) => {
//   console.log("Hello ", name);
// };

// introWithName("Son");

// const syncFunction = () => {
//   console.log("first");
//   console.log("second");
//   console.log("third");
// };

// const asyncFunction = () => {
//   console.log("first");
//   setTimeout(() => console.log("second"), 1000);
//   console.log("third");
// };

// // syncFunction();
// asyncFunction();

// câu hỏi pv liên quan đến async
// - js là đơn luồng hay đa luồng
// - event loop là gì
// - phân biệt callback- promise - async/await
// - callback hell là gì
// - promise chain là gì

// callback hell

// ăn tối --> rửa bát --> chơi game
// setTimeout(() => {}, 1000)

// setTimeout(() => {
//   console.log("an toi");
//   //   x200
//   setTimeout(() => {
//     console.log("rua bat");
//     // x200
//     setTimeout(() => {
//       console.log("choi game");
//       //   x200
//       // logics

//       setTimeout(() => console.log("...."), 1000);
//     });
//   }, 1000);
// }, 1000);

// promise thuộc es7

// khai báo:
// - promise bản chất là 1 js Object
// - nó gồm 3 status: pending, fulfilled / success, rejected

// ban đầu: pending
// th1: fullfiled --> trả về data
// th2: rejected  --> trả về lỗi

// EX1:
// const myPromise = new Promise((resolve, reject) => {});
// // JS datatype: primitive (number, string, boolean, null, undefined) - object
// console.log(typeof myPromise); // object
// console.log(myPromise); // Promise<pending>

// EX2:

// promise la 1 js object
// promise co 3 trang thai: pending (default), fulfilled / rejected
const promise = new Promise((resolve, reject) => {
  // xu li bat dong bo, nhung cong viec ton thoi gian
  const isSuccessful = true;

  if (isSuccessful) {
    // neu xu li bat dong bo that bai ---> rejected ----> chay reject()
    // resolve();
    resolve({ id: 1, user: "son" });
  } else {
    // neu xu li bat dong bo thanh cong --> fulfilled --> chay resolve()
    reject();
    reject("some error!!!!");
  }
});

// pending --> fulfilled --> finally
// pending --> catch --. finally

promise
  .then((data) => {
    // xu li tiep sau khi nhan dc data
    console.log("xu li thanh cong: ", data); // xu li thanh cong: undefined
    // xu li thanh cong: {id: 1, user: 'son'}
  })
  .catch((err) => {
    // hien thi loi
    console.log("xu li that bai: ", err); // xu li that bai: undefined
    // xu li that bai: some error!!!!
  })
  .finally(() => {});

console.log(typeof promise);
console.log(promise);

// EX3: promise chain

// sync:
// const promise = new Promise((resolve, reject) => {
//   // xu li bat dong bo
// //   setTimeout(resolve, 1000, 0);
//     setTimeout(() => resolve(0), 1000)
// });

// promise
//   .then((data) => {
//     console.log("first", data); // first: 0
//     return 1;
//   })
//   .then((data) => {
//     console.log("second", data); // second: 1
//     return 2;
//   })
//   .then((data) => {
//     console.log("third", data); // third: 2
//   })
//   .then(() => {
//     console.log("....");    // ....
//   })
//   .catch((err) => console.log("err: ", err))
//   .finally(() => console.log("finally"));

// async:

// an toi
// da an toi xong
// rua bat
// da rua bat xong
// choi gam
// ...
const washingDishes = (data) => {
  // x200 --> file washingDishes.js
  console.log(data);
  console.log("rua bat");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("da rua bat xong");
    }, 1000);
  });
};

const playingGame = (data) => {
  console.log(data);
  console.log("choi game");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("....");
    }, 1000);
  });
};

const otherFunction = (data) => {
  // xu li data
  // return ...
};

const promise = new Promise((resolve, reject) => {
  // mo phong viec xu li bat dong bo
  console.log("an toi");
  setTimeout(() => {
    resolve("da an toi xong");
  }, 1000);
});

promise
  .then(washingDishes)
  .then(playingGame)
  .then(otherFunction)
  .catch((err) => console.log("error: ", err))
  .finally(() => console.log("finally"));

// async-await
// activity 1
// const eatingDinner = () => {
//   console.log("an toi");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("da an toi xong");
//     }, 1000);
//   });
// };

// // activity 2
// const washingDishes = () => {
//   // x200 --> file washingDishes.js
//   console.log("rua bat");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("da rua bat xong");
//     }, 1000);
//   });
// };

// // activity 3
// const playingGame = () => {
//   console.log("choi game");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("....");
//     }, 1000);
//   });
// };

// const eveningActivities = async () => {
//     const activity1Result = await eatingDinner();
//     console.log(activity1Result);
//     const activity2Result = await washingDishes();
//     console.log(activity2Result);
//     const activity3Result = await playingGame();
//     console.log(activity3Result);
// };

// async function eveningActivities() {

// }

// console.log(eveningActivities());

// eveningActivities().then(() => console.log("done"));

// EX4

// getUserList sẽ gửi request tới BE để lấy danh sách user
const userListAPI = "https://jsonplaceholder.typicode.com/users";

const getUserList = async () => {
  console.log("getting user list.........");
  const response = await fetch(userListAPI);
  const userList = await response.json();
  console.log("finished!!");
  console.log(userList);
};

getUserList();
