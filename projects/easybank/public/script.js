const menu = document.getElementById("menu")
const hamburger = document.getElementById("hamburger")


hamburger.addEventListener("click", function() {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")
    }
    
})