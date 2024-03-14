/*
 Navigation : Navigation methods help move from one element to another in the HTML document.
   
 Simplified Explanation of Element Navigation in JavaScript:
   1. parentElement
   2. children
   3. previousElementSibling/nextElementSibling
   4. childElementCount
*/

// Selecting an element
let h4 = document.querySelector('h4');
let boxElement = document.querySelector('.box');
let ulElement = document.querySelector('ul');

// (1) Simplified Explanation: Accessing the parent element of the selected element
let parentElement = h4.parentElement;
console.log("Parent Element:", parentElement); // Parent is single

let parentBoxElement = boxElement.parentElement;
console.log("Parent Box Element:", parentBoxElement); // Parent is single

let parentUlElement = ulElement.parentElement;
console.log("Parent Unordered List Element:", parentUlElement); // Parent is single

// (2) Simplified Explanation: Accessing the children elements of the selected element
let childrenElements = h4.children; // h4 has 0 children elements
console.log("Children Elements:", childrenElements);  // Children can be multiple

let childrenBoxElements = boxElement.children; // box has 2 children elements
console.log("Children Box Elements:", childrenBoxElements);  // Children can be multiple

let childrenUlElements = ulElement.children; // Ul has 3 children elements
console.log("Children Unordered List Elements:", childrenUlElements);  // Children can be multiple

// (3) Simplified Explanation: Accessing the count of child elements within the selected element
let childElementCount = h4.childElementCount;
console.log("Number of Child Elements:", childElementCount);  // Number of Child Box Elements: 0

let childBoxElementCount = boxElement.childElementCount;
console.log("Number of Child Box Elements:", childBoxElementCount); // Number of Child Box Elements: 2

let childUlElementCount = ulElement.childElementCount;
console.log("Number of Child Unordered List Elements:", childUlElementCount); // Number of Child Box Elements: 3

// (4) Simplified Explanation: Accessing the previous and next sibling elements of the selected element
let previousSibling = h4.previousElementSibling;
let nextSibling = h4.nextElementSibling;

let previousBoxSibling = boxElement.previousElementSibling;
let nextBoxSibling = boxElement.nextElementSibling;

let previousUlSibling = ulElement.previousElementSibling;
let nextUlSibling = ulElement.nextElementSibling;

console.log("Previous Sibling:", previousSibling);
console.log("Next Sibling:", nextSibling);

console.log("Previous Box Sibling:", previousBoxSibling);
console.log("Next Box Sibling:", nextBoxSibling);

console.log("Previous UL Sibling:", previousUlSibling);
console.log("Next UL Sibling:", nextUlSibling);

/*
   Additional Simplified Explanation for Element Navigation:
   - Navigation methods help move from one element to another in the HTML document.
   - parentElement: Accesses the parent element of the selected element.
   - children: Accesses the child elements of the selected element.
   - previousElementSibling/nextElementSibling: Accesses the previous and next sibling elements of the selected element.
   - childElementCount: Provides the count of child elements within the selected element.
*/

let img = document.querySelector('img');

let previousImgSibling = img.previousElementSibling;
console.log(previousImgSibling.style);
console.log(previousImgSibling.style.color = "green");