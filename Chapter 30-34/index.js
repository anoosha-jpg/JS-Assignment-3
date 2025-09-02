// Data Methods

// Question 1
// Write a program that displays current date and time in your browser.

var date=new Date();
document.write(date);
document.write("<br><br>");

// Question 2
// Write a program that alerts the current month in words. For example December.

var months=["January" , "February" , "March" , "April" , "May" , "June" , "July" ,"August",
    "September" , "October" , "November" , "December"
];
var date=new Date();
var month=months[date.getMonth()];
document.write("Current month: " + month +"<br><br>");

// Question 3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

var days=["Sun" , "Mon" , "Tues" , "Wed" , "Thrus" , "Fri" , "Sat"];
var date=new Date();
var day= days[date.getDay()];
document.write("Today is " + day + "<br><br>");

// Question 4
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

days=["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday" , "Saturday"];
date=new Date();
day= days[date.getDay()];

if (day === "Saturday" || day === "Sunday"){
    alert("It's fun day");
}
else{
    alert("It's a working day");
}

// Question 5
// Write a program that shows the message “First fifteen days of the month”
// if the date is less than 16th of the month else shows “Last days of the month”.

date=new Date();
var dates= date.getDate();

if( date < 16){
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month <br><br>");
}

// Question 6
// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

var currentDate=new Date();
var miliseconds=currentDate.getTime();
var minutes = miliseconds / (1000 * 60);

document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed miliseconds since January 1, 1970: " + miliseconds +"<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes +"<br><br>");

// Question 7
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var now =new Date();
var hour=now.getHours();

if (hour < 12){
    alert("It's AM");
}
else{
    alert("It's PM");
}

// Question 8
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named laterDate.

var lastDate=new Date("31 December 2020");
document.write("Later date: " + lastDate +"<br><br>");

// Question 9
// Create a date object of the starting date of this Ramadan and alert the
// number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

var past=new Date("June 18, 2015");
var today =new Date();
var diff= today.getTime() - past.getTime();
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(daysPassed + " days have passed since 1st Ramadan, 2015 <br><br>");

// Question 10
// Write a program that displays in your browser the seconds that elapsed
// between the reference date and the beginning of 2015.

var referenceDate=new Date("5 December 2015");
var todaysecond= new Date("January 1, 2015");
var secondsDiff= todaysecond.getTime()-referenceDate.getTime();
var passedSecond=Math.floor(diff / 1000);

document.write("On reference Date: " + referenceDate +"<br>");
document.write(passedSecond +" seconds had passed since begininig of 2015 <br><br>");

// Question 11 
// Create a Date object for the current date and time. Extract the hours, 
// reset the date object an hour ahead and finally display the date object in your browser.

currentDate= new Date();
var oneHourAgo = new Date(currentDate);
oneHourAgo.setHours(oneHourAgo.getHours() - 1);

document.write("Current date: " + currentDate +"<br>");
document.write("1 hour ago, it was " + oneHourAgo +"<br><br>");

// Question 12
// Write a program that creates a date object and show the date in an alert
// box that is reset to 100 years back?

currentDate= new Date();
var hundredYearsBack= new Date(currentDate);
hundredYearsBack.setFullYear(currentDate.getFullYear()- 100);
document.write("Current date: " + currentDate +"<br>");
document.write("100 years back, it was " + hundredYearsBack +"<br><br>");

// Question 13
// Write a program to ask the user about his age. Calculate and show his
// birth year in your browser.

var age=prompt("Enter your age");
var currentYear= new Date().getFullYear();
var birthYear= currentYear - age;
document.write("Your age is " + age +"<br>");
document.write("Your birth Year is " + birthYear +"<br>");

// Question 14
// Write a program to generate your K-Electric bill in your browser.
// All the amounts should be rounded off to 2 decimal places.
// Display the following fields:
// a. Customer Name
// b. Current Month
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName=prompt("Enter your name");
var currentMonth=prompt("Enter your current month");
var numberUnits=prompt("Enter your number of units");
var chargeUnit=prompt("Enter your charges per unit");
var latePaymentSurcharge= 350;

var netAmountPayable = (numberUnits * chargeUnit).toFixed(0);  
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(0);  

document.write("<h1>K-Electric Bill</h1>");  
document.write("Customer Name: <b>" + customerName + "</b><br>");  
document.write("Month: <b>" + currentMonth + "</b><br>");  
document.write("Number of units: <b>" + numberUnits + "</b><br>");  
document.write("Charges per unit: <b>" + chargeUnit + "</b><br><br>");  
document.write("Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>");  
document.write("Late Payment Surcharge: <b>" + latePaymentSurcharge + "</b><br>");  
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmountPayable + "</b><br>");  