// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to
  *  7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate
  *  of human to dog years.
*/

function calculateDogAge(puppyAge) {
  // Your code goes here
    var dogAge = 7* puppyAge ;
    console.log("Dog age is " + dogAge + " years old in dog years!");
    return dogAge;
}
calculateDogAge(1);
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week.
 (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life 
 (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/
const maxAge = 90;
function calculateMoviesToWatch(age,noOfMovies) {
  // Your code goes here
    var moviesMonthly = 4*noOfMovies;
    var yearlyMovies = 12 *moviesMonthly;

    var lifeLong = (maxAge-age) * yearlyMovies;
    return lifeLong;
}
calculateMoviesToWatch(20 ,4);
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celcius) {
  // Your code goes here
  var celsiusToFahrenheit = celcius * 9 / 5 + 32;
  var message = celcius+'\xB0C is ' + celsiusToFahrenheit + ' \xB0F.';
  return message;
}

celsiusToFahrenheit(60);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  // Your code goes here
  
  var fahrenheitToCel = (fahrenheit - 32) * 5 / 9;
  var message = fahrenheit+'\xB0F is ' + fahrenheitToCel + '\xB0C.';
    console.log(message);
    return message;
}
fahrenheitToCelsius(140);
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  var j=0;
  if(n <0 ){
    return `The number is below 1 ,not allowed`;
  }else{
    j= n;
    for (let i=1; i<x ;i++)
    {
      
      j=j*n;

    }
    
  }
  return j;
}
let ans= pow(4,2);
console.log(ans);
// Test
ans=pow(3, 2); // 9
console.log(ans);
ans=pow(3, 3); // 27
console.log(ans);
ans=pow(1, 100); // 1
console.log(ans);
ans=pow(-31, 2); // "The number below 1 is not allowed"
console.log(ans);

/*
6. 🎖Write a program that accepts two parameter a number n and a string
 with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` 
or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n,op) {
  var j=0,k=1;
  if(op=="sum" || op=="product"){
    if(op=="sum"){
      for (let i=1;i<=n;i++){
        j= i+j;
      }
      return j;
    }
    else{
      for(let i=1;i<=n;i++)
      {
        k=k*i;
      }
      return k;
    }
  }
  else{
    alert(`Not a Valid Input`);
  }
}

let result= sumOrProductOfN(4, 'sum'); // 10
console.log(result);
result=sumOrProductOfN(4, 'product'); // 24
console.log(result);
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and 
return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  var j=0;
  for (let i=1;i<=n;i++){
    j= i+j;
  }
  return j;
     
}

sumOfN(5);
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7
 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
function sumOf(n) {
  var sum=0;
  
  console.log(`sum of 5..7...n`)
  for (let k=1;k<=n;k++){
    if(k % 5 === 0 || k%7 === 0){
      sum= k+sum;
      
    }
    

  }
  return sum;
     
}

let sum1=sumOf(20);
console.log(sum1);
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a ,b) {
  if(Number(a) < Number(b)){
    return a;
  }
  else{
    return b;
  }
}

let minimum= min(0, 10);
console.log(minimum);
minimum= min(0, -10);
console.log(minimum);
/*
9. 🎖Write a JavaScript function which accepts an argument and returns the
 type of the value.
*/

function typeCheck(arg) {
  
    return typeof(arg);
  
}

let check = typeCheck("hello");
console.log(check);
check = typeCheck(7097);
console.log(check);
check = typeCheck(null);
console.log(check);
check = typeCheck(undefined);
console.log(check);