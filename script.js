// CHAPTER NO 1

// // TASK # 1
// alert("Welcome to our website!");

// // TASK # 2
// alert("Error! Please enter a valid password.")

// // TASK # 3
// alert("Welcome to JS Land... \nHappy Coding!")

// // TASK # 4
// alert("Welcome to JS Land...")
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.")

// // TASK # 5
// alert("Hello... I can run JS through my web browser's console")

// // TASK # 6
// // TASK # 7
// FOR TASK 6 AND TASK 7, GO TO HTML FILE

// CHAPTER NO 2

// // TASK # 1
// let userName;

// // TASK # 2
// let myName = "Muhammad Muzzammil Ahmed";

// // Task # 3
// let message;
// message = "Hello World";
// alert(message);

// // TASK # 4
// let studentName = "John Doe";
// let studentAge = 15;
// let studentCertification = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge + " Years Old.");
// alert(studentCertification);

// // TASK # 5
// let order = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(order);

// // TASK # 6
// let email = "muzzammil4213@gmail.com";
// alert("My Email Address is " + email);

// // TASK # 7
// let book = "A smarter\nway to learn JavaScript"
// alert("I am trying to learn from the Book " + book)

// // TASK # 8
// document.writeln("Yah! I can write HTML content through JavaScript")

// // TASK # 9
// let a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);

// CHAPTER NO 3

// // // TASK # 1
// let myAge;
// myAge = 18
// alert("I am " + myAge + " Years Old.")

// // TASK # 2
// let visitedTime = 14;
// alert("You have visited this site " + visitedTime + " times.")

// // TASK # 3
// let birthYear;
// birthYear = 2007
// document.writeln("My Birth Year is " + birthYear + "</br>Data type of my declared variable is number.")

// // TASK # 4
// let visitorName = "John Doe";
// let productTitle = "T-Shirt";
// let quantity = 5;
// document.writeln(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store.") // FIRST METHOD
// document.writeln(`${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing Store.`); // SECOND METHOD

// CHAPTER NO 4

// // TASK # 1
// let userName = "John Doe",
//   age = 21,
//   gender = "male";

// // TASK # 2

// // 5 LEGAL VARIABLES:

// let _product = "Pepsi";
// let $price = 100;
// let qty = 13;
// let totalPrice = 1300;
// let Buyer = "John Doe";

// // 5 ILLEGAL VARIABLES:

// let class = "ali"
// let %percentage = 90
// let true = true
// let -minus = 20
// let 1name = "John Doe"

// // TASK # 3
// let heading = "<h1>Rules for naming JS variables.</h1>";
// let rule_1 =
//   "Variables names can only contains letters, numbers, $ and _. For example: $my_1stVariable.</br>";
// let rule_2 = "Variables must begin with a letter, $ or _. For example: $name, _name or name.</br>";
// let rule_3 = "Variables names are case sensitive.</br>";
// let rule_4 = "Variables names should not be JS Keywords.";
// document.writeln(heading + rule_1 + rule_2 + rule_3 + rule_4);

// CHAPTER NO 5

// // TASK # 1
// let num1 = 3;
// let num2 = 5;
// let sum = num1 + num2;
// document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum);

// // TASK # 2

// // SUBTRACTION:

// let num1 = 13;
// let num2 = 6;
// let subtract = num1 - num2;
// document.writeln("Subtraction of " + num1 + " and " + num2 + " is " + subtract);

// // MULTIPLICATION:

// let num1 = 15;
// let num2 = 3;
// let multiply = num1 * num2;
// document.writeln("Multiplication of " + num1 + " and " + num2 + " is " + multiply);

// // DIVISION:

// let num1 = 40;
// let num2 = 20;
// let divide = num1 / num2;
// document.writeln("Division of " + num1 + " and " + num2 + " is " + divide);

// // MODULUS:

// let num1 = 6;
// let num2 = 2;
// let modulus = num1 % num2;
// document.writeln("Modulus of " + num1 + " by " + num2 + " is " + modulus);

// // TASK # 3
// let myNum;
// document.writeln("Value after variable declaration is " + myNum + "</br>");
// myNum = 5;
// document.writeln("Initial Value: " + myNum + "</br>");
// myNum++;
// document.writeln("Value after increment is: " + myNum + "</br>");
// myNum += 7;
// document.writeln("Value after addition is: " + myNum + "</br>");
// myNum--;
// document.writeln("Value after decrement is: " + myNum + "</br>");
// let remainder = myNum % 3;
// document.writeln("The remainder is: " + remainder);

// // TASK # 4
// let ticketPrice = 600;
// let ticketQty = 5;
// let ticketBill = ticketPrice * ticketQty;
// document.writeln(
//   "Total cost to buy " + ticketQty + " tickets to a movie is " + ticketBill + " PKR.",
// );

// // TASK # 5
// let tableNum = +prompt("Enter Table Number", 5);
// document.writeln("Table of " + tableNum + "</br> </br>");

// let tableStart = +prompt("Enter Table Start Number", 1);
// let tableEnd = +prompt("Enter Table End Number", 10);

// for (let i = tableStart; i <= tableEnd; i++) {
//   document.writeln(tableNum + " x " + i + " = " + tableNum * i + "</br>");
// }

// // TASK # 6
// let celsiusTemperature = 25;
// let convertToFahrenheit = (celsiusTemperature * 9) / 5 + 32;
// document.writeln(
//   celsiusTemperature + "<sup>o</sup>C is " + convertToFahrenheit + "<sup>o</sup>F." + "</br>",
// );
// let fahrenheitTemperature = 70;
// let convertToCelsius = ((fahrenheitTemperature - 32) * 5) / 9;
// document.writeln(fahrenheitTemperature + "<sup>o</sup>F is " + convertToCelsius + "<sup>o</sup>C.");

// // TASK # 7
// let itemPrice1 = 650;
// let itemPrice2 = 100;
// let itemQty1 = 3;
// let itemQty2 = 7;
// let shippingCharges = 100;
// let totalCost = itemPrice1 * itemQty1 + itemPrice2 * itemQty2 + shippingCharges;
// document.writeln("<h1>Shopping Cart</h1>" + "</br>");
// document.writeln(
//   "Price of item 1 is " + itemPrice1 + "</br>" + "Quantity of item 1 is " + itemQty1 + "</br>",
// );
// document.writeln(
//   "Price of item 2 is " + itemPrice2 + "</br>" + "Quantity of item 2 is " + itemQty2 + "</br>",
// );
// document.writeln("Shipping Charges is " + shippingCharges + "</br></br>");
// document.writeln("Total Cost of your order is " + totalCost);

// // TASK # 8
// let totalMarks = 550;
// let obtainedMarks = 444;
// let percentage = (obtainedMarks / totalMarks) * 100;

// document.writeln("<h1>Marks Sheet</h1>" + "</br>");
// document.writeln("Total Marks: " + totalMarks + "</br>");
// document.writeln("Obtained Marks: " + obtainedMarks + "</br>");
// document.writeln("Percentage: " + percentage + "%");

// // TASK # 9
// let currencyInDollar = 10;
// let currencyInRiyals = 25;
// let totalCurrency = currencyInDollar * 104.8 + currencyInRiyals * 28;

// document.writeln("<h1>Currency in PKR</h1>" + "</br>");
// document.writeln("Total Currency in PKR: " + totalCurrency);

// // TASK # 10
// let num = ((10 + 5) * 10) / 2;
// console.log(num);

// // TASK # 11
// let currentYear = new Date().getFullYear();
// let birthYear = 2007;
// let yourAge = currentYear - birthYear;

// document.writeln("<h1>Age Calculator</h1>" + "</br>");
// document.writeln("Current Year: " + currentYear + "</br>");
// document.writeln("Birth Year: " + birthYear + "</br>");
// document.writeln("Your Age is: " + yourAge);

// // TASK # 12
// let circleRadius = 20;
// let pie = 3.142;
// let radiusSquare = Math.pow(circleRadius, 2);
// let circumference = 2 * (pie * circleRadius);
// let circleArea = pie * radiusSquare;

// document.writeln("<h1>The Geometrizer</h1>" + "</br>");
// document.writeln("Radius of a circle: " + circleRadius + "</br>");
// document.writeln("The circumference: " + circumference + "</br>");
// document.writeln("The area is: " + circleArea);

// // TASK # 13
// let favSnack = "Chocolate Chip";
// let currentAge = 15;
// let maxAge = 65;
// let snackPerDay = 3;
// let totalSnack = ((maxAge - currentAge) * 365) * snackPerDay;

// document.writeln("<h1>The Lifetime Supply Calculator</h1>" + "</br>");
// document.writeln("Favourite Snack: " + favSnack + "</br>");
// document.writeln("Current Age: " + currentAge + "</br>");
// document.writeln("Estimated Maximum Age: " + maxAge + "</br>");
// document.writeln("Amount of snacks per day: " + snackPerDay + "</br>");
// document.writeln(
//   "You will need " +
//     totalSnack +
//     " " +
//     favSnack +
//     " to last you until the ripe old age of " +
//     maxAge +
//     "</br>",
// ); // FIRST METHOD
// document.writeln(
//   `You will need ${totalSnack} ${favSnack} to last you until the ripe old age of ${maxAge}`,
// ); // SECOND METHOD

// CHAPTER NO 6 TO 9

// // TASK # 1
// let a = 10;
// document.writeln("Result:" + "</br>");
// document.writeln("The value of a is: " + a + "</br>");
// document.writeln("..........................................." + "</br></br>");
// document.writeln("The value of ++a is: " + ++a + "</br>" + "Now the value of a is: " + a + "</br>");
// document.writeln("..........................................." + "</br></br>");
// document.writeln("The value of a++ is: " + a++ + "</br>" + "Now the value of a is: " + a + "</br>");
// document.writeln("..........................................." + "</br></br>");
// document.writeln("The value of --a is: " + --a + "</br>" + "Now the value of a is: " + a + "</br>");
// document.writeln("..........................................." + "</br></br>");
// document.writeln("The value of a-- is: " + a-- + "</br>" + "Now the value of a is: " + a + "</br>");

// // TASK # 2
// let a = 2;
// let b = 1;
// let result = --a - --b + ++b + b--;

// // STAGE 1 (--a)
// console.log("--a will be: ", a);

// // STAGE 2 (--a - --b)
// console.log("--b will be: ", b);
// console.log("The result of --a - --b is: ", a - b);

// // STAGE 3 (--a - --b + ++b)
// console.log("++b will be: ", ++b);
// console.log("The result of --a - --b + ++b is: ", a - b + b + 1);

// // STAGE 4 (--a - --b + ++b + b)
// console.log("b will be: ", b);
// console.log("The result of --a - --b + ++b + b is: ", result);

// // TASK # 3
// let userName = prompt("Enter Your Name", "John Doe");
// alert("Welcome " + userName);
// document.writeln("Welcome to our website " + userName);

// TASK # 4 is not in the instructions

// // TASK # 5
// let tableNum = +prompt("Enter Table Number") || 5;
// document.writeln("The table of " + tableNum + " is:" + "</br></br>");
// for (let i = 1; i <= 10; i++) {
// //   document.writeln(tableNum + " x " + i + " = " + tableNum * i + "</br>");
//   document.writeln(`${tableNum} x ${i} = ${tableNum * i} </br>`)
// }

// // TASK # 6
// let subject1 = prompt("Enter Subject 1 Name", "Physics");
// let subject2 = prompt("Enter Subject 2 Name", "Chemistry");
// let subject3 = prompt("Enter Subject 3 Name", "Mathematics");
// let totalMarksPerSub = 100;
// let totalMarks = 300;
// let sub1Marks = prompt("Enter " + subject1 + " Marks");
// let sub2Marks = prompt("Enter " + subject2 + " Marks");
// let sub3Marks = prompt("Enter " + subject3 + " Marks");
// let totalObtained = Number(sub1Marks) + Number(sub2Marks) + Number(sub3Marks);
// let totalPercentage = (totalObtained / totalMarks) * 100 + "%";
// let sub1Percent = (sub1Marks / totalMarksPerSub) * 100 + "%";
// let sub2Percent = (sub2Marks / totalMarksPerSub) * 100 + "%";
// let sub3Percent = (sub3Marks / totalMarksPerSub) * 100 + "%";

// document.writeln(`<table>
//       <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//       </tr>
//       <tr>
//         <td>${subject1}</td>
//         <td>${totalMarksPerSub}</td>
//         <td>${sub1Marks}</td>
//         <td>${sub1Percent}</td>
//       </tr>
//       <tr>
//         <td>${subject2}</td>
//         <td>${totalMarksPerSub}</td>
//         <td>${sub2Marks}</td>
//         <td>${sub2Percent}</td>
//       </tr>
//       <tr>
//         <td>${subject3}</td>
//         <td>${totalMarksPerSub}</td>
//         <td>${sub3Marks}</td>
//         <td>${sub3Percent}</td>
//       </tr>
//       <tr>
//         <td></td>
//         <td>${totalMarks}</td>
//         <td>${totalObtained}</td>
//         <td>${totalPercentage}</td>
//       </tr>

//     </table>`);

// CHAPTER NO 9 TO 11

// // TASK # 1
// let userCity = prompt("Enter Your City Name").toLowerCase();
// if (userCity === "karachi") {
//   alert("Welcome to city of lights");
// }

// // TASK # 2
// let userGender = prompt("Enter Your Gender").toLowerCase();
// if (userGender === "male") {
//   alert("Good Morning Sir!");
// } else if (userGender === "female") {
//   alert("Good Morning Madam!");
// }

// // TASK # 3
// let trafficSignal = prompt("Please enter the Road Traffic Signal color").toLowerCase();
// if (trafficSignal === "red") {
//   alert("Must Stop!");
// } else if (trafficSignal === "yellow") {
//   alert("Ready To Move!");
// } else if (trafficSignal === "green") {
//   alert("Move Now!");
// }

// // TASK # 4
// let remainingFuel = +prompt("What is the remaining fuel in your car?");
// // console.log(remainingFuel);

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }

// // TASK # 5

// // Part a:
// let a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// // OUTPUT: TRUE

// // Part b:
// let b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// // OUTPUT: FALSE

// // Part c:
// let c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// // OUTPUT: 1st is FALSE, 2nd is TRUE, 3rd is FALSE & 4th is TRUE

// // Part d:
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// // OUTPUT: TRUE

// // Part e:
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// // OUTPUT: 1st is TRUE & 2nd is FALSE

// // Part f:
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// // OUTPUT: TRUE (I do not know how it's true.)

// // TASK # 6
// let physicsMarks = +prompt("Enter Physics Marks");
// let chemistryMarks = +prompt("Enter Chemistry Marks");
// let mathMarks = +prompt("Enter Math Marks");
// let totalMarks = +prompt("Enter Total Marks");
// let obtainedMarks = physicsMarks + chemistryMarks + mathMarks;
// let obtainedPercent = (obtainedMarks / totalMarks) * 100;
// let Grade;
// let Remarks;
// if (obtainedPercent >= 80) {
//   Grade = "A-one";
//   Remarks = "Excellent";
// } else if (obtainedPercent >= 70) {
//   Grade = "A";
//   Remarks = "Good";
// } else if (obtainedPercent >= 60) {
//   Grade = "B";
//   Remarks = "You need to improve";
// } else {
//   Grade = "Fail";
//   Remarks = "Sorry";
// }
// document.writeln(`<h1>Mark Sheet</h1></br>
//     Total marks: ${totalMarks}<br>
//     Mark obtained: ${obtainedMarks}<br>
//     Percentage: ${obtainedPercent}%<br>
//     Grade: ${Grade}<br>
//     Remarks: ${Remarks}<br>
// `);

// // TASK # 7
// let secretNum = Math.floor(Math.random() * 10 + 1);
// let guessNum = +prompt("Guess The Number Between 1 To 10");
// if (guessNum === secretNum) {
//   alert("Bingo!");
// } else if (guessNum + 1 === secretNum || guessNum - 1 === secretNum) {
//   alert("Close enough to the correct answer!");
// }
// console.log(secretNum);
// console.log(guessNum);

// // TASK # 8
// let userNum = +prompt("Enter a number to check whether it's divisible by 3");

// if (userNum % 3 === 0) {
//   alert(userNum + " is divisible by 3");
// } else {
//   alert(userNum + " is not divisible by 3");
// }

// // TASK # 9
// let userNum = +prompt("Enter the number");
// if (userNum % 2 === 0) {
//   alert(userNum + " is an even number!");
// } else {
//   alert(userNum + " is odd number!");
// }

// // TASK # 10
// let userTemperature = +prompt("Enter the temperature of your area");
// if (userTemperature > 40) {
//     alert("It is too hot outside!")
// } else if (userTemperature > 30) {
//     alert("The weather today is normal!")
// } else if (userTemperature > 20) {
//     alert("Today's weather is cool!")
// } else if (userTemperature > 10) {
//     alert("OMG! Today's weather is so cool!")
// }

// // TASK # 11
// let num1 = +prompt("Enter first number:");
// let operator = prompt("Enter operator , (+, -, *, / & %):");
// let num2 = +prompt("Enter second number:");

// if (operator === "+") {
//   document.write(
//     "<b><span style='font-size: 40px; color: green;'>" + (num1 + num2) + "</span></b>",
//   );
// } else if (operator === "-") {
//   document.write(
//     "<b><span style='font-size: 40px; color: green;'>" + (num1 - num2) + "</span></b>",
//   );
// } else if (operator === "*") {
//   document.write("<b><span style='font-size: 40px; color: green;'>" + num1 * num2 + "</span></b>");
// } else if (operator === "/") {
//   document.write("<b><span style='font-size: 40px; color: green;'>" + num1 / num2 + "</span></b>");
// } else if (operator === "%") {
//   document.write(
//     "<b><span style='font-size: 40px; color: green;'>" + (num1 % num2) + "</span></b>",
//   );
// } else {
//   document.write(
//     "<b><span style='font-size: 40px; color: red;'>" + "Invalid operator" + "</span></b>",
//   );
// }

// CHAPTER 12 TO 13

// // TASK # 1
// let string = prompt("Enter a character");

// if (string.length === 0) {
//   alert("Please enter a character!");
// } else {
//   let character = string.charAt(0);

//   if (!isNaN(character * 1)) {
//     alert("The value is numeric!");
//   } else if (character >= "a" && character <= "z") {
//     alert("The value is a text in lower case!");
//   } else if (character >= "A" && character <= "Z") {
//     alert("The value is a text in upper case!");
//   } else {
//     alert("The value is a special character!");
//   }
// }

// // TASK # 2
// let num1 = +prompt("Enter Integer 1");
// let num2 = +prompt("Enter Integer 2");

// if (num1 - num2 > 0) {
//   alert(`Integer 1(${num1}) is bigger than Integer 2(${num2})`);
// } else if (num2 - num1 > 0) {
//   alert(`Integer 2(${num2}) is bigger than Integer 1(${num1})`);
// } else if (num1 == num2) {
//   alert(`Integer 1(${num1}) is equal to Integer 2(${num2})`);
// }

// // TASK # 3
// let num = +prompt("Enter the number");

// if (num > 0) {
//   alert("The Number is Positive!");
// } else if (num < 0) {
//   alert("The Number is Negative!");
// } else if (num == 0) {
//   alert("The Number is Zero!");
// }

// // TASK # 4
// let userInput = prompt("Enter a character");
// if (userInput == "a" || userInput == "e"|| userInput == "i"|| userInput == "o"|| userInput == "u") {
//     alert(userInput+" is a vowel")
// }else{
//     alert(userInput+" is not a vowel")
// }

// // TASK # 5
// let correctPassword = "Pakistan123";
// let userPassword = prompt("Enter your Password");

// if (userPassword.length === 0) {
//   alert("Please Enter Your Password!");
// } else {
//   if (correctPassword === userPassword) {
//     alert("Correct! The Password you entered matches the original!");
//   } else {
//     alert("Incorrect Password!")
//   }
// }

// // TASK # 6
// let greeting;
// let hour = 16;
// if (hour < 18) {
//   greeting = "Good day";
//   alert(greeting);
// } else {
//   greeting = "Good night";
//   alert(greeting);
// }

// // TASK # 7
// let userTime = +prompt("Please enter your time in 24 hour format. E.g: 1900 = 7:00");

// if (userTime >= "0000" && userTime < 1200) {
//   alert("Good Morning!");
// } else if (userTime >= 1200 && userTime < 1700) {
//   alert("Good Afternoon!");
// } else if (userTime >= 1700 && userTime < 2100) {
//   alert("Good Evening!");
// } else if (userTime >= 2100 && userTime <= 2359) {
//   alert("Good Night!");
// } else {
//   alert("Please Enter the correct time format!");
// }

// CHAPTER NO 14 TO 16

// // TASK # 1
// let stdName = []

// // TASK # 2
// let objArr = { userName: [] };
// let objArr = new Array()

// // TASK # 3
// let stringArr = ["Karachi" , "Islamabad" , "Lahore" , "Multan" , "Quetta"]

// // TASK # 4
// let numberArr = [20, 234.24, 4645645];

// // TASK # 5
// let booleanArr = [true, false];

// // TASK # 6
// let mixedArr = ["Ali", "Pakistan", 1213, true, "Ahmed", null, undefined, 546.43];

// // TASK # 7
// let educQualArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.writeln(`<h1>Qualification:</h1></br>`);

// for (let i = 0; i <h1 educQualArr.length; i++) {
//   document.writeln(i + 1 + ") " + educQualArr[i] + "</br>");
// }

// // TASK # 8
// let stdNames = ["Michael", "John", "David"];
// let stdScores = [320, 400, 450];
// let totalMarks = 500;

// for (let i = 0; i <br stdNames.length; i++) {
//   let percentage = (stdScores[i] / totalMarks) * 100;

//   document.writeln(
//     "Score of " + stdNames[i] + " is " + stdScores[i] + ". Percentage: " + percentage + "%" + "</br>",
//   );
// }

// // TASK # 9
// let colors = ["Red", "Green", "Blue", "Yellow"];

// document.writeln("<h3>Initial Array</h3>");
// document.writeln(colors.join(", "));

// // a. Add color to the beginning
// let colorBeginning = prompt("Which color do you want to add to the beginning?");

// colors.unshift(colorBeginning);

// document.writeln("<h3>After adding color to beginning</h3>");
// document.writeln(colors.join(", "));

// // b. Add color to the end
// let colorEnd = prompt("Which color do you want to add to the end?");

// colors.push(colorEnd);

// document.writeln("<h3>After adding color to end</h3>");
// document.writeln(colors.join(", "));

// // c. Add two more colors to the beginning
// colors.unshift("Orange", "Purple");

// document.writeln("<h3>After adding two colors to beginning</h3>");
// document.writeln(colors.join(", "));

// // d. Delete the first color
// colors.shift();

// document.writeln("<h3>After deleting first color</h3>");
// document.writeln(colors.join(", "));

// // e. Delete the last color
// colors.pop();

// document.writeln("<h3>After deleting last color</h3>");
// document.writeln(colors.join(", "));

// // f. Ask index and color, then add color at that position
// let addIndex = +prompt("At which index do you want to add a color?");
// let addColor = prompt("Which color do you want to add?");

// colors.splice(addIndex, 0, addColor);

// document.writeln("<h3>After adding color at desired index</h3>");
// document.writeln(colors.join(", "));

// // g. Ask index and number of colors to delete
// let deleteIndex = +prompt("At which index do you want to delete color(s)?");
// let deleteCount = +prompt("How many colors do you want to delete?");

// colors.splice(deleteIndex, deleteCount);

// document.writeln("<h3>After deleting colors</h3>");
// document.writeln(colors.join(", "));

// // TASK # 10
// let stdScores = [320, 230, 480, 120];

// document.write("Score of Students: " + stdScores + "<br>");
// stdScores.sort((a, b) => a - b);
// document.write("Ordered Score of Students: " + stdScores);

// // TASK # 11
// let citiesNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.writeln("<h3>Cities List:</h3>" + citiesNames.join(", ") + "</br></br>");
// let selectecCities = citiesNames.slice(0, 3);
// document.writeln("<h3>Selected Cities List:</h3>" + selectecCities.join(", "));

// // TASK # 12
// let arr = ["This", "is", "my", "cat"];
// document.writeln(`<h1>Array:</h1> ${arr}`)

// let joinArr = arr.join(" ");
// document.writeln(`<h1>String:</h1> ${joinArr}`)

// // TASK # 13
// let deviceArr = [];

// deviceArr.push("Keyboard");
// deviceArr.push("Mouse");
// deviceArr.push("Printer");
// deviceArr.push("Monitor");

// document.writeln(`<h2>Devices:</h2> ${deviceArr} </br>`);
// for (let i = 0; i < 4; i++) {
//   document.writeln(`<h3>Out:<h3> ${deviceArr.shift()} </br>`);
// }

// // TASK # 14
// let deviceArr = []

// deviceArr.unshift("Monitor")
// deviceArr.unshift("Printer")
// deviceArr.unshift("Mouse")
// deviceArr.unshift("Keyboard")

// document.writeln(`<h2>Devices:</h2> ${deviceArr} </br>`);
// for (let i = 0; i < 4; i++) {
//   document.writeln(`<h3>Out:<h3> ${deviceArr.pop()} </br>`);
// }

// // TASK # 15
// let phoneModels = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // A SINGLE ONE
// document.write(`<select>
//       <option value="${phoneModels[0]}">${phoneModels[0]}</option>
//       <option value="${phoneModels[1]}">${phoneModels[1]}</option>
//       <option value="${phoneModels[2]}">${phoneModels[2]}</option>
//       <option value="${phoneModels[3]}">${phoneModels[3]}</option>
//       <option value="${phoneModels[4]}">${phoneModels[4]}</option>
//       <option value="${phoneModels[5]}">${phoneModels[5]}</option>
//     </select>`);

// // FOR EVERY MODELS
// for (let i = 0; i < phoneModels.length; i++) {
//   document.write(`<select>
//       <option value="${phoneModels[i]}">${phoneModels[i]}</option>
//     </select> </br>`);
// }

// // CHAPTER NO 17 TO 20

// // TASK # 1
// let arr = [[], [], []];

// // TASK # 2
// let matrixArr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (let i = 0; i < matrixArr.length; i++) {
//   for (let j = 0; j < matrixArr[i].length; j++) {
//     document.writeln(matrixArr[i][j]);
//   }
//   document.writeln("</br>");
// }

// // TASK # 3
// for (let i = 1; i <= 10; i++) {
//   document.writeln(i + "</br>");
// }

// // TASK # 4
// let tableNumber = +prompt("Enter the table number")
// let tableEndNum = +prompt("Enter the table end number")

// document.writeln("Multiplication table of " + tableNumber + "</br>")
// document.writeln("Length " + tableEndNum + "</br></br>")

// for (let i = 1; i <= tableEndNum; i++) {
//     document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} </br>`)
// }

// // TASK # 5
// let fruitsName = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for (let i = 0; i < fruitsName.length; i++) {
//   document.writeln(fruitsName[i] + "</br>");
// }

// document.write("</br>");

// for (let i = 0; i < fruitsName.length; i++) {
//   document.writeln("Element at index " + i + " is " + fruitsName[i] + "</br>");
// }

// // TASK # 6

// // PART (a)
// document.write("a. Counting: ");
// for (let i = 1; i <= 15; i++) {
//   document.write(i + ",");
// }
// document.writeln("</br>");

// // PART (b)
// document.write("b. Reverse Counting: ");
// for (let i = 10; i >= 1; i--) {
//   document.write(i + ",");
// }
// document.writeln("</br>");

// // PART (c)
// document.write("c. Even: ");
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(i + ",");
//   }
// }
// document.writeln("</br>");

// // PART (d)
// document.write("d. Odd: ");
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 1) {
//     document.write(i + ",");
//   }
// }
// document.writeln("</br>");

// // PART (e)
// document.write("e. Series: ");
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(i + "k,");
//   }
// }
// document.writeln("</br>");

// TASK # 7
// let bakeryProducts = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];

// let userInput = prompt("Welcome to ABC Bakery, What do you want to order Sir/Madam?").toUpperCase();

// let flag = false;
// for (let i = 0; i < bakeryProducts.length; i++) {
//   if (userInput === bakeryProducts[i]) {
//     document.writeln(userInput + " is available at index " + i + " in our bakery");
//     flag = true;
//     break;
//   }
// }

// if (!flag) {
//   document.writeln("We are sorry, " + userInput + " is not available in our bakery");
// }

// // TASK # 8
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.writeln("Array Items: " + A + "</br>");
// document.writeln("The largest number is " + largest);

// // TASK # 9
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// document.writeln("Array Items: " + A + "</br>");
// document.writeln("The smallest number is " + smallest);

// // TASK # 10
// for (let i = 5; i <= 100; i += 5) {
//   document.writeln(i + ", ");
// }

// CHAPTER NO 21 TO 25

// // TASK # 1
// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");

// // let fullName = firstName + " " + lastName;
// let fullName = `${firstName} ${lastName}`
// alert(`Welcome ${fullName}`)

// // TASK # 2
// let favMobileModel = prompt("What is your favourite mobile phone model?");

// document.writeln("My Favourite Phone is: " + favMobileModel + "</br>");
// document.writeln("Length of String: " + favMobileModel.length);

// // TASK # 3
// let word = "Pakistani";
// let indexOf = word.indexOf("n");

// document.writeln("Sting: " + word + "</br>" + "Index of 'n': " + indexOf);

// // TAKS # 4
// let word = "Hello World"
// let lastIndexOf = word.lastIndexOf("l")

// document.writeln("Sting: " + word + "</br>" + "Last index of 'l': " + lastIndexOf);

// // TASK # 5
// let word = "Pakistani";
// let findCharOf = word.charAt(3);

// document.writeln("Sting: " + word + "</br>" + "Character at index '3': " + findCharOf);

// // TASK # 6
// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");

// let fullName = firstName.concat(" ", lastName);
// alert(`Welcome ${fullName}!`);

// // TASK # 7
// let city = "Hyderabad"
// document.writeln(`City: ${city} </br>`)

// let updateCity = city.replace("Hyder" , "Islam")
// document.writeln(`After replacement: ${updateCity}`)

// // TASK # 8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// document.writeln(`Message: ${message} </br>`)

// // let updateMess = message.replace(/and/g , "&") // FIRST METHOD
// let updateMess = message.replaceAll("and" , "&") // SECOND METHOD
// document.writeln(`After Updating: ${updateMess}`)

// // TASK # 9
// let string1 = "472";
// let convertToNum = Number(string1);

// document.writeln(`Value: ${string1}</br>Type: ${typeof string1}</br>`)
// document.writeln(`Value: ${string1}</br>Type: ${typeof convertToNum}`)

// // TAKS # 10
// let userInput = "peanuts"
// let upperCase = userInput.toUpperCase()

// document.writeln(`User Input: ${userInput}</br>`)
// // document.writeln(`Upper Case: ${userInput.toUpperCase()}`) // FIRST METHOD
// document.writeln(`Upper Case: ${upperCase}`) // SECOND METHOD

// // TASK # 11
// let userInput = prompt("Type anything that you want to convert into Title Case");

// let titleCase = userInput
//   .toLowerCase()
//   .split(" ")
//   .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
//   .join(" ");

// document.writeln(`User Input: ${userInput}<br>`);
// document.writeln(`Title Case: ${titleCase}`);

// // TASK # 12
// let num = 35.36;
// let convertToString = num.toString().replace(".", "");

// document.writeln(`Number: ${num}<br>`)
// document.writeln(`Result: ${convertToString}`)

// // TASK # 13

// // 1st Method
// // let userName = prompt("Enter Your Username");

// // for (let i = 0; i < userName.length; i++) {
// //   if (
// //     userName.charCodeAt(i) === 33 ||
// //     userName.charCodeAt(i) === 44 ||
// //     userName.charCodeAt(i) === 46 ||
// //     userName.charCodeAt(i) === 64
// //   ) {
// //     alert("Please Enter a valid username!");
// //     break;
// //   }
// // }

// // 2nd Method
// let userName = prompt("Enter Your Username");

// for (let i = 0; i < userName.length; i++) {
//   if ("!,.@".includes(userName[i])) {
//     alert("Please enter a valid username!");
//     break;
//   }
// }

// // TASK # 14
// let bakeryProducts = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userProduct = prompt(
//   "Welcome to ABC Bakery. What do you want to order Sir/Madam?",
// ).toLowerCase();

// let flag = false;
// for (let i = 0; i < bakeryProducts.length; i++) {
//   if (userProduct === bakeryProducts[i]) {
//     alert(`${userProduct} is available at index ${i} in our bakery.`);
//     flag = true;
//     break;
//   }
// }
// if (!flag) {
//   alert(`We are sorry. ${userProduct} is not available in our bakery.`);
// }

// // TASK # 15
// let userPassword = prompt("Enter Your Password");
// let hasAlphabet = false;
// let hasNumber = false;
// let startsWithNumber = false;

// for (let i = 0; i < userPassword.length; i++) {
//   let code = userPassword.charCodeAt(i);

//   // CHECK FOR A-Z or a-z
//   if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//     hasAlphabet = true;
//   }

//   // CHECK FOR 0-9
//   if (code >= 48 && code <= 57) {
//     hasNumber = true;
//   }

//   // CHECK ONLY THE FIRST CHARACTER
//   if (i === 0 && code >= 48 && code <= 57) {
//     startsWithNumber = true;
//   }
// }

// if (userPassword.length >= 6 && hasAlphabet && hasNumber && !startsWithNumber) {
//   alert("Password Accepted!");
// } else {
//   alert("Invalid Password!");
// }

// // TASK # 16
// let university = "University of Karachi";
// let universityArr = university.split("");

// for (let i = 0; i < universityArr.length; i++) {
//   document.writeln(`${universityArr[i]} <br>`);
// }

// // TASK # 17
// let userInput = "Pakistan";
// let lastCharUserInput = userInput[userInput.length - 1];

// document.writeln(`User Input: ${userInput}<br>Last Character of Input: ${lastCharUserInput}`);

// // TASK # 18
// let sentence = "The quick brown fox jumps over the lazy dog";
// let words = sentence.toLowerCase().split(" ");

// let count = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// document.writeln(`Text: ${sentence}<br>There are ${count} occurrence(s) of word 'the'`);

// CHAPTER NO 26 TO 30

// // TASK # 1
// let userNum = +prompt("Enter the positive integer");

// let rounfOffval = Math.round(userNum);
// let floorOffval = Math.floor(userNum);
// let cielOffval = Math.ceil(userNum);

// document.writeln(
//   `Number: ${userNum}<br>Round Off Value: ${rounfOffval}<br>Floor Value: ${floorOffval}<br>Ciel Value: ${cielOffval}`,
// );

// // TASK # 2
// let userNum = +prompt("Enter the negative integer");

// let rounfOffval = Math.round(userNum);
// let floorOffval = Math.floor(userNum);
// let cielOffval = Math.ceil(userNum);

// document.writeln(
//   `Number: ${userNum}<br>Round Off Value: ${rounfOffval}<br>Floor Value: ${floorOffval}<br>Ciel Value: ${cielOffval}`,
// );

// // TASK # 3
// let userNum = prompt("Enter a Number ");
// let absNum = Math.abs(userNum);

// document.writeln(`The absolute value of ${userNum} is ${absNum}`)

// // TASK # 4
// let firstDiceValue = Math.floor(Math.random() * 6 + 1);
// let secondDiceValue = Math.floor(Math.random() * 6 + 1);

// document.writeln(`Random Dice Value: ${firstDiceValue}<br>Random Dice Value: ${secondDiceValue}`)

// // TASK # 5
// let coin = Math.floor(Math.random() * 2 + 1);

// document.writeln(`Count: ${coin} <br>`);
// if (coin === 2) {
//   document.writeln("Coin Value: Heads");
// } else {
//   document.writeln("Coin Value: Tails");
// }

// // TASK # 6
// let randomNum = Math.floor(Math.random() * 100 + 1);
// document.writeln(`Random Number between 1 & 100 is: ${randomNum}`)

// // TASK # 7
// let userWeight = prompt("Enter your weight");
// let weight = parseFloat(userWeight);

// document.writeln(`The weight of user is ${weight} kg.`);

// // TASK # 8
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userNumber = +prompt("Guess a number between 1 and 10:");

// if (userNumber >= 11 || userNumber <= 0) {
//   alert("Please enter a number between 1 and 10");
// } else {
//   if (userNumber === secretNumber) {
//     alert("Congratulations! You guess the secret number");
//   }
// }

// document.writeln(`Secret Number: ${secretNumber}<br>Your Number: ${userNumber}`);

// CHAPTER NO 31 TO 34

// // TASK # 1
// let now = new Date()
// document.writeln(now)

// // TASK # 2
// let now = new Date();
// let month = now.toLocaleDateString("en-US", { month: "long" });

// document.writeln(`Current Month: ${month}`);

// // TASK # 3
// let now = new Date();
// let today = now.toLocaleDateString("en-US", { weekday: "long" });

// let firstThreeLetters = today.slice(0, 3);
// document.writeln(`Today is ${firstThreeLetters}`);

// // TASK # 4

// // FIRST METHOD:
// // let now = new Date();
// // let day = now.toLocaleDateString("en-US", { weekday: "long" });

// // if (day === "Saturday" || day === "Sunday") {
// //   alert("It's a Fun day!");
// // }

// // SECOND METHOD:
// let now = new Date();
// let day = now.getDay();

// if (day === 0 || day === 6) {
//   alert("It's a Fun day!");
// }

// // THIRD METHOD:
// // let now = new Date();
// // let day = now.toDateString().slice(0, 3);

// // if (day === "Sat" || day === "Sun") {
// //   alert("It's a Fun day!");
// // }

// // TASK # 5
// let date = new Date();
// let currentDate = date.getDate();

// if (currentDate < 16) {
//   document.writeln("First fifteen days of the month");
// } else {
//   document.writeln("Last days of the month");
// }

// // TASK # 6
// let now = new Date();
// let miliSecSince1970 = now.getTime();
// let minSince1970 = miliSecSince1970 / (1000 * 60);

// document.writeln(
//   `Current Date: ${now}<br>Elapsed miliseconds Since January 1, 1970:  ${miliSecSince1970}<br>Elapsed minutes Since January 1, 1970: ${minSince1970}`,
// );

// // TASK # 7
// let now = new Date();
// let currentHour = now.getHours();

// if (currentHour  < 12) {
//   document.writeln("It's AM.");
// } else {
//   document.writeln("It's PM.");
// }

// // TASK # 8
// let laterDate = new Date(2020, 11, 31);
// document.writeln(`Later Date: ${laterDate}`);

// // TASK # 9
// let now = new Date().getTime();
// let firstRamadan = new Date(2015, 5, 18).getTime();

// let diff = now - firstRamadan;
// let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));

// document.writeln(`${daysPassed} days have passed since 1st Ramadan, 2015.`);

// // TASK # 10
// let refDate = new Date(2015, 11, 5, 22, 50, 16);
// let begOf2015 = new Date(2015, 0, 1);

// let diff = refDate.getTime() - begOf2015.getTime();
// let secondsPassed = Math.floor(diff / 1000);

// document.writeln(
//   `On reference date ${refDate}, ${secondsPassed} seconds had passed since beginning of 2015`,
// );

// // TASK # 11
// let now = new Date();
// document.writeln(`Current Date: ${now}<br>`);

// now.setHours(now.getHours() - 1);
// document.writeln(`1 Hour Ago, It was ${now}`);

// // TASK # 12
// let now = new Date();
// document.writeln(`Current Date: ${now}<br>`);

// now.setFullYear(now.getFullYear() - 100);
// document.writeln(`100 Years Ago, It was ${now}`);
// alert(now);

// // TASK # 13
// let userAge = +prompt("Enter Your Age");

// let userBirthYear = new Date().getFullYear() - userAge;

// document.writeln(`Your Age is ${userAge}<br>Your Birth Year is ${userBirthYear}`)

// // TASK # 14
// let customerName = "ABC Customer";
// let currentMonth = new Date().toLocaleString("en-US", { month: "long" });

// let numberOfUnits = 410;
// let chargesPerUnit = 16;

// let netAmount = numberOfUnits * chargesPerUnit;
// let latePaymentSurcharge = 350;
// let grossAmount = netAmount + latePaymentSurcharge;

// document.writeln(`
//   <h2>K-Electric Bill</h2>

//   Customer Name: ${customerName}<br>
//   Current Month: ${currentMonth}<br>
//   Number of Units: ${numberOfUnits}<br>
//   Charges per Unit: ${chargesPerUnit.toFixed(2)}<br><br>
//   Net Amount Payable (within Due Date): ${netAmount.toFixed(2)}<br>
//   Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}<br>
//   Gross Amount Payable (after Due Date): ${grossAmount.toFixed(2)}
// `);

// CHAPTER NO 35 TO 38

// // TASK # 1
// const displayDate = () => {
//   let now = new Date();
//   document.writeln(now);
// };

// displayDate();

// // TASK # 2
// const greet = (firstName, lastName) => {
//   let fullName = `${firstName} ${lastName}`;
//   document.writeln(`Hello ${fullName}`);
// };

// greet("Muzzammil", "Ahmed");

// // TASK # 3

// // METHOD 1
// // const addition = () => {
// //   let num1 = +prompt("Enter Num 1");
// //   let num2 = +prompt("Enter Num 2");

// //   return num1 + num2
// // };

// // let result = addition()
// // document.writeln(`Result: ${result}`)

// // METHOD 2
// const addition = (num1, num2) => num1 + num2;

// let num1 = +prompt("Enter Num 1");
// let num2 = +prompt("Enter Num 2");

// document.writeln(`Result: ${addition(num1, num2)}`);

// // TASK # 4
// const calculator = (num1, opt, num2) => {
//   if (opt === "+") {
//     return num1 + num2;
//   } else if (opt === "-") {
//     return num1 - num2;
//   } else if (opt === "*") {
//     return num1 * num2;
//   } else if (opt === "/") {
//     return num1 / num2;
//   } else if (opt === "%") {
//     return num1 % num2;
//   } else {
//     return "Invalid Operator";
//   }
// };

// let num1 = +prompt("Enter Num 1");
// let opt = prompt("Enter the operator");
// let num2 = +prompt("Enter Num 2");

// document.writeln(`Calculator: ${calculator(num1, opt, num2)}`);

// // TASK # 5
// const square = (num) => {
//   return num * num;
// };

// let num = +prompt("Enter a number:");
// document.writeln(`Square: ${square(num)}`);

// // TASK # 6
// const factorial = (num) => {
//   let result = 1;

//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }

//   return result;
// };

// let num = +prompt("Enter a number:");
// document.writeln(`Factorial: ${factorial(num)}`);

// // TASK # 7
// const counting = (start, end) => {
//   for (let i = start; i <= end; i++) {
//     document.writeln(i + "<br>");
//   }
// };

// let start = +prompt("Enter a Starting Number");
// let end = +prompt("Enter a Ending Number");

// counting(start, end);

// // TASK # 8
// const calculateHypotenuse = (base, perpendicular) => {
//   const calculateSquare = (num) => {
//     return num * num;
//   };

//   let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));

//   return hypotenuse;
// };

// let base = +prompt("Enter Base");
// let perpendicular = +prompt("Enter Perpendicular");

// document.writeln(`Hypotenuse: ${calculateHypotenuse(base, perpendicular)}`);

// // TASK # 9

// // Arguments As Value
// // const rectangleArea = (width, height) => {
// //   return width * height;
// // };

// // document.writeln(`Rectangle Area ${rectangleArea(10, 5)}`);

// // Arguments As Variables
// const rectangleArea = (width, height) => {
//   return width * height;
// };

// let width = 10;
// let height = 5;

// document.writeln(`Rectangle Area ${rectangleArea(width, height)}`);
