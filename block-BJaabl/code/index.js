/*
1. Create a function named `sayHello` that that accepts a parameter `name`
 and alert `Hello [name]!`.
*/
function sayHello(name){
  alert(`Hello ${name}`);
}

sayHello("Reena");
/*
2. Create a function named `getFullName` that accepts two parameter
 `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName(firstName ,lastName)
{
   let fullName = firstName +" " + lastName ;
   return fullName;
}

let fullName = getFullName("John","Snow");
alert(`${fullName}`);
 fullName = getFullName("Jack","Frost");
alert(`${fullName}`);

/*
3. Create a function named `addTwoNumbers` that accepts two numbers
 i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert
 a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers(firstNum,secondNum){
  if(Number.isInteger(firstNum) && Number.isInteger(secondNum) ==true){
    let sum = firstNum + secondNum;
    return sum;
  }
  else{
    alert(`Enter Valid Input`);
  }
 
}

let result =addTwoNumbers(10,22);
console.log(`${result}`);

result=addTwoNumbers(20,32);
console.log(`${result}`)
addTwoNumbers(10,"100");

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and
 `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value.
 If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc(numA ,numB , operation)
{
  var result;
  if(Number.isInteger(numA) && Number.isInteger(numB)== true)
  {
   switch(operation){
    case 'add' : 
     result =numA + numB;
     return result;
     break;
    case 'sub' :
       result = numA - numB;
       return result;
       break;
    case 'mul' :
        result = numA * numB;
        return result;
        break;  
    case 'div' :
          result = numA / numB;
          return result;
          break;
    default:
      alert(`not a valid operation`);
   }
  }
else{
  alert(`Enter valid input!!`);
   }
}

let output= calc(10, 20, 'add'); // 30
console.log(output);
output = calc(20, 10, 'sub'); // 10
console.log(output);
output =calc(20, 10, 'mul'); // 200
console.log(output);


/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` 
or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isLeapYear(year){
  
  if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
		{
			
      return true; 
		}
		else
		{
			
      return false;
		}
}
let leapYr=isLeapYear(2000);
console.log(leapYr);
leapYr= isLeapYear(2001);
console.log(leapYr);

/*
6. Create a function named `getFactorial` that accepts a number and return
 the factorial of the number.
*/

function getFactorial(){
  
  let factorial=1;
  for (let j=1 ;j<= number ;j++){
     factorial= factorial*j;
  }
  return factorial;
}

let number= +prompt(`Enter a Number`);
let factorialOfNum=getFactorial(number);
alert(`The factorial of ${number} is ${factorialOfNum}`);