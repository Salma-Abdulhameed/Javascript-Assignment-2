// 1 //// 
let city = prompt ("Enter Your City Name");
 
if ( city === "karachi"){
    console.log("Welcome to city of light");
    
}else if ("city === lahore"){
    console.log("lahore");
}
else if ("city === quetta"){
    console.log("quetta");
}
else if ("city === peshawar"){
    console.log("peshawar");
}
else if ("city === islamabad"){
    console.log("islamabad");
}
else{
    console.log("City not found");
}

// 2//// 
var gender = prompt("Enter Your Gender");

if (gender ==="male") {

console.log("Good Morning Sir!");
}
else if (gender === "female") {

    console.log("Good Morning Ma'am!");
}
 else {
    console.log("Invalid Gender");
}

// 3 /////

var color = prompt("Enter signal color (red, yellow, green):").toLowerCase();

if (color === "red") {
    console.log("Must Stop");
} 
else if (color === "yellow") {
    console.log("Ready to move");
} 
else if (color === "green") {
    console.log("Move now");
} 
else {
    console.log("Invalid color");
}

// 4 ////

var fuel = prompt("Enter remaining fuel in litres");
fuel = parseFloat(fuel);

if (fuel < 0.25) {
    alert("please refill the fuel in your car");
} else {
    alert("fuel level is sufficient");
}

// 5 //////
//   /a///
// var a = 4;
// If ( ++ a===5){
// Alert("given condition for variable is a true");
// }
//  Ans: true 

///b///
//  var b= 82;
// If (b++===83){
// alert("given condition for variable b is true");
// }
// Ans: False 

///c///
// var c = 12;
// If ( c++ ===13) {
// alert ("condition 1 is true"){
// }
// If (c===13){
// alert("condition 2 is true");
// }
// If ( ++c<14){
// alert ("condition 3 is true");
// }
// If (c===14){
// alert("condition 4 is true");
// }
// }
//  condition 1 False 
//  condition 2 True 
//  condition 3 False 
//  condition 4 True

/// d ////
 var materialCost= 20000;
 var laborCost= 2000;
 var totalCost= materialCost + laborCost;
 if ( totalCost === laborCost + materialCost){
alert ("The cost equals");
} Ans:True 

/// e ///
 if (true){
alert("True");
}
if (false){
alert("False");
}
True, False 

/// f ///
if("car"< "cat"){
alert("car is smaller than cat");
}

 true


// 6 /////
var sub1 = +prompt("Enter marks of Subject 1:");
var sub2 = +prompt("Enter marks of Subject 2:");
var sub3 = +prompt("Enter marks of Subject 3:");
var totalMarks = +prompt("Enter Total Marks:");

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(0) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// / 7 // 
var secretNumber = 7; 

var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
}
else {
    alert("Try again!");
}


/ 8 ////
var number = +prompt("Enter a number:");

if (number % 3 === 0) {
    alert("Number is divisible by 3");
}
else {
    alert("Number is NOT divisible by 3");
}

// 9 ///
var num = +prompt("Enter a number:");

if (num % 2 === 0) {
    alert("Even Number");
}
else {
    alert("Odd Number");
}

/ 10 ///
var temp = +prompt("Enter temperature:");

if (temp > 40) {
    alert("It is too hot outside.");
}
else if (temp > 30) {
    alert("The Weather today is Normal.");
}
else if (temp > 20) {
    alert("Today's Weather is cool.");
}
else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
}
else {
    alert("Weather is very cold.");
}


// / 11 //
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operation (+, -, *, /, %):");

// var result;

// if (operator === "+") {
//     result = num1 + num2;
// }
// else if (operator === "-") {
//     result = num1 - num2;
// }
// else if (operator === "*") {
//     result = num1 * num2;
// }
// else if (operator === "/") {
//     result = num1 / num2;
// }
// else if (operator === "%") {
//     result = num1 % num2;
// }
// else {
//     alert("Invalid operator");
// }

// alert("Result: " + result);