// 1. gọi APIs để lấy danh sách post, comment, album, photo, todo, user
// và hiển thị số lượng phần tử trong danh sách

const getPostList = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
};
const getCommentList = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments");
  return data.json();
};
const getAlbumList = async () => {};
const getPhotoList = async () => {};
const getTodoList = async () => {};
const getUserList = async () => {};

// getPostList()
//   .then((data) => console.log(`/posts: ${data.length}`))
//   .catch((err) => console.log(err));

// 2. gọi tất cả APIs 1 lúc và hiển thị tổng số phần tử mà các APIs trả về
const getAllItems = async () => {
  // ES6 - destructuring

  // const student = {id: '1', name: 'son'}
  // const {id, name} = student

  // const [item11, item12] = [1,2]

  const [
    item1, // 1 --> Promise<pending>
    item2, // 2 --> Promise<pending>
    item3, // 3 --> 1
    item4, // 4 --> a
    item5, // 5 --> {id: '001'}
  ] = await Promise.all([
    getPostList(),
    getCommentList(),
    1,
    "a",
    { id: "001" },
  ]);

  console.log({
    numberOfPostList: item1.length, // 1 --> Promise<pending> 100
    numberOfComment: item2.length, // 2 --> Promise<pending>  500
    item3, // 3 --> 1
    item4, // 4 --> a
    item5, // 5 --> {id: '001'}
  });
};

// getAllItems();

// *) promise
// const mockAPI = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(data), 2000);
//     // sau 2s, return data
// })

const mockAPI1 = new Promise((resolve, reject) => {
  // xu li cac hanh dong bat dong bo
  // setTimeout(resolve, 2000, {id: 1})
  setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 2000);
});

const mockAPI2 = new Promise((resolve, reject) => {
  // xu li cac hanh dong bat dong bo
  // setTimeout(resolve, 2000, {id: 1})
  setTimeout(() => resolve([{ id: 11 }, { id: 21 }]), 100);
});

const myNumber = 123;

// mat 2s
Promise.all([mockAPI1, myNumber, mockAPI2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//   [
//     [{ id: 1 }, { id: 2 }],
//     123,
//     [{ id: 11 }, { id: 21 }]
//   ]
