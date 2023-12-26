//localStorage is a javascript object that stores data in key-value pairs.

//Both key and value should be Strings to be stored in localStorage. To store any Obect, use JSON.stringify() to convert it to a string.

/** 
string = JSON.stringify(object)
object = JSON.parse(string)

*/

let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");

localStorage.setItem(key, value);

// get item value from localStorage
let display = `The value at ${key} is ${localStorage.getItem(key)}`;

console.log(display);

//remove from local storage
if(key == "Hi" || key == "one"){
  localStorage.removeItem(key)
}

//get keys from the local storage
let keys = Object.keys(localStorage);
console.log(keys);

localStorage.length; //gives no. of keys
localStorage.key(0); //gives key at index 0

//clear all the keys from local storage
if(key == "clear"){
  localStorage.clear();
}


//sessionStorage is just like local storage, but survives only current session/tab;
// Only saves data from refresh; other than that, data is gone.
//all methods are same


//STORAGE EVENT
