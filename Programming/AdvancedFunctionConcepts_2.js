/* Topics Covered :
1. Higher Oder Functions
2. Composability
3. Arrow Functions
4. Why are functions in JS 'first-class-citizen'
5. IIFE
6. Taking User Input in JS

Higher Order Functions :
-> Higher Order Functions (HOF) are functions that takes other functions
   as arguments or return function as a result. I hope you are 
   familiar with Arrays and their functions.
-> Let me take you into deeper in this HOF concept. Arrays function such 
   as map, filter, sort, reduce, forEach and so on are Higher Order 
   function because these functions accept function as an argument and 
   return desired output.

Programming Example :
-> In this example, using the inbuilt array manipulation functions,
-> Using filter function which accept function as an argument with one 
   argument in the function and do the filtration process
-> Using sort function to arrange the array in the descending order and 
   that sort function will accept function as an argument with two 
   argument and do the sorting. */ 

const arr = [1,2,3,4,5];

// Filter the array
const filteredArr = arr.filter(function(item){
    return item > 3
})
console.log(filteredArr);   // [4,5]

// Sort the array in descending order 
arr.sort(function(a,b){
    return b - a;
})
console.log(arr);



/* Composability :
->  Function composition is a mechanism of combining multiple simple 
    functions to build a more complicated one. The result of each 
    function is passed to the next one. 
-> In mathematics, we often write something like: f(g(x)). So this is the
    result of g(x) that is passed to f. In programing we can achieved the
    composition by writing something similar. 
-> Let's take a quick example. Suppose I need to make some arithmetic by 
   doing the following operation: 2 + 3 * 5. As you may know, the 
   multiplication has the priority over the addition. So you start by 
   calculating 3 * 5 and then when add 2 to the result.*/ 

const add = (a,b) => a + b;
const mult = (a,b) => a + b;
add(2, mult(3,5));

/* Why do we use Composability?
-> Let me explain with real time example,
-> Think of an industrial plant that produce bottles of cool drinks; 
   first there is the operation (or function) f1f1 that puts the cool 
   drinks inside the bottle, followed by the operation f2f2 that close 
   the bottle with the cap.
-> In the above example we need to follow certain series of action, in 
   the similar way we need to implement certain functionality which needs
   to be followed one after another.*/ 

