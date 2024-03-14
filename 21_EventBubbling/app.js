/* Event Bubbling 
 - Jb v humare HTML m hm bahut saare different different nested element k liye event listeners create krte h to
   event bubbling hoti h. Means Humne HTML k andr kaafi saare nested elements create kiye h : outer element m
   <div> h uske andr <ul> tag h uske andr kaafi saare <li> tags h aur unme kuch stylings kiya h humne.
 - Jaise hi hum ek nested element k andr wale event listeners ko click krte h to wo uske parent aur upar wale 
   levels ko v trigger krta h. Means if we click <li> tag then it will also trigger <ul> tag and <div> tag. and 
   this phenomenon is known as Event Bubbling.
 - Iss phenomenan ko rokne k liye humare paas ek method hota h 'stopPropagation'
   */ 

 let div = document.querySelector('div');
 let ul = document.querySelector('ul');
 let lis = document.querySelectorAll('li');
 
 div.addEventListener("click", function() {
   console.log("div was clicked");
 });
 
 ul.addEventListener("click", function(event) {
   event.stopPropagation();
   console.log("ul was clicked");
 });
 
 for (let li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li was clicked");
  });
 }
 
  