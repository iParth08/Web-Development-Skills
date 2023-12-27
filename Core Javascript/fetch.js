// Simple fetch from free api 

let city = "Banglore";
let weatherRequest = fetch(`https://goweather.herokuapp.com/weather/${city}`);

weatherRequest.then((responseObj)=>{
    // can perform any action before formatting large response value
    // if any error occured here
    console.log(responseObj.status);
    console.log(responseObj.ok);
    console.log(responseObj.headers); //meta data

    // one time body reading 
    return responseObj.json();

}).then((value)=>{
    console.log(value);
});

// Making a POST request 

const createTodo = async () =>{

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

    let response =  await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let resMsg = await response.json();
    return resMsg;
}

const mainFunc = async () =>{
    let todo = await createTodo();
    console.log(todo);
    console.log(JSON.stringify(todo));
    
}

mainFunc();

