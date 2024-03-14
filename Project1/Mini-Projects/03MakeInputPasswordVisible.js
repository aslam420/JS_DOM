/* document is an object which contains all information about webpage and
   provide the functionality to -
   (a) Read
   (b) Create
   (c) Delete
   (d) Update
   
-> If we open Facebook.com, in password we can always see star. But we want to
   write the script which change the star to text.
   
Q) Why star appear when we write the password?
-> Because this is input and this input is of type password. If we change this
   password to text everything will become visible to us.
-> Similarly, we have to go to facebook.com, write a script to change the input
   type of password to text.
   
Steps :
1) Try to get input field
2) Change type -> text

Step-1 : Try to get the input field
<input id="pass" class="inputtext _55r1 _6luy _9npi
type="password" name="pass" data-testid="royal_pass"
placeholder="Password" aria-label="Password">

-> First we have to get the id of the element and in this element we will 
   pass the id -
   
   document.getElementById("pass");

   -> Once we pass the id, we will get the container that we want.

Step-2 : Change type -> text
-> Now change the type from password to text -
document.getElementById("pass").type = "text";
*/ 