// append cookies and not overwrite all
document.cookie = "name=shwetPrakash"; //one time one cookie is set (key=value; options)
let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);

//Limited to 4kb data in key=value
//not more than 20 cookies/page ==> browser dependent
