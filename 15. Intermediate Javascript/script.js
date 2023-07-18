function diceRoll() {
  var n = Math.random();
  n = n * 6; // 0-5
  n = Math.floor(n) + 1; // 1-6
  return n;
}

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100; // 0-99
loveScore = Math.floor(loveScore) + 1; // 1-100

if (loveScore > 70) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      " You love each other like Kanye loves Kanye."
  );
} else {
  alert("Your love score is " + loveScore + "%");
}

// == vs ===
// == checks for equality of value
// === checks for equality of value and type
// && and || , ! are logical operators
// && is and
// || is or
// ! is not

// Love calculator
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
} else if (loveScore <= 30) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      " You go together like oil and water."
  );
}

// Leap year
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

// Arrays and List
var GuestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(GuestList.length); // 6
console.log(GuestList[0]); // Angela (first element) 0 is based index

var guestName = prompt("What is your name?");
if (guestName.includes(GuestList)) {
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time.");
}

// FizzBuzz
// If divisible by 3, print Fizz instead of the number and if divisible by 5, print Buzz.
// If divisible by both 3 and 5, print FizzBuzz. Otherwise, print the number.

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}

// Who's buying lunch?
// Write a function which will select a random name from a list of names.
// The person selected will have to pay for everybody's food bill.

function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.

  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";

  /******Don't change the code below*******/
}

// While loops
var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

// 99 bottles of beer
var numberOfBottles = 99;
function beer() {
  while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
      bottleWord = "bottles";
    }
    console.log(
      numberOfBottles +
        " bottles of beer on the wall " +
        numberOfBottles +
        " bottles of beer,"
    );
    numberOfBottles--;
    console.log(
      "Take one down, pass it around," +
        numberOfBottles +
        " bottles of beer on the wall."
    );
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer,");
  console.log(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}

// For loops
for (var i = 0; i < 10; i++) {
  // i++ is the same as i = i + 1 or i += 1. i-- is the same as i = i - 1 or i -= 1.
  //Do something
}

// Fibonacci
function fibbonaciGenerator(n) {
  var output = []; 
  if (n === 1) { // if n = 1, output = [0]
    output = [0];
  } else if (n === 2) { // if n = 2, output = [0, 1]
    output = [0, 1];
  } else { // 
    output = [0, 1]; 
    for (var i = 2; i < n; i++) { // i = 2, 3, 4, 5, 6, 7, 8, 9
      output.push(output[output.length - 2] + output[output.length - 1]); // output[0] + output[1] = 0 + 1 = 1, output[1] + output[2] = 1 + 1 = 2, output[2] + output[3] = 1 + 2 = 3, output[3] + output[4] = 2 + 3 = 5, output[4] + output[5] = 3 + 5 = 8, output[5] + output[6] = 5 + 8 = 13, output[6] + output[7] = 8 + 13 = 21, output[7] + output[8] = 13 + 21 = 34
    }
  }
  return output;
}
