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
- [Some functions in JS](#some-functions-in-js)
  - [setInterval() or setTimeout()](#setinterval-or-settimeout)
- [Browser Events](#browser-events)
  - [Various Events](#various-events)
  - [Handling Events](#handling-events)
  - [Event Object](#event-object)

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

## Some functions in JS

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






