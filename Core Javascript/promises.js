// resolve and reject are the only parameter {predefined}
//order is important
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //successful execution
        resolve('done');
    }, 5000)
});

let p2 = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        reject(new Error("Execution Failed"));
    }, 5000);
});

//parallel execution


p1.then((value)=>{
    console.log(value);
});

p2.catch((error)=>{
    console.log("Sorry, ", error);
})


//promise chaining and rewriting callback functions using promises
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      document.body.append(script);
  
      script.onload = () => {
        console.log("Script loaded successfully");
        resolve(1);
      }
  
      script.onerror = () => {
        console.log("Error loading script");
        reject(0);
      }
    })
  }
  
  
  let pr1 = loadScript("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjk0NC5hKqDAxUrslYBHS_iDJoQPAgJ");
  
  pr1.then((value) => {
    console.log(value);  
  }).catch((error) => {
    console.log(error);
  });

  
  //multiple handler to one promise :: independent execution / isParallel ?
  pr1.then((val)=>{
    setTimeout(()=>{
        console.log("Success. Reporting handler 1");
    }, 1000);
  });

  pr1.then((val)=>{
    setTimeout(()=>{
        console.log("Success. Reporting handler 2");
    }, 6000);
  });

  pr1.then((val)=>{
    setTimeout(()=>{
        console.log("Success. Reporting handler 3");
    }, 12000);
  });





  //Promise API
  let px1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Value 1");
      reject(new Error("Error in px1"));
    },1000);
  });
  
  let px2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 2");
    //   reject(new Error("Error in px2"));
    },2000);
  });
  
  let px3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Value 3");
      reject(new Error("Error in px3"));
    },3000);
  });
  
  // an array of promises resolved, don't catch error
  let promise_all = Promise.all([px1, px2, px3]);
  promise_all.then((value) => {
    console.log("Promise.all : ", value);
  });
  
  // an object of promises {status , value}
  let promise_allSettled = Promise.allSettled([px1, px2, px3]);
  promise_allSettled.then((value) => {
    console.log("Promise.allSettled : ", value);
  });
  
  // gives result (resolve or reject) of the first promise to settle, throws error 
  let promise_race = Promise.race([px1, px2, px3]);
  promise_race.then((value) => {
    console.log("Promise.race : ", value);
  });
  
  // gives the value of the first promise to fulfill, if all promises are rejected, it gives a aggregate error
  let promise_any = Promise.any([px1, px2, px3]);
  promise_any.then((value) => {
    console.log("Promise.any : ", value);
  });



  
  