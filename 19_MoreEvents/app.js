/* More Events :
1. change event
 - The change event occurs when the value of an element has been changed (only works on <input>, <textarea>
   and <select> elements)
 - Jb v kisi element m change aae to uss element ko track krne k liye change event ka use hota h.
 - 'change' initial and final value ko track krta h (means state change hone pe)
   
2. input event
 - The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
 - 'input' ek ek value jo fill krte h usko track krta h (means state change hone pe)
 - Non-Character buttons doesn't trigger input event (only character keys triggers input event).
 
 Code Explanation:
   - The code selects a form element using the querySelector method.
   - An event listener is added to the form for the 'submit' event, preventing the default form submission behavior.
   - An input element with the ID "user" is selected.
   - Two event listeners are added to the "user" input element, one for the 'change' event and one for the 'input' event.
   - The event listeners log messages to the console, indicating the type of event and displaying the final value of the input.

   Note: 
   - 'change' event is suitable for tracking changes after the user has completed an action (e.g., selecting an option).
   - 'input' event is suitable for tracking changes in real-time as the user types or modifies the input.
   - Non-character buttons (e.g., Shift, Ctrl) do not trigger the input event.
*/ 

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
});

let user = document.querySelector("#user");

// 'change' event tracks initial and final value (means when the state changes)
user.addEventListener("change", function() {
  console.log("change event");
  console.log("final value = " + this.value);
});

// 'input' event tracks each value entered (means when the state changes)
user.addEventListener("input", function() {
  console.log("input event");
  console.log("final value = " + this.value);
});