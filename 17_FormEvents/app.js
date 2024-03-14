/* 
   Form Events:
   - Form events are triggered when interacting with HTML forms, such as submitting a form.
   - One common form event is 'submit', which is triggered when a form is submitted.
   - By default, when a form is submitted, the browser navigates to a new page or performs some default action.
   - However, we can use the 'event.preventDefault()' method to prevent the default action from taking place, allowing us to handle the submission ourselves.

   Code Explanation:
   - The code selects a form element using the querySelector method.
   - An event listener is added to the form for the 'submit' event.
   - Inside the event listener function, 'event.preventDefault()' is called to prevent the default form submission behavior.
   - Instead, an alert is displayed, indicating that the form was submitted.

   Note: 
   - Preventing the default action is useful when we want to handle the form submission using custom JavaScript code, such as performing form validation or sending data asynchronously without a page reload.
*/ 

let form = document.querySelector('form');

// Form submitted but then we move to the next page by default
// form.addEventListener('submit', function() {
//   alert("form submitted");
// });

/* Jb v hum chahte h ki jo v default chij h usko hum prevent krna chahte h to hm likh skte h apne event listener k 
andr event.preventDefault. Means event se jo v default action perform ho rha hoga usko hum prevent/rok lete h 
and only callback actions will perform*/

form.addEventListener('submit', function(event) {
  event.preventDefault(); // It will stop the default action
  alert("form submitted");
});
