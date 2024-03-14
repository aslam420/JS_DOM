/* 
1) What is DOM?
 - DOM stands for Document Object Model
 - It consists of a tree-like structure that encapsulates the content
   of a document on the web.
 - Assume DOM as a blueprint for the web pages that other programs.

2) Importance of DOM :
 - Web Page or a Web Application once deployed or hosted, allows less or
   nor scope to the users to manipulate or change the content of the 
   website/web page.
 - Using DOM, we can modify the content of the web page/web application 
   even after it is deployed.
 - The DOM goes hand in hand with JavaScript, the language can be used to
   manipulate the DOM and without DOM JavaScript would lose its object
   notation and web manipulation properties for web pages.

3) DOM Manipulation :
 - In this session we are going to learn different ways of manipulating
   the DOM and with it to manipulate and change the web dynamically.
 - But before we proceed let just learn about the basic concept of DOM.

Q) What is "document" Object?
 - console.dir(document);
 - The 'document' keyword represents the DOM properties available to us
   via the browser.
 - Use console.dir(document) or console.log(document) and see the log

4) Grabbing the elements :

(a) Fetching all the DOM properties :
 - console.log(document.all);
 - This prints the contents of the head tag of the HTML document.

(b) Fetching the contents of body tag :
 - console.log(document.body);
 - Fetching the contents inside the body tag

(c) Fetching the contents of head tag :
 - console.log(document.head);
 - This prints the contents of the head tag of the HTML document.

5) Fetching elements by ID :
 - The getElementById DOM method returns an element based on its ID that
   it receives as a parameter.
 - var headerTitle = document.getElementById('header-title');
   This return the HTML element whose ID is header-title and the node
   representing the element will be stored in the headerTitle.
 - Changing the Text and HTML
   (a) content: headerTitle.innerHTML = "<h3>Hello</h3>"
   (b) The innerHTML attribute allows us to modify the content of the HTML element.

6) Fetching elements by Class Name :
 - The getElementsByClassName DOM method returns an array of HTML elements
   based on the class name it receives as a parameter.
 - This will fetch an array of elements containing the class name list-group-item
   and store it in items variable.

7) Fetching elements by Tag Name :
 - getElementsByTagName DOM method returns an array of HTML elements
   matching the HTML tag. it returns as a parameter.

8) Query Selectors :
 - The querySelector() method returns the first element that matches a
   specified CSS selector(s) in the document.
 - The querySelectorAll() method all elements in the document that matches
   a specified CSS selector(s), as a static NodeList object. 

9) Traversing the DOM :
 - A JavaScript developer should know how to traverse the DOM
 - It's teh way of selecting an element from another element

10. Parent Node Property :
 - The parentNode property returns the parent node of the specified node,
   as a Node object.
 - It's the way of selecting an element from another element.
 - Example :
   var itemList = document.querySelector('#items');
   console.log(itemList.parentNode);
   itemList.innerHTML = "traversing";
 - In the above example we are getting the element with the ID as items 
   storing it in the itemList variable.

11. Parent Element Property :
 - The parentElement property return the parent node of the specified node,
   as a Node object.
 - The parentNode property returns the parent element of the specified element.
 - Example :
   console.log(itemList.parentElement);
   This prints the parent element of the HTML element whose ID is items.
 - itemList.parentElement.style.backgroundColor = "#f4f4f4";
   This will modify the background color of the parent using -
   syule.backgroundColor property.

12. Child Node Property :
 - The childNode property returns the child node of the specified node, as
   a Node object.
 - Example -
   console.log(itemList.childNodes)
   This prints the child nodes of itemList

13. Children Element Property :
 - The childrenElement property returns the children element of the 
   specified element.
 - Example :
   console.log(itemList.children);
   This print the child elements of itemList.

14. First & Last Child :
 - The firstChild & lastChild properties return the first and last node
   of respective HTML elements.
 - Example :
   console.log(itemList.lastChild);
   console.log(itemList.firstChild);
   This prints first node and last node.
*/ 