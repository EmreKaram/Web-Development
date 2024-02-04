// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);

// ---------------OR----------------

// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// ---------------OR----------------

// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumbers.push(num);
//   }
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });

// ---------------OR----------------

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

// import emojipedia from "./emojipedia";

// const newEmojipedia = emojipedia.map(function (emojiEntry) {
//   // map() will return a new array
//   return emojiEntry.meaning.substring(0, 100);
// }); // .substring(0, 100) will only return the first 100 characters of the meaning

// console.log(newEmojipedia);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map((x) => x * x); // If there is only one parameter, you can remove the parentheses like (x) to x

// console.log(newNumbers);

// //Map -Create a new array by doing something with each item in an array.
// const newNumbersMap = numbers.map((x) => x * 2);
// console.log(newNumbersMap);

// ////Filter - Create a new array by keeping the items that return true.
// const newNumbersFilter = numbers.filter((num) => num < 10);
// console.log(newNumbersFilter);

// // Reduce - Accumulate a value by doing something to each item in an array.
// var newNumberReduce = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );
// console.log(newNumberReduce);

// //Find - find the first item that matches from an array.
// const newNumberFind = numbers.find((num) => num > 10);
// console.log(newNumberFind);

// //FindIndex - find the index of the first item that matches.
// const newNumberFindIndex = numbers.findIndex((num) => num > 10);
// console.log(newNumberFindIndex);
