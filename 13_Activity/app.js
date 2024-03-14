/* 
   Dynamic Color Change:
   - This code changes the background color of a div element and updates the text content of an h3 element
     with a randomly generated color when a button is clicked.

   Code Explanation:
   - A button element is selected using the querySelector method.
   - An event listener is added to the button for the 'click' event.
   - When the button is clicked, a new color is generated using the getRandomColor function.
   - The h3 element is selected, and its text content is updated with the random color.
   - The div element is selected, and its background color is set to the random color.
   - A message is logged to the console indicating that the color has been updated.

   Note: 
   - The getRandomColor function generates a random RGB color value.
*/ 

// Step 1: Selecting the button element
let btn = document.querySelector('button');

// Step 2: Adding event listener to the button for the 'click' event
btn.addEventListener("click", function() {
  // Step 3: Selecting the h3 element
  let h3 = document.querySelector("h3");
  
  // Step 4: Generating a random color
  let randomColor = getRandomColor();
  
  // Step 5: Updating the h3 text content with the random color
  h3.innerText = randomColor;

  // Step 6: Selecting the div element
  let div = document.querySelector("div");
  
  // Step 7: Setting the background color of the div to the random color
  div.style.backgroundColor = randomColor;
  
  // Step 8: Logging a message to the console
  console.log("Color updated");
});

// Step 9: Function to generate a random RGB color
function getRandomColor() {
  // Step 10: Generating random values for red, green, and blue components
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  // Step 11: Constructing the RGB color string
  let color = `rgb(${red}, ${green}, ${blue})`;
  
  // Step 12: Returning the random color
  return color;
}
