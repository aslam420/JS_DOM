/* 
 DOM Events : Way-2 to trigger DOM events (big code for single event -  ek baar m ek value set kr skte h)
  1. onClick (Triggered when an element is clicked)  
  2. onmouseenter (Triggered when the mouse enters an element)
 Note: Event properties start with "on"
*/ 

// Example for onClick event:

// Step 1: Select a single button
// let btn = document.querySelector("button");
// console.dir(btn);

// Step 2: Attach a click event to the button
// btn.onclick = function() {
//   alert("Button was clicked!");
// }


// Example of attaching the 'onClick + onmouseenter' event handler function to multiple buttons -
// Step 1: Select multiple buttons
let btns = document.querySelectorAll("button");

// Step 2: Attach the click event handler function to each button + onMouseEnter Event handler Function
for (btn of btns) {
  btn.onclick = greetUser;
  btn.onmouseenter = function () {
    console.log("You entered a button!");
  }
}

// Event handler function
function greetUser() {
  alert("Hello! You clicked a button.");
}

