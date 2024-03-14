/*
  Step 1: Selecting a paragraph element and assigning it to the variable 'p':
  - The querySelector method is used to select the first <p> (paragraph) element in the document.
  - The selected element is stored in the variable 'p'.
*/
let p = document.querySelector("p");

/*
  Step 2: Adding a click event listener to the paragraph element:
  - The addEventListener method is used to attach a click event listener to the selected paragraph element ('p').
  - When the paragraph is clicked, the specified function is executed, logging the message "Paragraph was clicked" to the console.
*/
p.addEventListener("click", function () {
  console.log("Paragraph was clicked");
});

/*
  Step 3: Selecting an element with the class "box" and assigning it to the variable 'box':
  - The querySelector method is used to select the first element with the class "box" in the document.
  - The selected element is stored in the variable 'box'.
*/
let box = document.querySelector(".box");

/*
  Step 4: Adding a mouseenter event listener to the box element:
  - The addEventListener method is used to attach a mouseenter event listener to the selected box element ('box').
  - When the mouse enters the box, the specified function is executed, logging the message "Mouse inside box" to the console.
*/
box.addEventListener("mouseenter", function () {
  console.log("Mouse inside box");
});
