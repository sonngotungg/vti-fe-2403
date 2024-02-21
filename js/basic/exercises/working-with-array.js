// Define an array
let numbers = [1, 2, 3, 4, 5];

// let arr = [1, '1234', [],{}, false]

// // 1. forEach: Iterates through each element of the array = for
// // numbers.forEach(function (num) {
// //   console.log(num);
// // });

// // // 2. map: Transforms each element of the array and returns a new array
// // let squaredNumbers = numbers.map(function (num) {
// //     console.log(num)
// //     // 1 --> return 1*1 --> return 1
// //     // 2 --> return 2*2 --> return 4
// // //     // 3 --> return 3*3 --> return 9
// // //     // 4 --> return 4*4 --> return 16
// // //     // 5 --> return 5*5 --> return 25
// // //     return num * num;
// // //   });
// // let squaredNumbers = numbers.map(function (num) {
// //   console.log(num);

// //   return num;
// // });
// // // [1,4,9,16,25]
// // // let newArr = numbers.map(function (itemInNumbers) {
// // //     console.log("item in numbers: ", itemInNumbers); // 5 cái log 'item in number: ' với giá trị lần lượt 1,2,3,4,5

// // //     // item in array:  1 --> return 1+1
// // //     // item in array:  2 --> return 2+1
// // //     // item in array:  3 --> return 3+1
// // //     // item in array:  4 --> return 4+1
// // //     // item in array:  5 --> return 5+1
// // //     const newItemValue = itemInNumbers + 1;
// // //     return newItemValue;
// // //   });
// // // newArr = [x,x,x,x,x] --> [2,3,4,5,6]
// // console.log(numbers);
// // console.log(squaredNumbers);
// // [1, 4, 9, 16, 25];
// // console.log(newArr); // [2,3,4,5,6]

// // // // 3. filter: Filters elements based on a condition and returns a new array

// // output: [1, 3, 5];
// // const myArr = []

// // for (let i = 0, i < numbers.length; i++) {
// //     if () {
// //         myArr.push(arr[i])
// //     }
// // }

// // numbers.forEach(function(itemInArray) {
// //     if (itemInArray % 2 === 1) {
// //         myArr.push(arr[i])
// //     }
// // })

// // const myArr = numbers.filter(function (itemInArray) {
// //   console.log("item in array: ", itemInArray);

// //   return itemInArray % 2 === 1;
// // });
// // console.log(myArr);

// // let evenNumbers = numbers.filter(function (num) {
// //   return num % 2 === 0;
// // });
// // console.log(evenNumbers);

// // 4. find: Returns the first element that satisfies a condition
// const numberList = [10, 1, -1, 5, 32, 5];

// let firstEvenNumber = numbers.find(function (num) {
//   return num % 2 === 0; // boolean
// });

// let numb = numberList.find(function (item) {
//   return item < 25;
// });
// let numbIndex = numberList.findIndex(function (item) {
//     return item < 25;
//   });

// console.log(numb);

// // // 5. reduce: Reduces the array to a single value (e.g., sum, average)
// // [array].reduce(function (output, item) {
// //     return output + item
// // }, defaultValue)

// // let sum = numberList.reduce(function (accumulator, currentValue) {
// //   return accumulator + currentValue;
// // }, 0);
// // console.log(sum);

// // 6. some: Checks if at least one element satisfies a condition
// let hasEvenNumber = numbers.some(function (num) {
//   return num % 2 === 0;
// });
// console.log(hasEvenNumber);

// // 7. every: Checks if all elements satisfy a condition
// let allEvenNumbers = numbers.every(function (num) {
//   return num % 2 === 0;
// });
// console.log(allEvenNumbers);

// // 8. includes: Checks if an array includes a certain element
// let includesThree = numbers.includes(3);
// console.log(includesThree);

// // // 9. indexOf: Returns the index of the first occurrence of an element in the array
// let index = numbers.indexOf(3); -1

// console.log(index);

// 10. slice: Returns a shallow copy of a portion of an array into a new array
const myArrList = [1, 2, 32, 4, 56, 7, 8];
// output: [32,4,56] --> sub array trong myArrList
let slicedArray = myArrList.slice(2, 5);
console.log(slicedArray);


1. [inputArr].map --> return array có length = inputArr.length
2. [inputArr].filter --> return array có length <= inputArr.length
3. [inputArr].forEach --> k trả về gì, chỉ cho phép đi qua từng item trong inputArr
4. [inputArr].find     --> trả về item gần nhất thỏa mãn đk
5. [inputArr].includes(item) --> trả về true/false nếu inputArr có chứa item
6. [inputArr].some - [inputArr].every --> trả về true/false khi ít nhất 1 item thỏa mãn (some), khi mọi item thỏa mãn (every)
