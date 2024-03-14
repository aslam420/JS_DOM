// Task-5 : remove the google logo from www.google.com and add your name

// We have to use querySelector -
// If we want to do styling in CSS we do ".className" and if we want to apply
// something on id we write "#id".So, these are query.
// We can write the same query and get the element out using querySelector

// Remove Google Logo
let imageElement = document.querySelector(".k1zIA, .r5k4se").children[0]
document.querySelector(".k1zIA, .r5k4se").removeChild(imageElement);

// Create H1 Tag
let h1Element = document.createElement("h1");
h1Element.innerText = "Mohammad";

// Add H1 tag in same Div as Google Logo
document.querySelector(".k1zIA, .r5k4se").appendChild(h1Element);

// Created one <h1> tag   (C)
// Read the <div>         (R)
// We updated the <div>   (U) 
// Delete the Google Logo (D)