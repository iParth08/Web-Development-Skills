// // the 'callback' parameter is a function that to be invoked inside.
// function loadImage(src, callback){
//     let image = document.createElement('img');
//     image.src = src; 
//     document.body.append(image);
//     image.onload = () => {
//        callback(src);
//     }
//  }
 
//  // definition of callback function
//  function success(url){
//     console.log("Image load success : ", url);
//  }
 
//  //calling
//  loadImage("https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png", success);
 
 //THE FLOW
 // loadImage invoked --> onload triggered---> callback(src)---success(url) invoked ---> done 


 // ERROR HANDLING
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
       console.warn(error);
       return;
    }
    console.log("Image load success : ", url);
 }

 //calling a faulty url-fault remove(-fault) to make it work
 loadImage("https://pluralsight2.imgix.net-fault/paths/images/nodejs-45adbe594d.png", success);