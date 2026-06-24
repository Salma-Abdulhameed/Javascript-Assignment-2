
// CHAPTER 2

//// 1 /////

// var username;

///// 2 /////

// var  myName = "Salma Abdul Hameed";

///// 3 //////

// / a/////
// var message;

///// b ////
// message = "Hello World";

///// c ////
// alert(message)

//// 4 ////
// var studentName = "Jhone Doe";
// var StudentAge = "15 years old";
// var studentCourse = "Certified Mobile Application Development"
// alert(studentName);
// alert(StudentAge);
// alert(studentCourse);

//// 5 ////
// var pattern = `PIZZA
// PIZZ
// PIZ
// PI
// P
// `;
// alert(pattern);

/// 6 /////

// var email = "salma@example.com";
// alert("My email is " + email);

//// 7 ////
// var book = "A Smarter way to learn JavaSript";
// alert("I am trying to learn from the book" +  book);

//// 8 /////
// document.writeln("Yah! I can write HTML content through JavaScript");

//// 9 //////
// var design = "-----------@*@------------";
// alert (design);
// document.writeln(design);

/// CHAPTER 3//////

//// 1 //////

// var age = 16;
// alert("I am " + age + "years old");

//// 2 /////
// var visits = 14;
// alert("You have visited this site" + visits + "times");

////// 3 /////
// var birthYear = 2009;
// typeof birthYear;
// document.writeln("My birth year is" + birthYear);

// //// 4 /////
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.writeln(visitorName + " ordered " + quantity + " " + productTitle + "on XYZ Clothing store");


///// CHAPTER 4 /////


/// 1 ////
// var name = "John" , product = "T-shirts", quantity = 5;

//// 2 ////
// Legal variable
// var name;
// var _age;
// var $price;
// var user1;
// var total_amount;

// illegal varible
// var 1name;
// var my  name;
// var @value;
// var var;
// var user- name;

//// 3 ////

//// a ////
// document.writeln("<h1> Rules for naming JS variables</h1>");

//// b ////
// letters, numbers and $

//// c ////
// $name, _name or name,

//// d ///
// sensitive

//// e ///
// keywords


//  CHAPTER 5 //

// 1 ////

// var num = 3;
// num = num + 5;
// console.log(num);

//// 2  ///
// var num = 3;
// num = num - 5;
// console.log(num);


// var num = 3;
// num = num * 5;
// console.log(num);

// var num = 3;
// num = num / 5;
// console.log(num);

// var num = 3;
// num = num % 5;
// console.log(num);

//// 3 /////

//// a ////
// var num;

/// b ////
// console.log(num);

/// c ////
// var num = 5;

/// d ///
// console.log(num);

//// e ///
// num++;

/// f ///
// console.log(num);

//// g ////
// num = num + 7;

//// h /// 
// console.log(num);

//// i ////
// num--;


//// CHAPTER 6-9 /////
/// 1 /////
// var a= 10;
// var result= a++ - a++ + --a + a++
// console.log(result);
// console.log(a);

//// 2////
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
//             1    -  0   + 2  + 0
// console.log(result);

//// 3////

// var name = prompt("Enter Your Name");
// console.log("Hello!");

//// 4 ///

// let num = +prompt("Enter a number for table", 5);
// let startNum = +prompt("Enter Start Number!");
// let endNum = +prompt ("Enter End Number!");
// for (let i= startNum; i<=endNum; i++){
//     document.writeln(`${num} x ${i} =${i* num} <br>`)
// }

//// 5 ////
///// a //////
//   var sub1 = prompt("Enter first subject:");
//   var sub2 = prompt("Enter second subject:");
//   var sub3 = prompt("Enter third subject:");

// /// b ///
// var totalMarks= 100;
 
// /// c ///
// var marks1 = +prompt ("Enter Obtained marks for " + sub1+ ":");
// var marks2 = +prompt ("Enter Obtained marks for " + sub2+ ":");
// var marks3 = +prompt ("Enter Obtained marks for " + sub3+ ":");

//// d ////
// var totalObtained = marks1 + marks2 + marks3;
// var totalAll = totalMarks * 3;

/// e ////
// var per1 = (marks1 / totalMarks) * 100;
// var per1 = (marks1 / totalMarks) * 100;
// var per1 = (marks1 / totalMarks) * 100;
// var overallPer= (totalObtained / totalAll)* 100;

// document.writeln("<tr>");
// document.writeln("<th>Subject</th><th>Marks</th>");
// document.writeln("</tr>");

// document.writeln("<tr>");
// document.writeln("<td>English</td><td>54</td>");
// document.writeln("</tr>");

// document.writeln("<tr>");
// document.writeln("<td>Math</td><td>54</td>");
// document.writeln("</tr>");

// document.writeln("</table>");