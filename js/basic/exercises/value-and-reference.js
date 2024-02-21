// // // Passing by value example
// // let num1 = 10;
// // let num2 = num1; // num2 is assigned the value of num1

// // num1 = 20;

// // console.log(num1); // Output: 20
// // console.log(num2); // Output: 10 (num2 still holds the original value of num1)

// // // Passing by reference example
// // let arr1 = [1, 2, 3];
// // let arr2 = arr1; // arr2 is assigned a reference to the same array as arr1

// // arr1.push(4);

// // console.log(arr1); // Output: [1, 2, 3, 4]
// // console.log(arr2); // Output: [1, 2, 3, 4] (both arr1 and arr2 point to the same array in memory)

// // // Passing by reference example with objects
// // let obj1 = { name: "John", age: 30 };
// // let obj2 = obj1; // obj2 is assigned a reference to the same object as obj1

// // obj1.age = 40;

// // console.log(obj1); // Output: { name: "John", age: 40 }
// // console.log(obj2); // Output: { name: "John", age: 40 } (both obj1 and obj2 reference the same object in memory)

// // // how to clone reference-type data
// // // (1) structuredClone()
// // // (2) spreading (...)
// // // (3) stringify

// // number1, number2 thuộc kiểu dữ liệu primitive
// let number1 = 1;
// let number2 = number1;

// number1 += 10;

// console.log("number1: ", number1); // 11
// console.log("number2: ", number2); // 1

// let str1 = "hello";
// let str2 = str1;

// str1 = "hi";

// console.log(str1); // hi
// console.log(str2); // hello

// let bool1 = true;
// let bool2 = bool1;

// bool1 = false;

// console.log(bool1); // false
// console.log(bool2); // true

// let student1 = { id: 1 };
// let student2 = student1;

// student1.id = 2;

// console.log(student1); // {id: 2}
// console.log(student2); // {id: 1}, thực tế {id: 2}

// let arr1 = [1];
// let arr2 = arr1;

// // arr1.push(2); // [1, 2]
// arr1 = [1, 2];

// console.log(arr1); // [1, 2]
// console.log(arr2); // [1] thực tế [1, 2]

// // how to clone/copy an object to another object
const student1 = { id: 1 };
const student2 = student1;
const student3 = structuredClone(student1);

student1.id = 2;

console.log(student1); // {id: 2}
console.log(student2); // {id: 2}
console.log(student3); // {id: 1}

const arr1 = [1];
const arr2 = arr1;
const arr3 = structuredClone(arr1);

// arr1.push(5);
arr1 = [1, 2];

console.log(arr1); // [1,5]
console.log(arr2); // [1,5]
console.log(arr3); // [1]
