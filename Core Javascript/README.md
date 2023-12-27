## JavaScript Notes

## Contents

- [JavaScript Notes](#javascript-notes)
- [Contents](#contents)
- [Keypoints](#keypoints)
- [Basic Concepts In JS](#basic-concepts-in-js)
  - [Declare variables](#declare-variables)
  - [Data types in JS](#data-types-in-js)
  - [Operators](#operators)
  - [Conditional Expressions](#conditional-expressions)
  - [Loop in JS](#loop-in-js)
  - [Functions](#functions)
- [Iterable type data](#iterable-type-data)
  - [Strings in JS](#strings-in-js)
  - [Arrays in JS](#arrays-in-js)
- [In-Browser JavaScript (Window Object)](#in-browser-javascript-window-object)
  - [Browser Object Module](#browser-object-module)
  - [Document Object Model (DOM)](#document-object-model-dom)
- [Working With DOM](#working-with-dom)
  - [Walking the DOM](#walking-the-dom)
  - [Searching in DOM](#searching-in-dom)
  - [Insertion into DOM](#insertion-into-dom)
    - [Create new and Insertion](#create-new-and-insertion)
    - [Adjacent Insertion](#adjacent-insertion)
  - [Get and Set Innercontent](#get-and-set-innercontent)
  - [Attributes and Methods](#attributes-and-methods)
  - [Modification of ClassList](#modification-of-classlist)
- [Browser Events](#browser-events)
  - [Various Events](#various-events)
  - [Handling Events](#handling-events)
  - [Event Object](#event-object)
- [Asynchronous Programming in JS](#asynchronous-programming-in-js)
  - [setInterval() or setTimeout()](#setinterval-or-settimeout)
  - [Callbacks and Errors](#callbacks-and-errors)
  - [Error Handling {using callbacks}](#error-handling-using-callbacks)
  - [Pyramid of Doom or Callback Hell](#pyramid-of-doom-or-callback-hell)
  - [Promises](#promises)
    - [How to Create Promise](#how-to-create-promise)
    - [Promise Chaining : A solution for Callback hell](#promise-chaining--a-solution-for-callback-hell)
    - [Multiple Handler to one Promise](#multiple-handler-to-one-promise)
  - [Promise API](#promise-api)
  - [Make any Function asynchronous : (Promise)](#make-any-function-asynchronous--promise)
- [Error Handling](#error-handling)
  - [try-catch \& finally](#try-catch--finally)
  - [Custom Error and Error Object](#custom-error-and-error-object)
- [Fetch API](#fetch-api)
- [Storage in JS](#storage-in-js)
  - [Cookies](#cookies)
  - [localStorage](#localstorage)

## Keypoints
- **Search mdn for docs**
0. ERRORS ARE THE BEST.
1. ECMAScript is the standard for JS.
2. JS is too liberal.
3. JS is a dynamically typed language.
   - Data-type can be changed during runtime.
   - Auto-detect data types

4. Left to right evaluation
   - 34 + 4 + str + 4 == 38str4
   - '+' is operator for addition as well as concatenation

5. What are iterables ?


## Basic Concepts In JS

### Declare variables

**var** -  (Pre ES6) (Not recommended, redeclarable) | Globally scoped \
**let** -   (Recommended) | Block scoped \
**const** - (for constant) | Block scoped 

### Data types in JS

1. **Primitive Data Types**
   - null, number, boolean, BigInt, string, Symbol, undefined
   - typeof(data)
  
    ```Js
    let a = null;
    let b = 56;
    let c = true;
    let d = BigInt("4567");
    let e = "Prakash";
    let f = Symbol("Nice Symbol");
    let g // undefined
    ```

2. **Objects [Key:value]**
   
   - const means reference to the object can not be changed. **Relationship**
   - let can also be used but it will allow change in the reference.
   - *an array or a string is also treated as an object*

   ```Js
   const item = {
    name : "Object",
    key : "values",
    "count" : 567,
    status : false
   }

   console.log(item["status"]);
   console.log(item.key);

   // Some methods on Object
   let arrayOfKeys = Object.keys(item);
   let len = arrayOfKeys.length;
   ```

### Operators

1. *Arithematic Operator*
   - There is no floor division like other language here

    ```Js
    let a = 4;
    let b = 3;
    console.log("a / b = ", a/b);
    console.log("a power b = ", a**b);
    console.log("remainder of a/b = ", a%b);
    ```

2. *Assignment Operator*
   - =, =+, =-, =*, =/ 
  
3. *Comparison Operators (conditionals)*
   - ==  || compare value | !=
   - ===  || comapre value and Type too | !==
   - ternary || (cond) ? execute when true : when false;
  
    ```Js
    console.log(6 == "6"); //true;
    console.log(6 == "6"); //false
    (6 !== "6") ? console.log(true) : console.log(false);
    ```
  
4. *Logical Operator*
   - and &&
   - or ||
   - not !

5. **Bit-wise Operator**
   
### Conditional Expressions
   - if
   - if-else | ternary
   - ladder
   - switch

### Loop in JS
   - while
   - do-while
   - for loop (classic)
   - **for-in**
   - **for-of**
   
   ```Js
   //for in (OBJECTS)
   for(let key in object){
      console.log("The key " + keys + " holds value " + object[keys]);
   }

   //for in (Arrays/String)
   for(let char in "Strings"){
      console.log(char);
   }
   ```

### Functions
   - *Change at one place, **Reflect** everywhere*
   - No return definition, dynamic detection
   - Invoking a function is necessity

   ```Js
   function func_name(parameters){
      //code and return is optional
   }

   //arrow function
   const sum = (a, b) => {
      return a+b;
   }
   ```

## Iterable type data

### Strings in JS 
   - **Datatype** : String
   - string is stream of characters
   - index accessible [0....n-1]
   - **immutable**
   - escape sequences [\t]
   
   ```Js
   let string = "This is a String";
   let len = string.length;

   //Template Literals - String Interpolation
   const boy = "Parth";
   const girl = "Priya";

   let message = `${girl} loves ${boy}.`;

   //STRING MANIPULATION

   ```

### Arrays in JS
   - **Datatype** : Object
   - In Js, Array has the most different declaration
   - Contains different data-types
   - index accessible & dynamic memory
   - **MUTABLE**

   ```Js
   const array = [1,2,4,6,7,8,9];
   const len = array.length;

   //Operations on Arrays

      //Stringify : returns a string, original safe
      let s = array.toString();
      let j = array.join("-"); 

      //modify original
      let popedVal = array.pop();
      let newLen = array.push(val);

      //Alphabetical Sort
      array.sort();

      let comparefunc = (a, b) =>{
         return a - b; //asc, b-a dsc
      }
      array.sort(comparefunc);

      //Delete Operator :: create voids, length same 
      delete array[index]; 

   ```

- **LOOPING IN ARRAY**
   - classic for : when index is important
   - *forEach()* : operations on elements
   - *for-in* : get keys/index from object/iterables
   - *for-of* : get values from iterables
   - *Array.from()* : creates an array from object - collection

   ```Js
   const arr = [1,2,3,4,5,6,7,8];

   //classical for
   for (let i=0; i<arr.length; i++){
      console.log(i, arr[i]);
   }

   // for-each loop
   arr.forEach((element)=>{
      console.log(element*element);
   })

   //for..of
   for(let item of arr){
      console.log(item);
   }

   //for..in
   for(let index in arr){
      console.log(arr[index]);
   }

   //Array.from(Collection)
   let array = Array.from("object");

   ```
- **Higher Order Array Methods**
  - *map()* : create new array |> forEach | returns [result]
  - *filter()* : apply a filter | returns element for which [true]
  - *reduce()* : produce single value upon operation

   ```Js
   const arr = [12, 13, 16, 17];

      //map((value, index, array)=>{ return ....})
      let newArr = arr.map((val)=>{
         return val + 1;
      })

      //filter - apply a filter and gives new array
      let even = arr.filter((value)=>{
         return (value%2 == 0);
      })

      //reduce - reduce to single
      let fact = stack.reduce(findFact)
      function findFact(elm1, elm2){
         return elm1*elm2;
      }

   ```

## In-Browser JavaScript (Window Object)
- Have very limited actions/features due to security reason
- Every browser has in-built js runtime engine like V8
- **differnt pages js can be cached**
  

### Browser Object Module
Provide by host environment

**console object** -
  - So many console object
  - *console.log(console)*
    - **console.table(object)**

 **prompt** - asks and fetch as a string | 
 **alert** - for testing and pop up dialog 

```JS
let fetchVal = prompt("Give me a value : ");
alert(typeof fetchVal);

fetchVal = Number.parseInt(fetchVal);
alert(typeof fetchVal);
alert(fetchVal);
```

### Document Object Model (DOM)
DOM is present in a tree structure with three types of node -
   - **html** : root
   - Element Node : 
   - Text Node : Leaf Node
   - Comment Node : Leaf Node

   ```JS
     document.documentElement    // <html>....</html>
     document.head               // <head></head>
     document.body               // <body></body>
     document.title              // this is a title :: string 
   ```
> **Source Page** : It gives raw source code. If it has errors, then so be it. \
> **Autocorrect** : Browser however tries to resolve the error by modifying loaded code as much as possible.
> This autoCorrection can sometime distrupt the DOM tree expected by the CODER.
>

## Working With DOM

### Walking the DOM
- While accessing DOM with **nodes**, all nodes are counted (here space is also counted as text node)
  - element.childNodes
  - element.parentNode //document is parent node of html
  - element.nextSibling

> Element only navigation is more desired.
- Use **Element** instead of nodes
  - element.children
  - element.lastElementChild
  - element.parentElement // null - no parent element of html(root)
  - element.nextElementSibling

> **Table navigation Methods**
> - Provides some special navigation methods
> - Search on Web when needed

### Searching in DOM
> Navigation is helpful when elements are nearby but its troublesome if its unknown/not nearby.
> **SEARCHING** can solve the issue by finding desired anchor/base.
>

**Selectors**

   ```Js
   document.querySelector("#id"); //first
   document.querySelectorAll(".class");
   document.getElementById("id");
   document.getElementsByClassName("className"); // collection of elements

   //all these selectors can work on elements too
   element.getElementsByTagName("a"); 

   ```
**Important methods**

   ```Js
   // matches() : return true if <selector> matches
   element.matches(".class");
   
   //closest() : return nearest <ancestor> which matches the selector 
   //:: FIND PARENTS or itself
   element.closest(".box");

   //contains() : true if descendant is present
   element.contains(elm2);
   ```

### Insertion into DOM
> Master carefully various methods of **Element Creation & Insertion**

#### Create new and Insertion

   ```JS
   let div = document.createElement("div");
   div.innerHTML = `Newly created box`;

   parentElm.append(div); //last child of parent
   parentElm.prepend(div); //first child of parent

   parentElm.before(div); //before Element 
   parentElm.after(div); //after Element

   parentElm.replaceWith(div); //replaces the element

   //REMOVAL
   anyNode.remove(); //removes the entire node from DOM

   ```

#### Adjacent Insertion
- insertAdjacentHTML('pos', 'html code');
- insertAdjacentElement('pos', element)
- insertAdjacentText('pos', 'text')

   ```Js
   //Think [One] as a box, 1[2....3]4
      one.insertAdjacentHTML('beforebegin', content);
      one.insertAdjacentHTML('afterbegin', content);
      one.insertAdjacentHTML('beforeend', content);
      one.insertAdjacentHTML('afterend', content);
   ```

### Get and Set Innercontent 

**For Element Nodes Only**
- innerHTML : HTML content inside an element 
- outerHTML : HTML content + element too
- textContent : provides only text
  
**For Node**
- data or nodeValue : value inside any node

### Attributes and Methods
- hidden = true | false

   ```JS
   value = element.getAtrribute("attr_name");
   bool = element.hasAttribute("attr_name");
   objColl = element.getAttributeName(); //elm.attributes
   element.setAttribute("name", "values");
   element.removeAttribute("name");
   ```

- **make a custom attribute**

   ```Js
   // <div id="elm" data-var = "value"></div>

   //custom attributes are stored as a dataset
   console.log(elm.dataset.var); //value
   elm.dataset.var = "some value";

   ```

### Modification of ClassList

```JS
// class Manipulation
element.className = "class-names";

//add or remove specific class
element.classList.add("red");
element.classList.remove("red");

element.classList.toggle("red"); 

//does it have this class
bool = element.classList.contains("red");

```

## Browser Events

- An event is a signal that something has happend.
- Every DOM node generated an event.
- *JS event handler overwrites HTML event handler*

   ```Js
   //HTML HANDELING
   // <button onclick = "console.log('clicked');>

   let butt = document.getElementsByTagName('button')[0];

   butt.onclick = ()=>{
      console.log('Result overwritten by JS handler');
   }

   ```
### Various Events

> There are a bunch of EVENTS, Google them.

- **MOUSE EVENTS**
  - click, contextmenu, mouseover/mouseout, mousedown/mouseup, mousemove
  
- **KEYBOARD EVENTS**
  - keydown, keyup
  
- **FORM EVENTS**
  - submit, focus, ....
  
- **DOCUMENT EVENTS**
  - DOMContentLoaded,

### Handling Events

- addEventListner - *can add multiple handlers to an event*
- removeEventListner - *must be given same function object* 

   ```Js
   handler = (event) => {
      //some code
   }

   elm.addEventListner('event', handler);
   elem.removeEventListner('event', handler);

   ```

### Event Object

*When an event happens, the browser creates an event object with useful details*
- This is passed as an argument to the handler.
- **console.log(event)**
  
| **property**        | **value**                 |
| ------------------- | ------------------------- |
| event.type          | Type of event {click,...} |
| event.currentTarget | element {button, div}     |
| event.clientX       | x-coordinate of cursor    |
| event.clientY       | y-coordinate of cursor    |


## Asynchronous Programming in JS

### setInterval() or setTimeout()
- *setInterval(func, delay, f_paras);* => loops the func again and again
- *setTimeout(func, delay, f_paras);* => execute the func once the time is over
  
  ```JS
  const timeoutID = setTimeout(()=>{
      console.log("This will execute with a delay of 1s");
  }, 1000);

  const intervalID = setInterval(function(){
      console.log("This will log every 2s unless stopped");
  }, 2000);

  //How to stop these asynchronous execution
  clearTimeout(timeoutID);
  clearInterval(intervalID);
  ```

### Callbacks and Errors
*A function parameter given to a function.*

**Callbacks** : A callback function is a function passed into another function as an argument to get invoked inside.

   ```Js
   // the 'callback' parameter is a function that to be invoked inside.
   function loadImage(src, callback){
      let image = document.createElement('img');
      image.src = src; 
      document.body.append(image);
      image.onload = () => {
         callback(src);
      }
   }

   // definition of callback function
   function success(url){
      console.log("Image load success : ", url);
   }

   //calling
   loadImage("https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png", success);

   //THE FLOW
   // loadImage invoked --> onload triggered---> callback(src)---success(url) invoked ---> done 

   ```

### Error Handling {using callbacks}

   ```Js
   //Error hnadling in the previous code

      function loadImage(src, callback){
         let image = document.createElement('img');
         image.src = src; 
         document.body.append(image);
         //errors
         image.onerror = () => {
            callback(new Error("The url has some problem. Check network issues too."));
         }
         //no errors
         image.onload = () => {
            callback(null, src);
         }
      }

     
      function success(error, url){
         //handling the error
         if(error){
            console.error(error);
            return;
         }
         console.log("Image load success : ", url);
      }

      //calling a faulty url
      loadImage("https://pluralsight2.imgix.net-fault/paths/images/nodejs-45adbe594d.png", success);

   ```
### Pyramid of Doom or Callback Hell
*Suppose we a list of scripts to load after one another's successful loading*

- Having callbacks nested inside callbacks creates *pyramid of doom*
- In Callbacks, total control of a function is passed -- dangerous as hell.

   ```JS
   //Growing Right!

   loadScript(script1, ...){
      if(error) return;
      //iff success
         loadScript(script2, ...){
            if(error) return;
            //iff success
               loadScript(script3, ....){
                  //.......to hell
               }
         }
   }
   ```

### Promises
- *A promise is a 'promise of code execution'*
- *Promises follow parallel execution*

Promise constructor returns a (readonly) Promise Object.
- It has two *state*
  - pending : The promise is in progress
  - fulfilled : either 'resolve' or 'reject'
  
- It can have these *result*
  - undefined : initial value
  - resolved value
  - rejected error
  
#### How to Create Promise
- **resolve** and **reject** are the only parameters, and *in-order*
  - resolve :: any value or result of successful execution
  - reject :: any error or reason of failure

- **Consumer Code:** The consuming code can recieve the *result* of a promise through *then (resolveF , errorF)* and *catch (errorF)*
  
   ```Js
      // resolve and reject are the only parameter {predefined}
      //order is important

      let cola = new Promise((resolve, reject)=>{
         setTimeout(()=>{
            //successful execution
            resolve('done');
         }, 5000)
      });

      let pizza = new Promise((resolve, reject)=>{
         
         setTimeout(()=>{
            reject(new Error("No more Pizza left"));
         }, 5000);
      });

      cola.then((value)=>{
         console.log(value);
      });

      pizza.catch((error)=>{
         console.log("Sorry, ", error);
      });

   ```
#### Promise Chaining : A solution for Callback hell 
- initial promise resolves and is handled by .then()
- .then() returns a new promise whose value is passed to next call
  
- No Right alignment, every call is clear and conscise
- Dependent on previous value

   ```JS
   let init = new Promise((resolve, reject)=>{
      resolve("Initial Done");
   })

   init.then((value)=>{
      return new Promise((resolve, reject)=>{
         resolve("Second Promise");
      })
   }).then((value)=>{
      return 3; //immediately resolved promise
   }).then((value)=>{
      console.log("Finale");
   })
   ```
#### Multiple Handler to one Promise
- Inpendent execution of each handler in parallel *?*

   ```JS
         //multiple handler to one promise :: independent execution
      pr1.then((val)=>{
         console.log("Success. Reporting handler 1");
      });

      pr1.then((val)=>{
         console.log("Success. Reporting handler 1");
      });

      pr1.then((val)=>{
         console.log("Success. Reporting handler 1");
      });
   ```
### Promise API
- Used to handle multiple promises all together
  
  ```JS

      // an array of promises resolved, don't catch error
      let promise_all = Promise.all([px1, px2, px3]);
      promise_all.then((value) => {
         console.log("Promise.all : ", value);
      });

      // an object of promises {status , value}
      let promise_allSettled = Promise.allSettled([px1, px2, px3]);

      // gives result (resolve or reject) of the first promise to settle, throws error 
      let promise_race = Promise.race([px1, px2, px3]);

      // gives the value of the first promise to fulfill, if all promises are rejected, it gives a aggregate error
      let promise_any = Promise.any([px1, px2, px3]);

      //create a resolved promise with value
      let resPro = Promise.resolve(65);

      //create a rejected promise with error
      let rejPro = Promise.reject(new Error("Custom Error"));

  ```

### Make any Function asynchronous : (Promise)
 
 - *A function can be made async by using **async** keyword*
 - An async function always returns **a promise**.
 - Automatically wraps non-promises in the promise.

 - **await** works inside async function.
 - await holds the execution until a promise is fulfilled.
  
  ```JS
   async function weather() {

    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("27 Deg");
      }, 1000);
    });
  
    let bangaloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("21 Deg");
      }, 4000);
    });
  
    let delhiTemp = await delhiWeather;
    let bangaloreTemp = await bangaloreWeather;
    return [delhiTemp, bangaloreTemp];
  }

  weather().then((value)=>{
    console.log(value);
  });  
  ```
## Error Handling
- Error handling means catching any errors that may occur, so that flow of execution does not break down.
- Catched error helps in performing some operation (solution) on it.

### try-catch & finally
 - *try* block executes **synchronous** codes which may produce error
 - *catch* block handles the error if occured.
 - *finally* block executes in all cases

 ```JS
   try{
    // some code to fetch or load anything
   }
   catch(error){
      // handle the error
   }
   finally{
      // Must execute, error occur or not ? what if catch generates error

         //Clean up Operations here
            //1. Close the file
            //2. Exit the loop
            //3. Write to the log file
            //4. Print some message
   } 
 ```
> try-catch can't handle asynchronous code - that is schedule for later.

### Custom Error and Error Object
- An error object has three properties
  - error.name : type of error
  - error.message : "message of error"
  - error.stack : every detail about error (type, message, where)


- **throw** keyword is used to throw a **new Error**
- [Different Types of Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
   ```Js
   try{

      console.log(JavaScript); //here javaScript is not defined, thus reference error

      throw new ReferenceError("Definition Missing");
   }
   catch(err){
      console.log(err.name);
      console.log(err.message);
      console.log(err.stack);
   }

   ```
## Fetch API
*Fetch API can be used to get data over the network*

```JS
let a_promise = fetch(url, [option]);
```
- If *option* not defined, a **get** request is sent by default.
- get request has a limit on how much data we can send over url.
- get is also not good by security point of view.
  
> AJAX, JSON, TEXT,..... \
> *Fetch returns a **promise** which resolves in two stages*

**Getting a response is a two staged process**
1. An object of Response class
   - status : http status code, 200 ...
   - ok : boolean, if status is within range
  
2. Call another method to access body in different format \
*ONLY ONCE WHICHEVER Required and Allowed*
   - response.text()
   - response.json()
   - response.formData()
   - response.blob()
   - response.arrayByte()
    
 ```JS
      let city = "Banglore";
      let weatherRequest = fetch(`https://goweather.herokuapp.com/weather/${city}`);

      weatherRequest.then((responseObj)=>{
         return responseObj.json();
      }).then((value)=>{
         console.log(value);
      });
 ``` 

**POST request with Fetch API**
> [Learn Well and Try](https://jsonplaceholder.typicode.com/)

- *POST is used to send data to a server to create/update a resource.*
- The data sent to the server with POST is stored in the **request body** of the HTTP request.
- Secure, since it doesnot append data in URL

```JS
//using JSONplaceholder for fake api post, data is not really stored on server here
   const options = {
      method : "POST",
      headers : {
         "Content-type" : "application/json"
      },
      body : JSON.stringify({
         title : "Learn JS",
         body : "Fetch in Progress",
         userId : "666"
      })
   }

   fetch('https://jsonplaceholder.typicode.com/posts', options)
   .then((response) => response.json())
   .then((json) => console.log(json));

```
## Storage in JS

### Cookies
*Cookies are small string of data directly stored in Browser* 
> PENDING FOR MORE
 ```Js
   document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

 ```

### localStorage
*localStorage is a web storage object that keeps key-value pair in local browser*
- data not send to server with each request
- it is persistent that is not lost unless until cleared
- saved in browser at the path of the site itself
  
  ```JS
  //localStorage methods
  
  ```

