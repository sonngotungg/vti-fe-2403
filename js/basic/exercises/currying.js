// Regular function with multiple arguments
function add(x, y, z) {
  return x + y + z;
}

// Curried version of the add function
function curriedAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Using the curried function
let curriedResult = curriedAdd(2)(3)(4);
console.log(curriedResult); // Output: 9

// We can also partially apply the curried function
let addFive = curriedAdd(2)(3); // Partial application
console.log(addFive(5)); // Output: 10
