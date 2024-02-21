// closure relates to the temporary memory

// function outer() {
//   let counter = 0;

//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }

// outer();
// outer();

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const logCounter = outer();
logCounter();
logCounter();

// Closure:
// in JS, when we return a function from another function, we are effetively returning a combination of the function
// definition along with the function'scope.
// this would let the function definition have an associated persistent memory which could hold on to live data between executions.
// that combination of the funciton and its scope chain is what called a closure in JS
