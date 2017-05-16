//PRINTING OUTPUT Project - May 2017 - Marida Waters

//add this note to rid file of ERROR messages:
/*global alert, console, prompt, confirm, sum*/

/* TASK 1:
Declare three variables, a and b and c.
If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions 
( one after another ). Alert popup box has to show the following content for each expression 
(concatenate everything in one long expression using "\n" to make new lines):
Use the following template for each expression below:
// alert( "description of alerted_value: " + alerted_value );

a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/


// TASK 1 - my solution:
var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n_ _ _ _ _ _ _ _ _ _\n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "(a += b): " + (a += b) + "\n" +
    "(a -= b): " + (a -= b) + "\n" +
    "(a *= b): " + (a *= b) + "\n" +
    "(a /= b): " + (a /= b) + "\n" +
    "(a %= b): " + (a %= b) + "\n" +
    "(a == b): " + (a == b) + "\n" +
    "(a != b): " + (a != b) + "\n" +
    "(a > b): " + (a > b) + "\n" +
    "(a < b): " + (a < b) + "\n" +
    "(!a && !c): " + (!a && !c) + "\n" +
    "(!a || !c): " + (!a || !c) + "\n");



/* TASK 2:
Declare the variable first_name and assign it with the value of your first name;
Declare the variable last_name and assign it with the value of your last name;
Declare the variable email and assign it with the value of your email;
Declare the variable output;
Create the expression concatenating variables first_name, last_name, email and string literals 
needed to complete the sentence reading: "My name is Your-first-name Your-last-name. 
You can contact me at your-email@mail.com.";
Assign output with gotten expression;
Alert output.
*/

var first_name = "Marida";
var last_name = "Waters";
var email = "wate0005@algonquinlive.com";
var output = "My name is " + first_name + " " + last_name + ". " + "You can contact me at " + email + ".";

alert(output);



/* TASK 3:
Here is the array containing random integers between 100 and 200:

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];
Add up the first and last element of the array.
Declare variable sum and assign it with value gotten by addition of the two array elements.
Check if sum is an even or an odd number.
If sum is an even number print the output confirming that, for example... see project outline.

If sum is an odd number print the output confirming that, for example... see project outline.

*/

var a = Math.floor(Math.random() * (200 - 100) + 100);
var b = Math.floor(Math.random() * (200 - 100) + 100);
var c = Math.floor(Math.random() * (200 - 100) + 100);
var d = Math.floor(Math.random() * (200 - 100) + 100);
var e = Math.floor(Math.random() * (200 - 100) + 100);


var sum = (a + " + " + e = (a + e));

/*
if (sum % 2 == 0 ) {
alert(var sum = (a + e);\n"This is an even number!");
}
else (sum % 2 !== 0 ) {
alert(var sum = (a + e);\n"This is an odd number!");
}

/*
var sum = (a + e);

alert(sum);

if (a %= e) {
    "This is an even number!";
} else {
    "This is an odd number!";
}
*/
