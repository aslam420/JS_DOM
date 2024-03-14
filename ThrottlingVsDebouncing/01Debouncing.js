/* Debouncing :
 - Majorly when we are facing Customer Web App, we need to be very performant.
   Our website doesn't freeze anytime while user is doing anything on the browser.
   
 - In flipart Interview, the interviewer asked to develop a "Search Bar" same as
   on the flipkart website. So, it autosuggests us a lot of thing according to 
   the search query what we type in. So, if we type "laptop" it makes an API call
   and gets the search results and fields to this list :
   1. laptop in laptops
   2. laptop bags
   3. laptops under 10000
   4. laptops under 31000
   5. laptop skin
   6. laptop speakers
 - And if we typing more, suppose "laptop lenovo", then again more API calls are
   made and the results are fetched from the network:
   1. lenovo laptop bags in laptop Bags
   2. lenovo laptop charger in Laptop Adapters
   3. lenovo laptop battery
   4. lenovo gaming laptop
   5. lenovo thinkpad laptop
   6. lenovo mini laptop
 - But the important thing to notice is it doesn't make api calls for each and
   every keystroke event. Suppose I want to search for "schoolbags" so it just 
   made 2 api calls in the Network :
   -> Inspect -> Network
                       -> Name :
                       1. autoSuggest
                       2. autoSuggest
                       
1. autoSuggest : The first one when we type "school"
   +------+--------------------------------------+
   |Header| Preview | Response | Cookies | Timing|
   +------+--------------------------------------+
    > General
    > Response Header (17)
    > Request Header (14)
    > Required Payload :
        V { query: "school", contextUri: "/", marketPlace: "FLIPKART", ... }
             contentUrl: "/"
             marketPlaceId : "FLIPKART"
             query: "school"
             rows: 10
             searchBrowseHistory: []
           > types: ["QUERY", "QUERY_STORE", "PRODUCT", "PARTITION"]
           userTimeStamp: 1549707187087
           
2. 1. autoSuggest : The second one when we completely type "schoolbags"
   +------+--------------------------------------+
   |Header| Preview | Response | Cookies | Timing|
   +------+--------------------------------------+
    > General
    > Response Header (17)
    > Request Header (14)
    > Required Payload :
        V { query: "schoolbags", contextUri: "/", marketPlace: "FLIPKART", ... }
             contentUrl: "/"
             marketPlaceId : "FLIPKART"
             query: "schoolbags"
             rows: 10
             searchBrowseHistory: []
           > types: ["QUERY", "QUERY_STORE", "PRODUCT", "PARTITION"]
           userTimeStamp: 1549707188102
           
 - It was because we gave a pause between "school" and "schoolbags". So once we
   gave a pause at "school", it made an API call and got the result and once we
   completed with "schoolbags", it again made an API call and get us the result
   over here. We can see these responses and the suggestions from 0to9 it is suggesting.
   
   -------+---------+----------------------------+
   |Header| Preview | Response | Cookies | Timing|
   -------+---------+----------------------------+
    V {CACHE_INVALIDATION_TIL : "58724211873", REQUEST: null, ...} 
        CACHE_INVALIDATION_TIL : "58724211873"
        REQUEST : null
      V RESPONSE : { query: "schoolbags", responseId: "f4afd1f1-deaf-4634-a052-08ef3ec0bef6",...} 
          query: "schoolbags"
          requestId: "f4afd1f1-deaf-4634-a052-08ef3ec0bef6"
        V suggestions : [{type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}},...]
          > 0: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 1: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 2: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 3: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 4: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 5: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 6: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 7: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 8: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
          > 9: {type: "AUTOSUGGEST_QUERY_STORE_WIDGET", data: {,...}}
        > tracking: {otracker: "ASAPI_QueryStore_2_0_0_Query_8_0_0_Product_0_0_Rich_0_0_0",...}
      > SESSION: {accountId: null, asn: null, email: null, firstname: null, flipkartFirstUser: false, isLoggedIn: false,...} 
        STATUS_CODE: 200
        
Q) So, we need to implement these type of functionality to our own search bar.
   So how will we do it?
 - Here "debounce" funcionality comes into picture.
 
* Develop the same functionality and learn how to approach this question in 
* interview directly from scratch - 
   
1. We will create an input box in HTML Page :

<body>
    <input type="text" onkeyup="getData()" />
    <script src="01Debouncing.js"></script>
</body>

 -> "onkeyup" in this method will call a method "getData()", this getData() method
    will get the data from the server or hit an API and get the data and can do
    whatever we want to. So, let's try to implement getData() in our JS file :
 - Let's say we have a function getData which calls an API and gets Data, so we
   can implement a logic of making our network call and getting the data according
   to the search queries. For now we will just write a console.log() over here.

   const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data..");
  }

 - If we refresh the page, we can see the search bar over the screen and 
   on key up press event it is printing "fetching data.." again and again.
   (means jitni baar button dabaenge utni baar "fetching data.." print hoga)
 - Now lets pass some counter to clearly visualize different events over here -

    let counter = 0;
    const getData = () => {
      // calls an API and gets Data
      console.log("Fetching Data.." + counter++);
    }

 - When we type Akshay in this input box so we fired 6 events so that means our
   API would have been called 6 times while typing Akshay. So, we what we want to
   achieve? Once we pause while typing then only this API call should be made.
 - To solve our problem of this calling getData() method again and again, we should
   come up with better function which should actually do some magic onto our
   getData() method. So, what should be the magic over here?

 - It should do some magic over getData() and don't make it call again and again
   on each and every key stroke rather it should only call when the user is paused
   while typing.
 - Suppose if we take an example of 300ms, so if only the difference of time
   between two key presses is greater than 300ms then only call getData() method 
   or fetch the results from the API.

   const doSomeMagic = function () {
    return function () {

    }
   }

   const betterFunction = doSomeMagic(getData, 300);

   - This doSomeMagic function take two arguments, first one is function and 
     second one is a delay. This delay is the delay between two key press events.
     So, instead of calling the function which is getData() over here directly,
     we will wait for certain time which is 300 right now in this case or the delay.
     and after that we will call that function. Something like this :

   const doSomeMagic = function (fn, d) {
    return function () {
      setTimeout(() => {
        getData();
      }, d)
    }
   }

   const betterFunction = doSomeMagic(getData, 300);

 - The reason to do this is because we are trying listen up for the delay for 300ms
   and check whether anyother key stroke is being pressed between these 300ms and
   if there is no keystroke between these 300ms delay then directly call the method
   that can achieved by using setTimeout() over here. 
 - So if the delay goes 300 ms then the getData() will be called so calling this
   getData() over here will not work, we have to use "apply" to fix our this variable
   and to achieve this we have to do something like maintaining the context which
   is "this", and also the arguments if there are some arguments overe here. So
   these are just basic things which are required keep a check that the evvironment
   or the lexical scope where the function is running is correct and same getData()
   method is called with the same arguments if it had.

   const doSomeMagic = function (fn, d) {
    return function () {
      let context = this,
        args = arguments;
      setTimeout(() => {
        getData(context, arguments);
      }, d)
    }
   }

   const betterFunction = doSomeMagic(getData, 300);

 - So, in this setTimeout() we are calling this getData() method and we are waiting
   for this "d" delay of 300 ms and again if keystroke happen then we should stop
   calling this method. How can we do that?
 - To stop calling that method we should somehow clear this timeout. To clear
   this timeout, we should first store this timeout into some variable, let's call
   it a "timer". So, this "timer" now has this "setTimeout()" which will expires
   this delay of 300 ms will call this getData() method but if a keystroke occurs
   between that time so we have to clear this timeout.

   const doSomeMagic = function (fn, d) {
    return function () {
      let context = this,
        args = arguments;
      
      let timer = setTimeout(() => {
        getData(context, arguments);
      }, d);
    }
   }

   const betterFunction = doSomeMagic(getData, 300);

 - When we are typing inside our searchbox, this "betterFunction" will be called
   on each and every keypress event and that will call "doSomeMagic()" method and
   will return us a function which will do some processing. So, we will have a lot
   of copies of this function running and a lot of timer created in each and every
   method call, so these timer created will be calling the "getData()" method over 
   here after each and 300 ms is passed. So, we have to come up with some strategy
   of clearning this setTimeout() or this "timer" whenever a new function call is
   being made.
 - Suppose whenever a new function call is being made and 300 ms has not passed
   we will clear this timer and we should initialize this "timer" even outside
   our method. 

   const doSomeMagic = function (fn, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
        getData(context, arguments);
      }, d);
    }
   }

   const betterFunction = doSomeMagic(getData, 300);

 - There are lot of other cases where we can apply debounce method and optimize
   our performance of our webpage.
 - Suppose we have to make an api call on scroll event or lazy loading and we are
   trying to implement/calling a function on the scroll event, the scroll event
   is triggered a lot of time when we scroll our webpage. So, we can't make an
   api call or any other functionality that many time, that will probably freeze
   our browser. So, the better way to do it to keep it behind the debounce method.
   Debounce method take a method a returns us again a method which is a better
   method than what it was. 
 - We can even use this in resize of window and a lot of other places.
    */ 

// Debouncing in JavaScript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data.." + counter++);
}

const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
      getData(context, arguments);
    }, d);
  }
 }

 const betterFunction = doSomeMagic(getData, 300);