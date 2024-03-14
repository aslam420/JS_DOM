/* 
   Extracting Form Data:
   - This code demonstrates how to extract data when a form is submitted.

   Code Explanation:
   - The code selects a form element using the querySelector method.
   - An event listener is added to the form for the 'submit' event.
   - Inside the event listener function, 'event.preventDefault()' is called to prevent the default form submission behavior.

   First Approach:
   - The form values are extracted using individual querySelector calls for each form field (user and pass).
   - The values are then displayed in the console and an alert.

   Second Approach:
   - An alternative method is used to access form elements through the 'this.elements' property.
   - The form elements are accessed using their index positions in the 'elements' collection (0 for user and 1 for pass).
   - The values are displayed in the console and an alert.

   Note: 
   - Extracting form data is essential for processing user input, performing validation, and submitting data to a server.
*/ 

let form = document.querySelector('form');

// Event Listener used to track form value
form.addEventListener('submit', function(event) {
  event.preventDefault(); // It will stop the default action

  // First way to display form value
  // let user = document.querySelector('#user');
  // let pass = document.querySelector('#pass');

  // // Value store any type of input & using this we can display value
  // console.log(user.value);
  // console.log(pass.value);

  // alert(`Hi ${user.value}, your password is set to ${pass.value}`);

  // Second way to display form object
  console.dir(form);  
  let user = this.elements[0];  // form.elements[0] == this.elements[0]
  let pass = this.elements[1];  // form.elements[1] == this.elements[1]

  console.log(user.value);
  console.log(user.pass);
  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
