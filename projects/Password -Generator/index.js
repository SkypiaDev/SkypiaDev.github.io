const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordBtn = document.getElementById("pass-btn")
let firstPassword = document.getElementById("first-pass")
let secondPassword = document.getElementById("second-pass")

function randomPassword() {

    let passe = ""
    for ( let i = 1; i < 16; i++){
        let randomNum = Math.floor(Math.random() * characters.length)
        passe += characters[randomNum]
    }

    return passe
}

passwordBtn.addEventListener('click', () => {
    
    firstPassword.textContent = randomPassword()
    secondPassword.textContent = randomPassword()

});