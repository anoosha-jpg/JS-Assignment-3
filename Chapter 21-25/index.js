// String Methods

// Question 1
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. 
// Greet the user using his full name.

var firstaName=prompt("Enter your first name");
var lastName=prompt("Enter your last name");
var fullName= firstaName + " " +lastName;
alert("Hello, " +fullName);

// Question 2
// Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser

var favrtMobile=prompt("Enter your favourite mobile phone model");
var length= favrtMobile.length;
document.write("My favourite mobile is: " + favrtMobile + "<br>");
document.write("Lenght of String: " + length + "<br><br>");

// Question 3
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var word="Pakistani";
var letterIndex= word.indexOf("n");
document.write("String: "+ word + "<br>");
document.write("Index of 'n': " +letterIndex + "<br><br>");

// Question 4
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

word="Hello World";
var lastIndex=word.lastIndexOf("l");
document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + lastIndex +"<br><br>");

// Question 5
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

word= "Pakistani";
var character=word.charAt(3);
document.write("String: "+ word + "<br>");
document.write("Character at index 3 :" + character + "<br><br>");

// Question 6
// Repeat Q1 using string concat() method.

firstName = prompt("Enter your First Name:");
lastName = prompt("Enter your Last Name:");
fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName);

// Question 7
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city="Hyderabad";
var cityReplace= city.replace("Hydera" , "Islama");
document.write("City :" + city +"<br>");
document.write("After replacement: "+ cityReplace + "<br><br>");

// Question 8
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

var sentence="Ali and Sami are best friends. They play cricket and football together.";
var sentenceReplace= sentence.replace("and" , "&");
document.write("Before: "+ sentence + "<br>");
document.write("After: "+ sentenceReplace + "<br><br>");

// Question 9
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var number="472";
var type=typeof(number);
var convert=Number(number);
var newType=typeof(convert);
document.write("Value: " + number + "<br>");
document.write("Type: " + type +"<br>");
document.write("Value: " + convert +"<br>" );
document.write("Type: " + newType +"<br><br>");

// Question 10
// Write a program that takes user input. Convert and show the input in capital letters.

var input=prompt("Write any word");
convert=input.toUpperCase();
document.write("User input: " + input +"<br>");
document.write("Upper case: " + convert +"<br><br>");

// Question 11 
// Write a program that takes user input. Convert and show the input in title case.

input=prompt("Write any word");
var titleCase = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
document.write("User input: " + input +"<br>");
document.write("Title Case: " + titleCase +"<br><br>");

// Question 12
// Write a program that converts the variable num to string. var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num=35.345;
convert=num.toString();
var result = convert.replace(".", ""); 
document.write("Number: "+ num +"<br>");
document.write("Result: "+ result +"<br><br>");

// Question 13
// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64

var username = prompt("Enter your username");

var isValid = true;

for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);

  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    isValid = false;
    break;
  }
}

if (isValid) {
  document.write("Welcome, " + username + "!" +"<br><br>");
} else {
  document.write("Please enter a valid username (no @ . , ! allowed)." + "<br><br>");
}

// Question 14
// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search.
// Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

var A=["cake", "apple pie", "chips", "patties", "cookies"];
var items=prompt("Enter any item that you want to eat").toLowerCase();
var isFound = false;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === items) {
    isFound = true;
    break;
  }
}

if (isFound) {
  alert(items + " is available at index " + i + " in our bakery.");
} else {
  alert("Sorry, " + items + " is not available in our bakery.");
}

// Question 15
// Write a program to take password as an input from user. 
// The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var password = prompt("Enter your password:");

function isValidPassword(pass) {
  if (pass.length < 6) {
    return false;
  }

  var firstChar = pass.charCodeAt(0);
  if (firstChar >= 48 && firstChar <= 57) {
    return false;
  }

  var hasLetter = false;
  var hasNumber = false;

  for (var i = 0; i < pass.length; i++) {
    var code = pass.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      hasLetter = true;
    }

    if (code >= 48 && code <= 57) {
      hasNumber = true;
    }
  }

  return hasLetter && hasNumber;
}

if (isValidPassword(password)) {
  document.write("Password is valid!");
} else {
  document.write("Invalid password. Please enter a valid one. <br> Requirements:<br>- At least 6 characters <br> - Must contain alphabets and numbers<br>- Should not start with a number <br><br>");
}

// Question 16
// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser.

var university="University of Karachi";
var breakUniversity =university.split("");

for (var i = 0; i < breakUniversity.length; i++) {
  document.write(breakUniversity[i] + "<br>");
}
document.write("<br><br>");

// Question 17
// Write a program to display the last character of a user input.

var anyWord=prompt("Enter any word");
var lastWord = anyWord.charAt(anyWord.length - 1);
document.write("User input: " + anyWord + "<br>");
document.write("Last index of input: " + lastWord + "<br><br>");

// Question 18
// You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";
var lowerStr = str.toLowerCase(); 
var words = lowerStr.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

document.write("Text: " + str + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'<br><br>");