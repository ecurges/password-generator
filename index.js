let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let passwordLength = 15

function generatePassword() {
     // console.log("Generating Passwords")
     password1El.textContent = ""
     password2El.textContent = ""
     for ( i = 0; i < passwordLength; i++ ) {
        password1El.textContent += getRandomCharacter()
        password2El.textContent += getRandomCharacter()
     }
}

function getRandomCharacter() {
    return characters[Math.floor( Math.random() * characters.length )]
}

