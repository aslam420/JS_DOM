/* 
   Input Event Example:
   - This code demonstrates the use of the input event on an input element.

   Code Explanation:
   - An input element with the ID "text" and a paragraph element are selected.
   - An event listener is added to the input element for the 'input' event.
   - When the user enters or modifies text in the input field, the input event is triggered.
   - The event listener logs the current value of the input to the console and updates the text content of the paragraph with the input value.

   Note: 
   - The input event is suitable for tracking changes in real-time as the user types or modifies the input.
*/ 

let inp = document.querySelector('#text');
let p = document.querySelector('p');

inp.addEventListener("input", function() {
  console.log(inp.value);
  p.innerText = inp.value;
});
