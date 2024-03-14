/*
   Step-1: Select Element
   Step-2: Manipulate/Change Value
*/

// The `document` object is a crucial part of the Document Object Model (DOM) in HTML.
// It represents the entire HTML document as a hierarchical tree-like structure.

// Printing the document object
console.dir(document); // This prints the properties and methods of the HTML document object
console.log(document.all[12].innerHTML); // Print and potentially change inner HTML code

//-------------------------------------------------------------------------------------------------------------
/*
   1. Selecting Element by ID:
   - getElementById(id_name) returns the element as an object or null (if not found).
   - We can select HTML elements based on their 'id'.
*/

let xylm = document.getElementById("mainImg");

// Changing Image Object Source (selecting an image and changing its source)
xylm.src = "assets/mikita-yo-GwUZv6iFA0o-unsplash.jpg";

//-------------------------------------------------------------------------------------------------------------
/* 
   2. Selecting Elements By Class Name:
   - getElementsByClassName returns elements as an HTML Collection or empty collection (if not found).
   - We can loop through the collection to print or manipulate elements.
*/

let smallImages = document.getElementsByClassName("oldImg");

// Printing the source of each image
for (let i = 0; i < smallImages.length; i++) {
    console.dir(smallImages[i].src);
}

// Changing the source of all images in the collection
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/format-arw-PXjQaGxi4JA-unsplash.jpg";
    console.log(`Value of image no. ${i} is changed.`);
}
// All three images will be changed to the Spider-Man image.

//-------------------------------------------------------------------------------------------------------------
/*
   3. Selecting Elements By Tag Name:
   - getElementsByTagName returns elements as an HTML Collection or empty collection (if not found).
   - We can select elements by tag name and manipulate them.
*/

// Selecting all paragraph elements in the document
let paragraphElements = document.getElementsByTagName("p");

// Printing the collection of paragraph elements
console.dir(paragraphElements);

// Selecting an individual paragraph element by index (e.g., the second paragraph)
let secondParagraph = paragraphElements[1];

// Manipulating the content of the second paragraph using innerText
secondParagraph.innerText = "I've changed this description using getElementByTagName";

// Additional Example:
// Looping through all paragraph elements and printing their inner text
for (let i = 0; i < paragraphElements.length; i++) {
    console.log(`Paragraph ${i + 1}: ${paragraphElements[i].innerText}`);
}

//-------------------------------------------------------------------------------------------------------------
/*
   4. Query Selector:
   - querySelector selects the first matching element.
   - querySelectorAll selects all matching elements.
*/

// Selecting the first h1 element
console.dir(document.querySelector('h1'));
// Selecting the first element with id = description
console.dir(document.querySelector('#description'));
// Selecting the first element with class = oldImg
console.dir(document.querySelector(".oldImg"));
// Selecting the first anchor tag inside div tag, i.e., boxLink
console.dir(document.querySelector("div a"));
// Selecting all p elements
// document.querySelectorAll("p");
// console.dir(document.querySelectorAll("div a"));

