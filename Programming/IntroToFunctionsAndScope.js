/* Introduction to Functions and Scopes :
-----------------------------------------

List of concepts involved :
1. What are functions?
2. How to write a function?
3. Invoking a function
4. Advantages of using functions
5. Function declaration vs Function Expression
6. Function Hoisting
7. What is Scope?
8. Global vs Local Scope

Q) What are functions?
-> A function is a piece of code that performs a specific task and which can be reused. 
Suppose you need to write a program to find if the sum of two numbers is greater than 10. 
You could write the following functions for it:
(a) A function that adds two numbers.
(b) A function which checks if the number is greater than 10.

-> Functions make our code more readable and reusable

Q) How to write a function?
-> A function declaration consists of the function keyword, followed by:
(a) The name of the function.
(b) A list of parameters to the function, enclosed in parentheses and separated by 
commas.
(c) The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// declaring a function named greet()
function greet() {
    console.log("Hello there");
}

Q) Function with parameter and return value
-> A function can also have one or more parameters and return values. For example, the 
function square defined below has a single parameter called number and returns the square 
of the number.

function square(number) {
    return number * number;
}
-> When we do not explicitly return any value from the function, undefined is returned by 
default.

Q) Invoking a function :
-> We can invoke/call the function greet using greet()

function greet() {
    console.log("Hello there");
}

// function call
greet();

Q) Function Arguments vs Function Parameters
-> If the function has one or more parameters, we can pass values to these parameters using 
function arguments
(a) Function parameters are the variable names listed in the function definition.
(b) Function arguments are the real values passed to (and received by) the function.

function square(number) {
    return number * number;
}

// function call
var res = square(2);
-> For example, we can pass the argument 2 to the square function defined above using square(2). This argument is 
received by the parameter named number in the function.


Q) Advantages of using functions :
(a) Functions make the code reusable. You can declare a function once and invoke it 
multiple times.
(b) Functions improve readability by abstracting the functionality of a piece of code.
(c) Functions allow us to divide a complex problem into smaller problems.

Q) Function expression 
-> The syntax that we used earlier for creating a function is called a function declaration. 
-> There is another syntax for creating a function that is called a function expression.

// function expression
let sayHi = function() {
    console.log("Hi");
};

sayHi();
-> Here, we can see a variable sayHi being assigned a value, the new function, created as
function() { console.log(“Hi”) }. We then invoke the function sayHi

Q) Function hoisting :
-> Hoisting allows functions to be safely used in code before they are declared. Consider the
function add defined below:

add(2,3);

function add(a,b) { 
    console.log(a + b);
}
/*
The result of the code above is : 5
* /
-> Here, we might expect the invocation of the function add to throw an error since it is being 
invoked before being defined. However, function hoisting lets us use the function before it is 
declared in our code and hence the invocation of the add function does not throw any error 
and logs 5 to the console

Q) Function expressions are not hoisted :
-> In the case of functions, only function declarations are hoisted–but not the function 
expressions. Hence, the below piece of code would throw an error.

add(2,3);

var add = function(a,b) {
    console.log(a + b);
}
/* 
The result in the error: "Uncaught TypeError: add is not a function"
* /


*/ 