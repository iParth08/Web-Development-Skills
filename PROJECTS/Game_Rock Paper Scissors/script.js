// Fetching DOMS
const animeContainer = document.querySelector(".animeSection");
const cpuChoice = document.querySelector(".cpu-chose img");
const userChoice = document.querySelector(".user-chose img");

const result = document.querySelector(".result h2");

const optionImages = document.querySelectorAll(".option-img");

const optionArray = ["images/rock.png", "images/paper.png", "images/scissors.png"];
let cpuValue; //value assigned to CPU choice
let userValue; //value assigned to User Choice

//testing
// console.log(cpuChoice, userChoice, result, optionImages);

//  Function for CPU-Choice
function CPUTurn(){
    let randomIdx = Math.floor(Math.random() * 3);
    cpuChoice.src = optionArray[randomIdx];

    cpuValue = ["R", "P", "S"][randomIdx];
}

function judgeOfMatch(){
    // console.log(userValue, cpuValue);

    if(userValue == cpuValue){
        result.innerHTML = "<i>🤞🤞 AHH! ITS A DRAW 🤞🤞</i>"
    }
    else if((userValue == "R" && cpuValue == "S") || (userValue == "P" && cpuValue == "R") || (userValue == "S" && cpuValue == "P")){
        result.innerHTML = "CONGRATULATIONS ! YOU WON🤩";
    }
    else{
        result.innerHTML = "TOO BAD. CPU IS SMARTER. 🤦‍♀️";
    }
}
// adding event listener to each option
optionImages.forEach((image, index)=>{
    image.addEventListener('click', (e)=>{
        image.classList.add("active");

        //remove active from the rest
        optionImages.forEach((imgRest, indexR) =>{
            // console.log(index, indexR);

            if(index != indexR) //not the same as selected
            {
                imgRest.classList.remove("active");
            }
        });

        //setting a DELAY for cool animation
        userChoice.src = cpuChoice.src = optionArray[0]; //reset to rock
        animeContainer.classList.add("animate");
        result.innerHTML = "<i>Thinking......</i>";
        
        const time = setTimeout(()=>{
            
            // stop animation
            animeContainer.classList.remove("animate");
            let d = document.querySelector(".active")
            d.classList.remove("active");
           
            //set image as chosen-one || only image clickable ??
            let imgSrc = optionArray[index];
            userChoice.src = imgSrc;
            userValue = ["R", "P", "S"][index];

            //let CPU CHOOSE 
            CPUTurn();
            
            //result decision
            judgeOfMatch();

        }, 3500);

        
    });
})