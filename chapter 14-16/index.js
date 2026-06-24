/// 1 ///
// var studentNames = [];

/// 2 ///
// var studentNames = new Array();

// 3 ///
// var fruits = ["Apple", "Banana", "Mango"];

// 4 ///
// var numbers = [10, 20, 30, 40];

/// 5 /// 
// var flags = [true, false, true];

/// 6 ///
// var mixedArray = ["Ali", 25, true];

/// 7 ///
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications:</h2>");

// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

/// 8 ////
// var students = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];

// var totalMarks = 500;

// for (var i = 0; i < students.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;

//     document.write("Score of " + students[i] + " is " + scores[i] + 
//     ". Percentage: " + percentage + "%<br>");
// }

/// 9 ///
// var colors = ["Red", "Green", "Blue"];
// document.write("Initial Colors: " + colors + " ");


//// a ////
// var colorStart = prompt("Which color you want to add at beginning?");
// colors.unshift(colorStart);
// document.write("After adding at beginning: " + colors + " ");


/// b ///
// var colorEnd = prompt("Which color you want to add at end?");
// colors.push(colorEnd);
// document.write("After adding at end: " + colors + " ");


/// c ///
// var color1 = prompt("Enter first color to add at beginning:");
// var color2 = prompt("Enter second color to add at beginning:");
// colors.unshift(color1, color2);
// document.write("After adding two more at beginning: " + colors + " ");


//// d ///
// colors.shift();
// document.write("After deleting first color: " + colors + "<br><br>");


/// e ///
// colors.pop();
// document.write("After deleting last color: " + colors + "<br><br>");


/// f ///
// var indexAdd = prompt("At which index you want to add color?");
// var colorAdd = prompt("Enter color name:");
// colors.splice(indexAdd, 0, colorAdd);
// document.write("After adding at index: " + colors + "<br><br>");


// // g ////
// var indexDel = prompt("At which index you want to delete?");
// var countDel = prompt("How many colors you want to delete?");
// colors.splice(indexDel, countDel);
// document.write("After deleting colors: " + colors);

//// 10 /// 
// var scores = [320, 230, 480, 120];

// document.write("Scores of Students: " + scores + "<br>");

// scores.sort(function(a, b) {
//     return a - b;
// });

// document.write("Ordered Scores of Students: " + scores);

/// 11 ///
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2, 4);

// document.write("<h3>Cities list:</h3>");
// document.write(cities + "<br><br>");

// document.write("<h3>Selected cities list:</h3>");
// document.write(selectedCities);

/// 12 ///
// var arr = ["This", "is", "my", "cat"];

// document.write("<h3>Array:</h3>");
// document.write(arr + "<br><br>");

// var str = arr.join(" ");

// document.write("<h3>String:</h3>");
// document.write(str);

//// 13 ////
// var items = [];
// items.push("Keyboard");
// items.push("Mouse");
// items.push("Printer");
// items.push("Monitor");
// document.write("Devices:<br>" + items + "<br><br>");
// document.write("Out:<br>" + items.shift() + "<br>");
// document.write("Out:<br>" + items.shift() + "<br>");
// document.write("Out:<br>" + items.shift() + "<br>");
// document.write("Out:<br>" + items.shift() + "<br>");