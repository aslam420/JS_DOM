/* Event Delegation :
 - Agar humne koi new button ya element apne page k upar add kiya h aur usi similar type ki elements k liye
   humne already event listeners ko create kiya hua h apne page k upar to same event listeners iss element
   par apply nhi hoga
 - Lekin hum chahte ki humare new elements k liye v puraane elements k event listeners apply kre to uske liye
   hum use krte h event delegation.
 - Event Delegation ek type of phenomenon/chij/tarika hota h jisme hum apni bubbling wali property ko use krnge.
 - So, basically agar hum chahte humare child element k liye koi chij trigger ho jae to uske liye wo same 
   trigger hum apne parent k liye likh lete h. Means uss event listener ko instead of the child element hum
   parent element m add kr denge. To agar child element k upar wo trigger aaega to automatically parent element
   listener ka event listener trigger ho jaega.
 - Basically, Bubbling k phenomenon ko use kr k hum Event Delegation krwate h.

 Event Delegation:
   - Event delegation is a technique where a single event listener is placed on a parent element to
     manage and respond to events that occur on its child elements.
   - This is particularly useful when dealing with dynamically added elements or a large number of similar
     elements, as it reduces the need to attach individual event listeners to each child element.

   Code Explanation:
   - The code selects a button, a ul element, and an input element.
   - An event listener is added to the button for the 'click' event.
   - When the button is clicked, a new li element is created with text content from the input field.
   - A delete button (delBtn) is created for each li element and appended to it.
   - The li element is then appended to the ul element, and the input field is cleared.

   Event Delegation:
   - An event listener is added to the ul element for the 'click' event.
   - When a click event occurs on any child element of ul, the event.target property is used to determine
     which element triggered the event.
   - If the triggered element is a button, its parent li element is identified, removed from the DOM, and logged to the console.

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

// Step 6: Adding event listener to the ul element (Event Delegation)
ul.addEventListener("click", function(event) {
  // Step 7: Checking if the clicked element is a button
  if (event.target.nodeName == "BUTTON") {
    // Step 8: Identifying and removing the parent li element
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log(listItem);
    console.log("deleted");
  } 
});