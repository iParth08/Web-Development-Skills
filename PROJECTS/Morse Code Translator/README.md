# Morse Code Translator

The Morse Code Translator is a simple web application built using HTML, CSS, and JavaScript. It allows users to convert English text to Morse Code and vice versa. Additionally, it provides a visual representation of Morse Code through a simple animation.

## Chronological Progress

### Morse Code Translator Functions:

**Converts English into Morse Code:**
Takes input text (English).
Maps each English character to its Morse Code equivalent.
Outputs the Morse Code.

**Morse Code into English:**
Takes input Morse Code.
Maps each Morse Code sequence to its English character.
Outputs the English text.

**Blink and Dot-Dash Animation:**
Represents Morse Code visually.
Uses animations to show dots and dashes.
Corresponds the animation with the translated Morse Code.

### Setting Up HTML 
 - One section for head
 - One section for animation
   - Here blinking lights
 - One section for Input **(Message)** and Output **(Morse)**
 - One for Buttons to call functions
 - One footnote section

### Setting Up CSS
- Provide a beautiful theme *(I chose dark)*
- Make it responsive, used Flex here
- Can add aditional animation too 

### Javascript 
- First have two maps for conversion of Morse to English and vice versa.
  
  ```JS
        const englishToMorseMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', // Period
        ' ': '.......' // space

        // Add mappings for other characters if needed
    };

    // same way for other (morseToEnglishMap)
  ```
- Then create Two functions to handle the mapping
- Add events on the buttons
- Create animation function 
- Call animation in whichever function necessary
  
    ```Js
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
  ```

- **Flag : animationInProgress** : One check is important to prevent functions from repeatitive calling while animation in progress.
  
  ```JS
    clearInterval(intervalID);
    animationInProgress = false;
    //change flag only after animation is successfully terminated.
  ```
  
  ### Final Project
  After successful execution of all above processes, the final project is ready.
![projectGif](https://github.com/iParth08/Web-Development-Skills/assets/112176494/1aa39bee-283b-4c6b-b287-71f5d38670d1)


  
