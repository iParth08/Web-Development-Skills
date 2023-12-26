// TASK :: String Manipulation
// TASK :: Array Methods

// let content = '<div> <h2>New added div</h2> </div>';

// const one = document.getElementById("one");
// one.insertAdjacentHTML('beforebegin', content);
// one.insertAdjacentHTML('afterbegin', content);
// one.insertAdjacentHTML('beforeend', content);
// one.insertAdjacentHTML('afterend', content);

// alert("Hi");
//Storage events triggers when storage is modified
window.onstorage = (e) => {
    alert("Modification in storage");
    console.log("Storage:", e);
    if (e.key === "counter") {
      document.querySelector("#counter").innerText = e.newValue;
    }
  }
  
  // no alert on setting for first time
  localStorage.setItem("counter", 0);
  
  //modifies the counter (value + 1)
  localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) + 3);
