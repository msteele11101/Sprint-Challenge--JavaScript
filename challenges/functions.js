// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume( x, y, cb ) {
  return cb(x, y);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add( x, y ) {
  return x + y;
}

function multiply( x, y ) {
  return x * y;
}

function greeting( x, y ) {
  return `Hello ${x} ${y}, nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */

console.log(consume(6,8,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.
// nestedFunction is in the same level of scope as internal
// Explanation: 


const external = "I'm outside this function and its cold";

function myFunction() {
  console.log(external);
  const internal = "Hello! Im inside this function but still available!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
