// function test() {
//   try {
//     console.log("1");
//     throw "ablo";
//   } catch (error) {
//     console.log({ error });
//   } finally {
//     console.log("first");
//   }
// }
// test();

// function func() {
//   try {
//     console.log(1);
//     return "abc";
//   } catch (e) {
//     console.log(2);
//     return "2";
//   } finally {
//     console.log("data");
//     return "3";
//   }
//   console.log(4);
// }

// const str = func();
// console.log({ str });

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.reject(4);

// const promiseAll = async () => {
//   const group1 = await Promise.all([promise1, promise2]);
//   const group2 = await Promise.all([promise3, promise4]);
//   return [group1, group2];
// };

// promiseAll().then(console.log).catch(console.log);

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(3);
const promise4 = Promise.reject(4);

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2]);
  const group2 = await Promise.all([promise3, promise4]);
  return [group1, group2];

  //   throw "ab";
  //   throw "123";
};

promiseAll().then(console.log).catch(console.log);
