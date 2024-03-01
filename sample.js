// // BT 1:

// // promise1 ---> promise3 ----> promise4 ---> promise2

// // dang chay promise 1
// // chay xong promise 1 - sau 1s
// // dang chay promise 3
// // chay xong promise 3 - sau 1s
// // dang chay promise 4
// // chay xong promise 4 - sau 1s
// // dang chay promise 2
// // hoan thanh          - sau 1s

// const asyncFunc1 = () => {
//   const promise1 = new Promise((resolve, reject) => {
//     // hanh dong bat dong bo
//     console.log("dang thuc hien promise 1");
//     setTimeout(resolve, 2000);
//   });

//   return promise1;
// };

// const asyncFunc2 = () => {
//   const promise2 = new Promise((resolve, reject) => {
//     // hanh dong bat dong bo
//     console.log("dang thuc hien promise 2");
//     setTimeout(() => {
//       const isDone = true;
//       if (isDone) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });

//   return promise2;
// };

// const asyncFunc3 = () => {
//   const promise3 = new Promise((resolve, reject) => {
//     // hanh dong bat dong bo
//     console.log("dang thuc hien promise 3");
//     setTimeout(() => {
//       const isDone = true;
//       if (isDone) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });

//   return promise3;
// };

// const asyncFunc4 = () => {
//   const promise4 = new Promise((resolve, reject) => {
//     // hanh dong bat dong bo
//     console.log("dang thuc hien promise 4");
//     setTimeout(() => {
//       const isDone = true;
//       if (isDone) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });

//   return promise4;
// };

// // promise chain --> async/await

// asyncFunc1()
//   .then(() => {
//     console.log("da hoan thanh promise 1");
//     return asyncFunc3();
//   })
//   .then(() => {
//     console.log("da hoan thanh promise 3");
//     return asyncFunc4();
//   })
//   .then(() => {
//     console.log("da hoan thanh promise 4");
//     return asyncFunc2();
//   })
//   .then(() => {
//     console.log("hoan thanh");
//   });

// // ========================================================
// BT 2:
// // new task:
// // I have promise1
// // promise 1 fulfilled, go to promise 2
// // promise 1 rejected, go to recover 1 (also a promise)
// // recover 1 fulfilled, go to promise 2
// // recover 1 rejected, log 'error'
// // promise 2 fulfilled, log 'success'
// // promise 2 rejected, log 'error 2'

// // promise1, promise2, recovery: promises

// // promise1 ----->(fulfilled) promise2
// //          ----->(rejected) recovery ----->(fulfilled) promise2
// //                                    ----->(rejected) log 'error'

// // promise2 ----->(fulfilled) log 'success'
// //          ----->(rejected) log 'error 2'

// // // case 1:
// // dang chay promise 1
// // chay promise 1 thanh cong  --> sau 1s
// // dang chay promise 2
// // success --> sau 1s

// // // case 2:
// // dang chay promise 1
// // chay promise 1 thanh cong  --> sau 1s
// // dang chay promise 2
// // error 2

// // // case 3
// // dang chay promise 1
// // dang chay recovery
// // chay recovery thanh cong --> sau 1s
// // dang chay promise 2
// // // ...

// // // case 4
// // dang chay promise 1
// // dang chay recovery
// // error

// // =====================================================

// // promise1 ---->(fulfilled) promise2 ----->(fulfilled) promise3
// //                                    ----->(rejected) log 'err'
// //          ---->(rejected)  recover1 ---->(fulfilled) promise3
// //                                    ----> (rejected) log 'err'

const getUserList = async () => {
  // gọi BE để lấy danh sách user
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = response.json();
  return userList;
};

const getPostList = async () => {
  // gọi BE để lấy danh sách post
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postList = response.json();
  return postList;
};

const getCommentList = async () => {
  // gọi BE để lấy danh sách comment
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const userList = response.json();
  return userList;
};

const getAlbumList = async () => {
  // gọi BE để lấy danh sách album
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const userList = response.json();
  return userList;
};

const getPhotoList = async () => {
  // gọi BE để lấy danh sách photo
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const userList = response.json();
  return userList;
};

const getTodoList = async () => {
  // gọi BE để lấy danh sách todo
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const userList = response.json();
  return userList;
};

// c1
// getPostList().then((data) => console.log("post list: ", data.length));
// getCommentList().then((data) => console.log("comment list: ", data.length));
// getAlbumList().then((data) => console.log("album list: ", data.length));
// getPhotoList().then((data) => console.log("photo list: ", data.length));
// getTodoList().then((data) => console.log("todo list: ", data.length));
// getUserList().then((data) => console.log("user list: ", data.length));

// c2: Promise.all()
// Function to fetch todos
const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

// Function to fetch users
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

// Use async/await to fetch todos and users concurrently
const fetchData = async () => {
  try {
    const [todos, users] = await Promise.all([fetchTodos(), fetchUsers()]);
    console.log("Todos:", todos.length);
    console.log("Users:", users.length);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Call fetchData function
fetchData();
