// 1. let & const
// 2. arrow function
const add = (a, b) => a + b;

// 3. template string
const myName = "John";
console.log(`Hello, ${myName}!`);

// 4. destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;

console.log(name, age); // Outputs: John 30

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first, second, third); // Outputs: 1 2 3

// 6. spreading operator
const numbers1 = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

const person1 = {
  id: "1",
  name: "nts",
};

const student = {
  ...person,
  class: "10a3",
};

// 7. default params
const greet = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greet(); // Outputs: Hello, Guest!

// 8. object Literal Enhancements
const firstName = "John";
const lastName = "Doe";

const person2 = { firstName, lastName };

// 9. promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// 10. async/await
const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getData();
