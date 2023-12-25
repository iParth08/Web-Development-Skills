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
  
  console.log("Welcome to weather control room");
  let a = weather();
  a.then((value)=>{
    console.log(value);
  })