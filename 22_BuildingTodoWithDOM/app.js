/* 
   Event Delegation with Dynamic Elements:
   - This code demonstrates event delegation with dynamic elements, where a new list item with a delete button
     is added to an unordered list when a button is clicked, and the delete button's click event is handled.

   Code Explanation:
   - A button, an unordered list, and an input element are selected using the querySelector method.
   - An event listener is added to the button for the 'click' event.
   - When the button is clicked, a new li element is created with text content from the input field.
   - A delete button (delBtn) is created for each li element and appended to it.
   - The li element is then appended to the ul element, and the input field is cleared.

   Event Delegation:
   - An event listener is added to the ul element for the 'click' event (Event Delegation).
   - When a click event occurs on any child element of ul, the event.target property is used to determine
     which element triggered the event.
   - If the triggered element has a "delete" class, its parent li element is identified, removed from the DOM,
     and a message is logged to the console.

   Note: 
   - Event delegation simplifies the management of event listeners, especially when working with dynamic content
     or a large number of similar elements.
*/ 

// Step 1: Selecting elements
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

// Step 2: Adding event listener to the button
btn.addEventListener("click", function() {
  // Step 3: Creating a new li element and setting its text content
  let item = document.createElement("li");
  item.innerText = inp.value;

  // Step 4: Creating a delete button and appending it to the li element
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);

  // Step 5: Appending the li element to the ul element and clearing the input field
  ul.appendChild(item);
  inp.value = "";
});

// Step 6: Selecting all elements with the "delete" class
let delBtns = document.querySelectorAll(".delete");

// Step 7: Adding event listener to each delete button
for (delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    // Step 8: Logging a message to the console when a delete button is clicked
    console.log("Element deleted");
  });
}
