/*
Explanation of Style Manipulation in JavaScript:
   1. style Property: Allows access to all inline styling properties (CSS within the HTML element)
   2. obj.style: Directly accesses and manipulates the style of an HTML element
Note: obj.style provides access to inline styles; it does not directly access styles defined in an external stylesheet.
*/

// Selecting an image element
let img = document.querySelector('img');
// Explanation: Displaying image properties using console.dir
console.dir(img); 
// Explanation: Displaying image style properties using console.log
console.log(img.style);


// Selecting a heading element
let heading = document.querySelector('h1');
// Explanation: Displaying heading style properties using console.log
console.log(heading.style);
// Explanation: Manipulating heading style - text color
heading.style.color = 'white';
// Explanation: Manipulating heading style - background color
heading.style.backgroundColor = 'black';


// Selecting and manipulating styling of anchor tags inside elements with class 'box'
let links = document.querySelectorAll(".box a");
// Explanation: Looping through links to set text color to green using traditional for loop
for(let i = 0; i < links.length; i++) {
   links[i].style.color = "green";
}
// Explanation: Looping through links to set text color to purple using for...of loop
for(link of links) {
   link.style.color = "purple";
}
