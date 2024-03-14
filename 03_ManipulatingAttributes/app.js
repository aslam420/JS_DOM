/*
   Explanation of Attribute Manipulation in JavaScript:

   Attribute Concept:
   - HTML elements have attributes, acting like additional properties that offer more information about the element.
   - Common attributes include 'id', 'class', 'tag name', and styling attributes like 'src' for images.

   Manipulating Attributes (Getters and Setters):
   1. obj.getAttribute(attr): Retrieves the current value of a specific attribute for an object
   2. obj.setAttribute(attr, val): Allows us to dynamically change or set the value of any attribute for an object
*/

// Selecting an image element
let img = document.querySelector('img');

// Explanation: Manipulating the 'id' attribute
let currentIdValue = img.getAttribute('id');  // Retrieves the current 'id' attribute value ('mainImg')
// Uncomment the line below to change the 'id' attribute to 'spidermanImg'
// img.setAttribute('id', 'spidermanImg');

// Explanation: Manipulating the 'src' attribute (changing the image source)
img.setAttribute('src', "assets/mateus-pereira-7Cx-Li4xYnQ-unsplash.jpg");

// Explanation: Manipulating the 'class' attribute
let currentClassValue = img.getAttribute('class');  // Retrieves the current 'class' attribute value
// Uncomment the line below to set the 'class' attribute to 'images'
// img.setAttribute('class', 'images');
