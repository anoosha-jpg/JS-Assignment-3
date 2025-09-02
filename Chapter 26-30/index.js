// Math Methods

// Question 1
// Write a program that takes a positive integer from user & display the following in your browser.
// a. number b. round off value of the number c. floor value of the number d. ceil value of the number

var number=+prompt("Enter any integer number");
var round=Math.round(number);
var floor=Math.floor(number);
var ceil=Math.ceil(number);
document.write("Number: " + number +"<br>");
document.write("Round off value: " + round +"<br>");
document.write("Floor value: " + floor +"<br>");
document.write("Ceil value: " + ceil +"<br><br>");

// Question 2
// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number b. round off value of the number c. floor value of the number d. ceil value of the number

var number=+prompt("Enter any negative number");
var round=Math.round(number);
var floor=Math.floor(number);
var ceil=Math.ceil(number);
document.write("Number: " + number +"<br>");
document.write("Round off value: " + round +"<br>");
document.write("Floor value: " + floor +"<br>");
document.write("Ceil value: " + ceil +"<br><br>");

// Question 3
// Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = +prompt("Enter any number");
var absoluteValue = Math.abs(num);

// document.write("Number: " + num + "<br>");
// document.write("Absolute value: " + absoluteValue + "<br><br>");

document.write("The absolute value of "+ num + " is "+ absoluteValue + "<br><br>");

// Question 4
// Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.:

var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dice+"<br><br>");

// Question 5
// Write a program that simulates a coin toss using random() method of JS Math class.
// Display the value of coin in your browser

var toss = Math.random();   

if (toss < 0.5) {
    document.write("Random value: " + toss + "<br>");
    document.write("Result: Heads");
} else {
    document.write("Random value: " + toss + "<br>");
    document.write("Result: Tails");
}
document.write("<br><br>");

// Question 6
// Write a program that shows a random number between 1 and 100 in your browser.

var randomNumber= Math.floor(Math.random() * 100) + 1;
document.write("Random Number between 1 and 100: " + randomNumber +"<br><br>");

// Question 7
// Write a program that asks the user about his weight.
// Parse the user input and display his weight in your browser.
// Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

var userWeight=prompt("Enter your weight");
var weight=parseFloat(userWeight);
document.write(`The weight of user is ${weight} kilograms.<br><br>` );

// Question 8
// Write a program that stores a random secret number from 1 to 10 in a variable.
// Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user.

var secretNumber= Math.floor(Math.random()*10)+1;
var userInput=prompt("Enter number between 1 to 10");

if (secretNumber === userInput){
  document.write("Congratulations! You guessed the secret number "+ secretNumber +"<br><br>");
}
else{
   document.write("Try again! The secret number was "+ secretNumber +"<br><br>");
}