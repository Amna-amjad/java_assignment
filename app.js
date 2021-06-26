// Chapter 26 to 34.

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a=prompt("Write a positive integer");
// var roundOf = Math.round(a);
// var floor = Math.floor(a);
// var ceil = Math.ceil(a);
// document.write("Number is " + a + "<br>");
// document.write("RoundOff is " + roundOf + "<br>");
// document.write("FloorNUm is " + floor + "<br>");
// document.write("CeilNum is " + ceil  );


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a=prompt("Write a negative integer");
// var roundOf = Math.round(a);
// var floor = Math.floor(a);
// var ceil = Math.ceil(a);
// document.write("Number is " + a + "<br>");
// document.write("RoundOff is " + roundOf + "<br>");
// document.write("FloorNUm is " + floor + "<br>");
// document.write("CeilNum is " + ceil  );


// 3. Write a program that displays the absolute value of a
// number.

// var a=prompt("Write a value to display absolute number");
// var absolute = Math.abs(a);
//  document.write("The absolute value of " + a + " is " + absolute);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var a= Math.floor(4*Math.random())+2;
// document.write("random dice value: " + a + "<br>");
// var a= Math.floor(6*Math.random())+2;
// document.write("random dice value: " + a + "<br>");

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var a = "Heads";
// b = "tails"
// var number = Math.random()*2 +1;
// var floor = Math.floor(number);
// if (floor === 1){
//     document.write(floor + "<br>" + " Random coin value: " + b);
// }
// else{
//     document.write(floor + "<br>" + "Random coin value: " + a);
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var a= Math.floor(100*Math.random())+1;
//  document.write("Random number between 1 and 100 is: " + a);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.

// var weight = prompt("Enter your weight in kilograms");
// var a = Number.parseFloat(weight);
// document.write("The weight of user is " + a + " Kilograms");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var a=Math.floor(10*Math.random());
// var b=prompt("Enter a number between 1 to 10");
// if (b <= a) {
//     alert("Congratulations! You won");
// }
// else  {
//     alert("Try again!");
// }


//Chapter 26 to 30 ended


// Chapter 31 to 34 started

// 1. Write a program that displays current date and time in
// your browser.

// var date = new Date();
// document.write(date);

// 2. Write a program that alerts the current month in words.

// var d= new Date();
//  var m=["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"];
//  alert("Current month: " + m[d.getMonth()]);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var d= new Date();
//  var days=["Sun" , "Mon" , "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var n = days[d.getDay()];
//  alert("Today is " + n);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

//  var d= new Date();
// var n= d.getDay();
// if ( n === 6 || n=== 7) {
//     alert("It's Fun day.")
// }
// else {
//     alert("It's working day.")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date();
// if (date < 15){
//     document.write("First fifteen days of the month");

// }else{
//     document.write("Last Days of Month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// var milliSec = date.getTime();
// var mins = milliSec/60000;
// document.write("Current date: " + date + "<br>");
// document.write("Elapsed milliseconds since Jan 1, 1970: " + milliSec + "<br>");
// document.write("Elapsed minutes since Jan 1, 1970: " + mins + "<br>");


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var time = date.getHours()
// if(time > 12){
//     document.write("Its PM");
// }
// else{
//     document.write("Its AM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var date = new Date();
// var laterDate = date.setFullYear(2021, 05, 30);
// alert("Later Date: " + date);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?


// var date = new Date();
// var lastDate = new Date(2021, 03, 14);
// var time = date.getTime() - lastDate.getTime();
// var ab = time / (1000 * 3600 * 24);
// var round = Math.round(ab);
// document.write(round + " days has been passed away since the first Ramazan 2021 ");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var date = new Date();
// var refDate = new Date(2021, 5, 26);
// var abs = Math.abs(date - refDate) / 1000;
// var round = Math.round(abs);
// alert("On reference date " + refDate + ", " + round +  "  seconds had been passed since beginning of 2021");


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var date = new Date();
// var hrs = (date.getHours()-1);
// var hrs  = date.setHours(date.getHours()-1);
// var hrs = new Date(date.getTime() - (1000*60*60));
// document.write("Current date: " + date + "<br>");
// var a = date.setHours(--date);
// var ab = (date - a);
// document.write("1 hour ago the time was: " + hrs ); 

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth();
// var day = date.getDate();
// var a = new Date(year - 100, month, day);
// alert("Current date: " + date + "\n" + "100 years back it was " + a)

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = +prompt("enter your age");
// var today = new Date();
// var year = today.getFullYear();

// alert("your age is "+ age +" your birth year is "+ (year-age));


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
// var customerName = "Amjad" 
// var units = 340;
// var chargesPerUnit = 18;
// var date = new Date();
// var month = date.getMonth();
// var monthName = months[month];
// var netAmount = units*chargesPerUnit;
// var latePaySurcharge = 200;
// var dueDate = new Date("25 june,2021");
// dueDate.setMonth(month)
// var todayDate = new Date()
// var chkDate = dueDate-todayDate
// var charges;
// var match = false
// if (chkDate < 0 ) {
//      charges = netAmount+latePaySurcharge;
//     match = true;
// }
// if (match != true ) {
//     charges = netAmount
// }

// document.write("<h1> K Electric Bill </h1>" + "<br>" );
// document.write("Customer Name: "+ customerName + "<br>");
// document.write("Month: " + monthName +  "<br>");
// document.write("Number of Units: " + units + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br>");
// document.write("Due date : " + dueDate + "<br>");
// document.write("Today's date : " + todayDate + "<br>" + "<br>");
// document.write("Net amount payablle within due date : " + netAmount + "<br>");
// document.write("Late payment surcharge: " + latePaySurcharge + "<br>");
// document.write("Gross Amount Payable After due date: "+ netAmount+latePaySurcharge + "<br>");
// document.write("Amount Payable Today: " + charges);

// END OF CHAPTERS 31 to 34...............








































































































