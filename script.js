// this part that is not inside any function is technically exercise 1.

alert("Make sure you look inside the developer tools console for some of the outputs if nothing happens when you press a button.");

console.log("exercise 1:")
var isNumber =
  Number.isInteger || function (number) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
var age = 24;
var temperature = 73.654;
var theName = "Luke";
var count = 0;

console.log("Age: " + age);
console.log("Temperature: " + temperature);
console.log("Name: " + theName);
console.log("Count: " + count);

console.log("-----------------------------------------------------");

function myFunction() {
  const number = parseInt(prompt("Enter a number: "));

  // check if number is greater than 0
  if (number > 0) {
    console.log("The number is positive");
    document.getElementById("demo").innerHTML = "The number is positive";
  }

  // check if number is 0
  else if (number == 0) {
    console.log("The number is zero");
    document.getElementById("demo").innerHTML = "The number is zero";
  }

  // if number is less than 0
  else if (number < 0) {
    console.log("The number is negative");
    document.getElementById("demo").innerHTML = "The number is negative";
  }

  // check if input is not a number
  else if (!isNumber(number)) {
    prompt("Please try again and enter a number");
    console.error("Please try again and enter a number");
    document.getElementById("demo").innerHTML =
      "Please try again and enter a number";
  } else {
    console.error("No condition");
  }
}

function myFunction2() {
  const number2 = parseInt(prompt("Enter an age: "));

  if (number2 > 18) {
    console.log("You are old enough to vote!");
    document.getElementById("demo").innerHTML = "You are old enough to vote!";
  }

  if (number2 < 18) {
    console.log("You are not old enough to vote!");
    document.getElementById("demo").innerHTML =
      "You are not old enough to vote!";
  }

  if (number2 == 18) {
    console.log("You are old enough to vote!");
    document.getElementById("demo").innerHTML = "You are old enough to vote!";
  }
}
function myFunction3() {
  const number3 = parseInt(prompt("Enter a number: "));
  const number4 = parseInt(prompt("Enter another number: "));

  if (number3 > number4) {
    console.log("number 1 is bigger than number 2");
    document.getElementById("demo").innerHTML =
      "number 1 is bigger than number 2";
  }

  if (number3 < number4) {
    console.log("number 2 is bigger than number 1");
    document.getElementById("demo").innerHTML =
      "number 2 is bigger than number 1";
  }

  if (number3 == number4) {
    console.log("number 2 is equal to number 1");
    document.getElementById("demo").innerHTML = "number 2 is equal to number 1";
  }
}

function myFunction4() {
  const string = prompt("Enter a letter: ");
  const input = string.charCodeAt(0);
  console.log(input);
  document.getElementById("demo").innerHTML = input;
}

function myFunction5() {
  for (var i = 32; i < 127; i++) {
    console.log(String.fromCharCode(i));
  }
}

function myFunction6() {
  const string = prompt("Enter a letter: ");
  const input = string.charCodeAt(0);

  if (input >= 65 && input <= 90) {
    console.log("this letter is uppercase");

    console.log(input);
    document.getElementById("demo").innerHTML = "this letter is uppercase";
  }

  if (input >= 97 && input <= 122) {
    console.log("this letter is lowercase");

    console.log(input);
    document.getElementById("demo").innerHTML = "this letter is lowercase";
  }

  if (input < 65 && input > 122) {
    prompt("That is not a valid input. Try again: ");
    console.error("That is not a valid input.");
    document.getElementById("demo").innerHTML = "That is not a valid input.";
  }
}

function myFunction7() {
  for (var i = 0; i < 11; i++) {
    console.log(i + "\n");
  }
}

function myFunction8() {
  var i = 1;
  var j = 0;

  while (i < 101) {
    j = j + i;
    i++;
  }
  console.log(j);
}

function myFunction9() {
  const number5 = parseInt(prompt("Enter a number: "));

  var i = 1;

  do {
    console.log(number5 * i);
    i++;
  } while (i < 11);
}

function myFunction10() {
  const number6 = parseInt(prompt("Enter a number: "));
  var i, isPrime = 0;

  if (number6 == 0 || number6 == 1) isPrime = 1;

  for (i = 2; i <= number6 / 2; ++i) {
    if (number6 % i == 0) {
      isPrime = 1;
      break;
    }
  }
  if (isPrime == 0) {
    console.log("" + number6 + " is a prime number");

    document.getElementById("demo").innerHTML = "that is a prime number.";
    return 1;
  } else {
    console.log("" + number6 + " is not a prime number");

    document.getElementById("demo").innerHTML = "that is not a prime number.";
    return 0;
  }
}

function myFunction11() {
  const number7 = parseInt(prompt("Enter a number: "));
  const number8 = parseInt(prompt("Enter another number: "));

  var result = Math.pow(number7, number8);

  console.log("" + number7 + " squared is " + result);
}

function myFunction12(str) {
  const string = prompt("Enter a string: ");
  const result2 = reverseString(string);

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  if (string === null || string === "") {
    console.error("no input provided!");
  } else {
    var reversedString = reverseString(string);
    console.log("reversed string: ", reversedString);
  }

  document.getElementById("demo").innerHTML = result2;
}

function myFunction13() {
  const a = parseInt(prompt("Enter a number: "));

  var i, isPrime2 = 0;

  if (a == 0 || a == 1) isPrime2 = 1;

  for (i = 2; i <= a / 2; ++i) {
    if (a % i == 0) {
      isPrime2 = 1;
      break;
    }
  }
  if (isPrime2 == 0) {
    console.log("" + a + " is a prime number");

    document.getElementById("demo").innerHTML = "that is a prime number.";
    return 1;
  } else {
    console.log("" + a + " is not a prime number");

    document.getElementById("demo").innerHTML = "that is not a prime number.";
    return 0;
  }
}

function myFunction14() {

  const Person = {
    firstName: "John", 
    lastName: "Doe", 
    age: "34", 
    profession: "Computer science"
  };

  alert(Person.firstName + "\n" + Person.lastName + "\n" + Person.age + "\n" + Person.profession);
}

function myFunction15() {
  var a = parseInt(prompt("Enter a number: "));
  var b = parseInt(prompt("Enter another number: "));
  console.log("normal: " + a, b);
  var c = b;
  var b = a;
  var a = c;

  console.log("reversed: " + a, b);
}

function myFunction16() {
  var q = parseInt(prompt("what is 3+3? : "));

  if (q == 9) {
    alert("check console for your output");
    console.log("you are correct");
  } else {
    alert("check console for your output");
    console.log("you are very stupid get a better brain")
  }
}

function myFunction17() {
  var q2p10 = parseInt(prompt("what is 9+10? : "));

  if(q2p10 == 21) {
    alert("check in console for your output")
    console.log("YOU ARE DEFINETLY TOTALLY VERY SMART!");
  } else {
    alert("check in console for your output")
    console.log("YOU ARE VERY STUPID GET A BETTER BRAIN!!!!");
  }
}

function myFunction18() {
  var num1 = parseInt(prompt("enter a number: "));
  var num2 = parseInt(prompt("enter another number: "));

  if (num2 > num1) {
    document.getElementById("demo").innerHTML = "number 2 is bigger than number 1!";
    console.log("number 2 is bigger than number 1!");
  }

  if (num1 > num2) {
    document.getElementById("demo").innerHTML = "number 1 is bigger than number 2!";
    console.log("number 1 is bigger than number 2!")
  }

  if (num1 == num2) {
    document.getElementById("demo").innerHTML = "number 1 and number 2 are equal!";
    console.log("number 1 and number 2 are equal!");
  }
}

function myFunction19() {
  var num1 = parseInt(prompt("enter a number: "));
  var num2 = parseInt(prompt("enter another number: "));
  var num3 = parseInt(prompt("enter 1 more number: "));

  if (num2 > num1 && num2 > num3) {
    document.getElementById("demo").innerHTML = "number 2 is bigger than number 1 and 3!";
    console.log("number 2 is bigger than number 1 and 3!");
  }

  if (num1 > num2 && num1 > num3) {
    document.getElementById("demo").innerHTML = "number 1 is bigger than number 2 and 3!";
    console.log("number 1 is bigger than number 2 and 3!")
  }

  if (num3 > num2 && num3 > num1) {
    document.getElementById("demo").innerHTML = "number 3 is bigger than number 1 and number 2!";
    console.log("number 3 is bigger than number 1 and number 2!");
  }

  if (num1 == num2 && num1 == num3) {
    document.getElementById("demo").innerHTML = "number 1, number 2, and number 3 are equal!";
    console.log("number 1, number 2, and number 3 are equal!");
  }
}

function myFunction20() {
  var in1 = parseInt(prompt("enter a number: "));
  var in2 = parseInt(prompt("enter another number: "));
  
  if (in1 == in2) {
    console.log("number 1 and number 2 are equal.")
  } else {
    const highestNumber = in1 > in2 ? 'number 1 is bigger than number 2' : 'number 2 is bigger than number 1';
    console.log(highestNumber);
    document.getElementById("demo").innerHTML = highestNumber;
  }
}

function myFunction21() {
  var d = parseInt(prompt("enter a number: "));

  if (d % 2 == 0) {
    console.log("even number");
    document.getElementById("demo").innerHTML = "even number";
  } else {
    console.log("odd number");
    document.getElementById("demo").innerHTML ="odd number";
  }
}

function myFunction22() {
  const aPerson = {
    Name: "John", 
    Age: "37", 
    Nationality: "Australian", 
    Job: "Banker", 
    Height: "6.1", 
    Weight: "137.5"
  };

  if (!Number.isInteger(aPerson.Name)) {
    console.log(aPerson.Name);
    document.getElementById("demo").innerHTML = aPerson.Name;
  }

  if (!Number.isInteger(aPerson.Nationality)) {
    console.log(aPerson.Nationality);
    document.getElementById("demo").innerHTML = aPerson.Nationality;
  }

  if(!Number.isInteger(aPerson.Job)) {
    console.log(aPerson.Job);
    document.getElementById("demo").innerHTML = aPerson.Job;
  }
}

function myFunction23() {
  const Circle = {
    radius: "16"
  };

  console.log(Circle);
  document.getElementById("demo").innerHTML = "16";
}

function myFunction24() {
  class Person {
    name;
    gender;
    age;
    profession;
  }
  
  const personObj = new Person();

  personObj.name = "John", 
  personObj.gender = "Male", 
  personObj.age = "27", 
  personObj.profession = "Computer science"

  console.log(personObj);
}

function myFunction25() {
  class Car{
    name;
    color;
    speed;
  }

  const carObjF = new Car();
  const carObjL = new Car();

  carObjF.name = "Ferrari", 
  carObjF.color = "Red", 
  carObjF.speed = "500";

  carObjL.name = "Lamborghini", 
  carObjL.color = "Green", 
  carObjL.speed = "400";

  console.log(carObjF);
  console.log(carObjL);
}

function myFunction26() {
  var student = {
    name : "Peter",
    class : "4",
    rollno : 12
  };

  delete student.rollno;
  console.log(student);
}

function myFunction27() {
  const cars = ["Saab","Volvo","BMW"];

  console.log(cars);
}

function myFunction28() {
  const d = new Date();

  console.log(d);
}

function myFunction29() {
  const carsv2 = ["BMW","Toyota","Honda"];

//  console.log(carsv2);

  console.log(carsv2[0]);
  console.log(carsv2[1]);
  console.log(carsv2[2]);
}

function myFunction30() {
  const fruits = ["pineapple","raspberry","blackberry"];

//  console.log(fruits);

  console.log(fruits[0]);
  console.log(fruits[2]);
}

function myFunction31a() {
  const friends = ["zach","peter","jerry"];

//  console.log(friends);

  console.log(friends[0]);
}

function myFunction31b() {
  const friendsb = ["zach","peter","jerry"];

  delete friendsb[1];
  delete friendsb[2];

  console.log(friendsb);

  console.log("as string: " + friendsb);
  Array.toString();
  console.log(Array.length);
  friendsb.push("bob", "john", "tom");

  console.log(friendsb);
}

function myFunction32a() {
  const nerds = ["bob", "jerry", "isaac", "john", "kevin", "devin"];

  nerds.pop();
  nerds.pop();
  nerds.pop();
  console.log(nerds);
}

function myFunction32b() {
  const nreds = ["bob", "jerry", "isaac", "john", "kevin", "devin"];

  nreds.unshift("james");
  console.log(nreds);
}

function myFunction33() {
  const arr = ["henry", "noah", "james", "oliver", "liam", "jack"];
  arr.shift();
  console.log(arr);
}

function myFunction34() {
  const arrfruits = ["apple", "grape", "cherry", "pineapple", "pear"];
  arrfruits.reverse();
  console.log(arrfruits);
}

function myFunction35a() {
  const fruitsa = ["apple", "pear", "mango", "banana", "blueberry"];
  const fruitsb = [""];

  fruitsb.push(fruitsa[0]);
  fruitsb.push(fruitsa[2]);
  fruitsb.push(fruitsa[4]);

  console.log(fruitsb);
}

function myFunction35b() {
  const fruitsd = ["apple", "pear", "mango", "banana", "blueberry"];
  const fruitse = fruitsd.slice(1, 4);

  console.log(fruitse)
}

function myFunction36()  {
  const fruitsarr = ["apple", "pear", "mango", "banana", "blueberry"];

  for (var i = 0; i <= fruitsarr.length; i++) {
    console.log(fruitsarr[i]);
  }
}
