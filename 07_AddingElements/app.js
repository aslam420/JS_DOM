/* Adding Elements :
   document.createElement('p');

   1) appendChild(element); - Kisi v object k andr agar nesting form m agr uske andr insert krna h new element to appendChild use krnge
   2) append(element);
   3) prepend(element);
   4) insertAdjacent(where, element);
*/

// Creating a new paragraph element
let newParagraph = document.createElement('p');
console.dir(newParagraph);
newParagraph.innerText = "This is a new paragraph.";
console.dir(newParagraph);

// To display the created element, we have to use some functions -

// (1) Appending the new paragraph as a child (Appending means adding to the end)
let bodyParagraph = document.querySelector('body'); // Specify the parent element where you want to append the child
bodyParagraph.appendChild(newParagraph); // Append the new paragraph as the last child of the specified parent

let boxParagraph = document.querySelector('.box'); 
boxParagraph.appendChild(newParagraph);
// Note : newParagraph shifted from bodyParagraph to boxParagraph (cannot use at multiple places)

// Creating button example
let btn = document.createElement('button');
console.dir('btn');
btn.innerText = "click me!";
boxParagraph.appendChild(btn);

// (2) Appending the new paragraph using the append method (element+string+text)
// AppendChild se uss element k child m append kr skte h
// Append se usi element m append kr skte h
newParagraph.append("This is new text!");
newParagraph.append(btn); // Paragrapgh m hi button aa gya means same line m
newParagraph.append(" do not click this button");

// (3) Prepending the new paragraph as the first child (Prepend means adding to the beginning)
boxParagraph.prepend(newParagraph);

// (4) Inserting the new paragraph at any position (where we want to add, which element we want to add)
// (a) 'beforebegin' : Before the targetElement itself
// (b) 'afterbegin' : Just inside the targetElement, before its first child
// (c) 'beforeend' : Just inside the targetElement, after its last child
// (d) 'afterend' : After the targetElement itself
let p = document.querySelector('p');
btn.innerHTML = "New Button!!!";
p.insertAdjacentElement('beforebegin', btn);
p.insertAdjacentElement('beforeend', btn);
p.insertAdjacentElement('afterbegin', btn);
p.insertAdjacentElement('afterend', btn);

/*
   Additional Explanation for Adding Elements:
   - document.createElement('p') creates a new paragraph element.
   - appendChild(element) appends the specified element as the last child of a parent element.
   - append(element) appends the specified element(s) to the end of a parent element.
   - prepend(element) inserts the specified element(s) at the beginning of a parent element's children.
   - insertAdjacentElement(where, element) inserts the specified element in relation to the current element.
*/
