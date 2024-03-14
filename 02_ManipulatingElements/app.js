/* Manipulating HTML Elements/Objects using document Properties & Methods 
1. innerText : Shows the visible text contained in a node
2. textContent : Show all the full text
3. innerHTML : Show the full markup*/ 

// Select first paragraph
let para = document.querySelector('p');

// Print all properties of para, and using those properties we can manipulate our para 
console.dir(para);

// Displaying the visible text contained in the paragraph using innerText
console.log("innerText:", para.innerText);

// Displaying the full markup of the paragraph, including HTML tags, using innerHTML
console.log("innerHTML:", para.innerHTML);

// Displaying all the full text of the paragraph, including hidden text and spaces, using textContent
console.log("textContent:", para.textContent);  // Displays hidden "marvel comics"


// ------------------ Manipulation of HTML Elements/Objects using document Properties & Methods ------------------

// Manipulating the text of the paragraph but doesn't recognize tags (no HTML rendering)
para.innerText = "abc";
console.dir(para);
para.innerText = "Hi, I'm Peter Parker!";

// Explanation:
// - Setting `innerText` replaces the text content of the paragraph with the specified string.
// - In the above example, it first sets the text to "abc" and then changes it to "Hi, I'm Peter Parker!".

// Manipulating the text of the paragraph and recognizing HTML tags
para.innerHTML = "Hi, I'm <b>Peter Parker!</b>";

// Explanation:
// - Setting `innerHTML` allows the inclusion of HTML tags within the specified string.
// - In this case, it sets the content to "Hi, I'm <b>Peter Parker!</b>", making "Peter Parker" bold.

// Selecting and underlining the heading
let heading = document.querySelector('h1');
heading.innerHTML = "<u>Spider Man</u>";

// Explanation:
// - Selecting the h1 heading element using `document.querySelector`.
// - Setting the `innerHTML` of the heading to include the <u> tags, which underline the text.

// Selecting and underlining the heading using a template string
let headingWithTemplate = document.querySelector('h1');
headingWithTemplate.innerHTML = `<u>${headingWithTemplate.innerText}</u>`;

// Explanation:
// - Using a template string to dynamically include the existing text content of the heading within <u> tags.
// - This line underlines the current text of the heading element.

// Function to dynamically underline the heading with a specified text
function underlineHeading(text) {
    // Selecting the heading element
    let heading = document.querySelector('h1');

    // Printing the original content of the heading
    console.log("Original Heading Text:", heading.innerText);

    // Adding additional styling using innerHTML and the passed text
    heading.innerHTML = `<u>${text}</u>`;

    // Printing the updated content of the heading
    console.log("Updated Heading Text:", heading.innerText);
}

// Calling the function with the desired text
underlineHeading("Peter Parker");