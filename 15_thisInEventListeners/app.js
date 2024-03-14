/*
 Explanation of 'this' in Event Listener: 'this' wo hota h jisne event listener ko call karwaya h
   - The keyword 'this' refers to the object that invoked the event listener.
   - When creating an event listener for an object (like a button, paragraph, h1, etc.), 'this' inside the event 
     callback refers to that specific object.

    (Means jb hm kisi object/element k liye koi event listener (handler) create krte h) to uss event handler k
    paas 2 variables hote h. Ek hota h ki humne kn se event k liye usse create kiya h aur dusra hota h callback.
    To hum chahe to iss callback k andr apne this ko use kr skte h aur callback k andr iss this ka matlab hoga
    wo specific object/element jiske liye humara event listener/handler create hua h.)
    obj -> event listener/handler (event, callback[this])

Note : 'this' ka fayda event listener m tb hota h jb hum multiple types k object upar ek single event listener ko 
        use krna chahte h

   Code Explanation:
   - Four elements are selected: a button ('btn'), a paragraph ('p'), an h1 heading ('h1'), and an h3 heading ('h3').
   - The function 'changeColor' is defined to be used as the callback for click events on these elements.

   Approach 1 (Not Recommended):
   - Each element has a separate click event listener with its own callback function.
   - Inside each callback, 'this' refers to the element that triggered the click event.
   - The background color of the clicked element is changed to aqua.

   Approach 2 (Recommended):
   - The 'changeColor' function is defined once.
   - The same 'changeColor' function is then attached as the callback to the click events of all four elements.
   - This approach reduces redundancy and makes the code more maintainable.

   Important Note:
   - 'this' is particularly useful when you want to use the same event handler for multiple types of elements.
*/ 

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// Approach - 1 : Not Recommended
// btn.addEventListener("click", function() {
//   // console.log(this);  // this <--> btn : <button>Click Me!</button>
//   // console.dir(btn.innerText); // click me
//   console.dir(this.innerText);// click me
//   this.style.backgroundColor = "aqua";
// });

// p.addEventListener("click", function() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "aqua";
// });

// h1.addEventListener("click", function() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "aqua";
// });

// h3.addEventListener("click", function() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "aqua";
// });


// Approach - 2 : Recommended (Removed redundancy/repeatations)

function changeColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "aqua";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
