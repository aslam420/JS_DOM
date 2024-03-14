/* 
  Removing Elements from Page :
  1. removeChild(element) - removes a child element
  2. remove() - removes the element itself
*/ 

// Creating a new paragraph element
let newParagraph = document.createElement('p');
newParagraph.innerText = "This is a new paragraph.";

// Appending the new paragraph as a child
let bodyParagraph = document.querySelector('body');
bodyParagraph.appendChild(newParagraph);

// Creating a button example
let btn = document.createElement('button');
btn.innerText = "Click me!";
bodyParagraph.appendChild(btn);

// Appending the new paragraph using the append method (element+string+text)
newParagraph.append("This is new text!");
newParagraph.append(btn); // The button is added to the paragraph (same line)
newParagraph.append(" Do not click this button.");

// Removing the button element using removeChild and remove
// bodyParagraph.removeChild(btn);
// btn.remove();

/*
   Additional Explanation for Removing Elements:
   - removeChild(element) removes a specified child element from its parent.
   - remove() removes the element itself from the DOM.
*/
