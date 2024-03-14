/*
 Simplified Explanation for classList:
   - classList is a property that helps add, remove, check, and toggle classes on HTML elements.
   - obj.classList is an instance of classList specific to an HTML element.
   - It simplifies the process of working with CSS classes in JavaScript.
Note : Har object k liye uske classes ki List check kr skte h.

 Explanation of Style Manipulation in JavaScript using classList:
   1. classList
   2. obj.classList

  (a) classList.add() to add new classes
  (b) classList.remove() to remove classes
  (c) classList.contains() to check if a class exists
  (d) classList.toggle() to toggle between adding and removing a class (Toggle Means Switch)


*/

// Selecting an image element
let img = document.querySelector('img');

// Explanation: Accessing and displaying the classList of the image element
console.log(img.classList); // Value: '' [means img class is empty]

// (a) Explanation: Adding a new class to the image element
img.classList.add('bordered');

// (b) Explanation: Removing a class from the image element
// Uncomment the line below to remove the 'bordered' class
// img.classList.remove('bordered');

// (c) Explanation: Checking if the 'bordered' class exists in the image element's classList
let hasBorderedClass = img.classList.contains('bordered');
console.log("Does 'bordered' class exist:", hasBorderedClass);  // true

// (d) Explanation: Toggling between adding and removing the 'bordered' class
// Uncomment the line below to toggle the 'bordered' class
// img.classList.toggle('bordered');
