"use strict";
// Question: 55
// list of numbers
let numbers = [1, 2, 3, 4, 5];
// list of double numbers
let doubleNumbers = numbers.map(number => number * 2);
// Display the original and doubled numbers
console.log("Numbers:", numbers);
console.log("Doubled Numbers:", doubleNumbers);
// Question: 56
let mixedArray = [1, "apple", true, "banana", 5, "orange", false, "grapes"];
let stringsArray = mixedArray.filter(item => typeof item === 'string');
console.log(stringsArray);
// Question: 57
// List of grades
let grades = [86, 92, 75, 99, 88];
// Calculate the sum of all grades
let sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Calculate the average grade
let averageGrade = sum / grades.length;
// shows the average grade
console.log("Average Grade:", averageGrade);
