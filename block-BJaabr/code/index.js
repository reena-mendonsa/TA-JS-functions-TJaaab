// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the
 number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number,
 adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  n=n+1;
  return n;
}

// - Write a Function Expression
let addOne = function (n) {
  n=n+1;
  return n;

};



// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => n=n+1;
// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return n+1;
};


// - Execute the function
addOne(4);
// - Execute the function and store the return value in a variable.
let returnVal = addOne(3);
// - What is the typeof returnValue
"number"
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from 
the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(n) {
  
  return n-1;
}

// - Write a Function Expression
let substractOne = function (n) {
  
  return n-1;

};

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (n) => n-1;
// - Write an Arrow Function with curly brackets
let substractOne = (n) => {
  return n-1;
};

// - Execute the function
substractOne(5);
// - Execute the function and store the return value in a variable.
let subtractValue = substractOne(5);
// - What is the typeof returnValue
"number"


/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a,b) {
  
  return a + b;
}

// - Write a Function Expression
let sum = function (a , b) {
  
  return a+b;

};

// - Write an Arrow Function without curly brackets(if possible)
let sum = (a,b) => a+b;
// - Write an Arrow Function with curly brackets
let sum = (a,b) => {
  return a+b;
};

// - Execute the function
sum(10,2);
// - Execute the function and store the return value in a variable
let sumval = sum(20,2);
// - What is the typeof returnValue
"number"


/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(a) {
  
  return a*a;
}

// - Write a Function Expression
let square = function (a) {
  
  return a*a;

};

// - Write an Arrow Function without curly brackets(if possible)
let square = (a) => a*a;
// - Write an Arrow Function with curly brackets
let square = (a) => {
  return a*a;
};

// - Execute the function
square(2);
// - Execute the function and store the return value in a variable
let squareVal = square(4);
// - What is the typeof returnValue
"number"


/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` 
and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y) {
  if(x>y){
    return true;
  }
  else{
    return false;
  }
  
}

// - Write a Function Expression
let isGreater = function (x,y){
  if(x>y){
    return true;
  }
  else{
    return false;
  }
  
}
// - Write an Arrow Function without curly brackets(if possible)
// - Write an Arrow Function with curly brackets
let isGreater = (x,y) => {
  if(x>y){
    return true;
  }
  else{
    return false;
  }
};

// - Execute the function
isGreater(19,5);
// - Execute the function and store the return value in a variable
let greaterVal = isGreater(10,2);
// - What is the typeof returnValue
"boolean"


/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n) {
  if(n%2 == 0){
    return "Number is Even";
  }
  else{
    return "Number is Odd";
  }
  
}

// - Write an anonymous Function Expression
let oddOrEven = function (n){
  if(n%2 == 0){
    return "Number is Even";
  }
  else{
    return "Number is Odd";
  }
  
}

// - Write an named Function Expression
let oddOrEvenVal = function oddOrEven (n){
  if(n%2 == 0){
    return "Number is Even";
  }
  else{
    return "Number is Odd";
  }
  
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven =(n) => n%2==0 ? "Number is Even" : "Number is odd"
// - Write an Arrow Function with curly brackets
let oddOrEven = (n) => {
  if(n%2 == 0){
    return "Number is Even";
  }
  else{
    return "Number is Odd";
  }
  
};

// - Execute the function
oddOrEven(2);
// - Execute the function and store the return value in a variable
let resultOddEven = oddOrEven(3);
// - What is the typeof returnValue
"string"