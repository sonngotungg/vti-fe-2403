// // 1. Hello world
// console.log("Hello world");

// /*
// ádfasdf
// ádfasdf
// ádfasdf
// */

// ctrl + /

// // 2. Variables
// let firstName = "John";
// const lastName = "Doe";
// var age = 30;

// // 3. Data types

// // primitive: number, string, boolean, undefined, null
// // object: array, object, function

// let isStudent = false;
// let favoriteFruits = ["apple", "banana", "orange"];
// let person = { firstName: "John", lastName: "Doe" };

// // 4. Operators
// let sum = 10 + 5;
// let difference = 10 - 5;
// let product = 10 * 5;
// let quotient = 10 / 5;
// let remainder = 10 % 3;

// // 5. Type conversions
// let numString = "10";
// let num = parseInt(numString);

// // 6. Equality
// let x = 10;
// let y = "10";
// let isEqual = x == y; // true
// let isStrictEqual = x === y; // false

// // 7. Conditional statements
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// // 8. Looping code
// for (let i = 0; i < favoriteFruits.length; i++) {
//   console.log(favoriteFruits[i]);
// }

// // 9. Functions
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// let greeting = greet(firstName);
// console.log(greeting);

// ============================================================
// Arithmetic Operators: +, -, *, /, %, /
// Assignment Operators: =, +=, -=, *=, /=, %=
let y = 100;
let x = 5;
x += y;
console.log(x);
// Comparison Operators: ==, ===, <, >, !=, !==

// so sánh == và ===
// so sánh != và !==

const x1 = 1;
const x2 = "1";

console.log(x1 != x2); // true --> false
console.log(x1 !== x2); // false --> true

// typeof
console.log(typeof x1); // number
console.log(typeof x2); // string

// Logical Operators &&, ||

// conditional statements
// looping statements
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i], "chia hết cho 2");
  } else {
    console.log(arr[i], "k chia hết cho 2");
  }
}

switch (x1) {
  case 1: {
    console.log("x1 = 1");
    break;
  }
  case 2: {
    console.log("x1 = 2");
    break;
  }
  default: {
    console.log("x1 = 3");
  }
}

while (x1 < 5) {
  x1++;
  console.log(x1);
}

function intro() {
  console.log("hello world");
}

function add(x1, x2) {
  const sum = x1 + x2;
  return sum;
}


- khai báo biến
- kiểu dữ liệu
- toán tử
- câu lệnh đk
- vòng lặp
- hàm
