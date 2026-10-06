// Q1. Basic Operations
// Write a JavaScript program that takes a number and calculates:
// Its square
// Its cube
// Display both results.

// let number = 5;

// let square = number * number;
// let cube = number * number * number;

// console.log("Square = " + square);
// console.log("Cube = " + cube);






// Q2. Electricity Bill
// Write a JavaScript program that takes the number of electricity units consumed
// and calculates the bill according to these rules:
// Up to 50 units → Rs. 5 per unit
// 51–100 units → Rs. 7 per unit
// 101–200 units → Rs. 10 per unit
// Above 200 units → Rs. 12 per unit
// Use if...else if...else.
// let units = 150;
// let bill;

// let units = 150;

// if (units <= 50) {
//     console.log("Rs. " + units * 5);
// } else if (units <= 100) {
//     console.log("Rs. " + units * 7);
// } else if (units <= 200) {
//     console.log("Rs. " + units * 10);
// } else {
//     console.log("Rs. " + units * 12);
// }






// Q3. Age Category
// Write a JavaScript program that takes a person's age and displays:

// Below 13 → "Child"
// 13–19 → "Teenager"
// 20–59 → "Adult"
// 60 or above → "Senior Citizen"
// Use if...else if...else.

// let age = 18;

// if (age < 13) {
//     console.log("Child");
// } else if (age <= 19) {
//     console.log("Teenager");
// } else if (age <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }





// Q4. Traffic Light
// Write a JavaScript program that takes a traffic light color ("red", "yellow", or "green") and displays:

// "Stop" for red
// "Get Ready" for yellow
// "Go" for green
// "Invalid color" for any other input
// Use a switch statement.
// let color = "red";
// let color = "green";

// Q4. Traffic Light

// let color = "red";

// switch (color) {
//     case "red": console.log("Stop"); break;
//     case "yellow": console.log("Get Ready"); break;
//     case "green": console.log("Go"); break;
//     default: console.log("Invalid color");
// }

// let color = "green";

// switch (color) {
//     case "red": console.log("Stop"); break;
//     case "yellow": console.log("Get Ready"); break;
//     case "green": console.log("Go"); break;
//     default: console.log("Invalid color");
// }





// Q5.Month Season
// Write a JavaScript program that takes a month number(1–12)
// and displays the corresponding season:

// Winter: 12, 1, 2
// Spring: 3, 4, 5
// Summer: 6, 7, 8
// Autumn: 9, 10, 11
// Use a switch statement.Display "Invalid month" for numbers outside 1–12.

let month = 5;
switch (month) {
    case 1: console.log("Winter"); break;
    case 2: console.log("Winter"); break;
    case 3: console.log("Spring"); break;
    case 4: console.log("Spring"); break;
    case 5: console.log("Spring"); break;
    case 6: console.log("Summer"); break;
    case 7: console.log("Summer"); break;
    case 8: console.log("Summer"); break;
    case 9: console.log("Autumn"); break;
    case 10: console.log("Autumn"); break;
    case 11: console.log("Autumn"); break;
    case 12: console.log("Winter"); break;
    default: console.log("Invalid month");
}

