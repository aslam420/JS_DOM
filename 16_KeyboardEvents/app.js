/* 
   Keyboard Events: events/e
   - Keyboard events have a default argument represented as 'event' or 'e'.
   
   console.log(event); 
   - If we press 'b', it will display - code: "KeyB", key: "b" inside the KeyboardEvent property.
   
   - When we have the event argument for a keyboard event, we have two special properties:
     (1) code
     (2) key
   - The 'key' property indicates which key is visible on the screen. For example, pressing 'a' will result in 'a', and pressing the spacebar will result in " ".
   - The 'code' property returns the code of that particular key. For example, pressing the spacebar will return the string "Space".
   - This concept is used in games for character movement.
*/ 

// Keyboard Events
let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//   console.log(event); // If we press 'b', it will display - code: "KeyB", key: "b" inside the KeyboardEvent property
//   console.log("key was pressed"); // We can count how many keys/buttons from the keyboard we have pressed
//   console.log("Key: " + event.key); 
//   console.log("Code: " + event.code);
// });

// inp.addEventListener("keyup", function() {
//   console.log("key was released"); // We can count how many keys/buttons from the keyboard we have released
// });

// Game Control Panel
inp.addEventListener("keydown", function(event) {
  console.log("code = " + event.code);  // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
  if (event.code == "ArrowUp") {
    console.log("character moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("character moves backward");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("character moves right");
  }
});
