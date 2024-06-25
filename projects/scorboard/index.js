let counterHome = document.getElementById("counter-home")
let counterGuest = document.getElementById("counter-guest")

function winner(){
     if(Number(counterHome.textContent) > Number(counterGuest.textContent) ){
        counterGuest.classList.remove("winner")
        counterHome.classList.add("winner")
    }else if (Number(counterGuest.textContent) > Number(counterHome.textContent)){
        counterHome.classList.remove("winner")
        counterGuest.classList.add("winner")
    }else {
         counterHome.classList.remove("winner")
         counterGuest.classList.remove("winner")
    }
}

function incrementHome1() {
   let count = Number(counterHome.textContent) + 1
   counterHome.textContent = count
   
    winner()
}

function incrementGuest1() {
   let count = Number(counterGuest.textContent) + 1
   counterGuest.textContent = count
   
   winner()
   
}

function incrementHome2() {
   let count = Number(counterHome.textContent) + 2
   counterHome.textContent = count
   
    winner()
}

function incrementGuest2() {
   let count = Number(counterGuest.textContent) + 2
   counterGuest.textContent = count
   
    winner()
}

function incrementHome3() {
   let count = Number(counterHome.textContent) + 3
   counterHome.textContent = count
   
    winner()
}

function incrementGuest3() {
   let count = Number(counterGuest.textContent) + 3
   counterGuest.textContent = count
   
   winner()
}
