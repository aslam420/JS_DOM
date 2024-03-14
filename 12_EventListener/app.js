/* 
 Event Handler : Way-3 to trigger DOM events (most recommended)
 1. addEventListener - element.addEventListener(event, callback)
 
 Example : For single element we can set multiple events
 btn.addEventListener("click", function() {
  console.log("button clicked!");
 }*/ 


// Step 1: Select multiple buttons
let btns = document.querySelectorAll("button");

// Step 2: Attach the click event handler function to each button
for (let btn of btns) {
  // btn.onclick = greetUser;
  // btn.onclick = sayName

  // multiple functions cannot execute so we use addEventListener
  // btn.addEventListener("click", greetUser);
  // btn.addEventListener("click", sayName);
  btn.addEventListener("dblclick", function() {
    console.log("You double clicked");
  });
}

// Event handler functions
function greetUser() {
  alert("Hello! You clicked a button.");
}

function sayName() {
  alert("Apna College");
}
