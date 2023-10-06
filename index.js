const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordOne = ""
let passwordTwo = ""
const passwordField1 = document.getElementById("password-1")
const passwordField2 = document.getElementById("password-2")



function getRandomSymbol() {
    let i = Math.floor(Math.random() * characters.length)
    return characters[i]
    }


function getCharacters() {
 
    
    for (let i=0; i<=15; i++) {
        passwordOne += getRandomSymbol()
    }

    for (let i=0; i<=15; i++) {
        passwordTwo  += getRandomSymbol()
    }
    
    passwordField1.textContent = passwordOne
    passwordField2.textContent = passwordTwo
    
}

function generateTwopasswords() {
    passwordOne = ""
    passwordTwo = ""
    getCharacters()
}





