// this part that is not inside any function is technically exercise 1.

alert("Make sure you look inside the developer tools console for some of the outputs.");

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

function isPrime() {
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
