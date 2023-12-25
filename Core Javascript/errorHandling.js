function f(){
    try{
        let str = "Hello World";
        console.log(str.split("").reverse().join(""));
        console.log(sring); //an error generated
      
        throw new ReferenceError("Some difinition missing #456")
      }
      catch(err){
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
      
        //catch block too can generate error
        consoe.log(err.name); //spelling error
      }
      finally{
        //Clean up Operations here
        //1. Close the file
        //2. Exit the loop
        //3. Write to the log file
        //4. Print some message
        //5. Call the api
      
        //Operations that should run regardless of any error
        //if any one of try or catch is even touched, finally will be executed even if it means death.
        console.log("Finally clause");
      }
}
  
  console.log("This is end of the program");