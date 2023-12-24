const next = document.getElementsByTagName("button")[0];

const jokeBox = document.getElementsByClassName("joke-box")[0];

next.addEventListener('click', nextJoke);

let jokeIdx = 0;
let maxJokes = jokes.length;
console.log(maxJokes);
//hoisted on top
function nextJoke(){
    jokeIdx = (jokeIdx + 1)%maxJokes;
    console.log(jokeIdx);
    populate(jokeIdx);
}

function populate(jokeIdx){
    jokeBox.innerHTML = jokes[jokeIdx];
}


//on start
populate(jokeIdx);