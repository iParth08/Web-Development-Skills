    // Mapping object for English to Morse Code
    const englishToMorseMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', // Period
        ' ': '.......' // space

        // Add mappings for other characters if needed
    };

    // Mapping object for Morse Code to English
    const morseToEnglishMap = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
        '.-.-.-': '.', // Period
        '.......': ' ' //space
       
        // Add mappings for other characters if needed
    };


    // Fetching HTML Elements here
    const englishButton = document.getElementById("toEnglish");
    const morseButton = document.getElementById("toMorse");

    const messageField = document.getElementById("message");
    const morseField = document.getElementById("morse");

//Animation Code
var animationInProgress = false;

    morseButton.onclick = function(){
        if(animationInProgress){
            console.log("Animation in Progress.");
            return;
        }
        console.log("executed");

        //flag
        animationInProgress = true;

        let string = messageField.value.toUpperCase();  
        let morseCode = '';

        for(let char of string){

            //getting equivalent from mapping
            if(englishToMorseMap[char]){
                morseCode += englishToMorseMap[char] + ' '; //space used for split
            }
        }
        morseField.value = morseCode.trim(); //remove extra outside space

        animateMorseCode(morseCode);
    }

    englishButton.onclick = function(){
        if(animationInProgress){
            console.log("Animation in Progress.");
            return;
        }
        console.log("executed");

        //flag
        animationInProgress = true;

        let string = morseField.value;
        let morseSeqArray = string.split(' ');
        let englishMessage = '';

        for(let morse of morseSeqArray){
            if(morseToEnglishMap[morse]){
                englishMessage += morseToEnglishMap[morse];
            }
            else{
                englishMessage += '?'; //error
            }
        }

        messageField.value = englishMessage;
        animateMorseCode(string);

    }

    function animateMorseCode(morse){

        let morseSeqArray = '';

        const animateContainer = document.getElementById("animation-area");
        morseSeqArray = morse.split('');

        animateContainer.innerText = '';
        let string = '';
        let index = 0;

        const intervalID = setInterval(()=>{
            if(index < morseSeqArray.length){

                const symbol = morseSeqArray[index];
                animateContainer.style.backgroundColor = 'White';
                if(symbol == '.'){
                    animateContainer.style.backgroundColor = '#61DAFB';
                }
                else if(symbol == '-'){
                    animateContainer.style.backgroundColor = '#FF6347';
                }
                else if (symbol == ' '){
                    animateContainer.style.backgroundColor = '#383838';
                    // animateContainer.style.backgroundColor = 'GREY';
                }

                string += symbol;
                animateContainer.innerText = string;
                
                index++;
            }
            else{
                clearInterval(intervalID);
                animationInProgress = false;
                animateContainer.style.backgroundColor = '#383838'; //reset
            }
        }, 300);

        //any code here will get executed regardless of setInterval, because its asynchronous.

    }
