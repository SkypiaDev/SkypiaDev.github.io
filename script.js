document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById("menu-icon")
    const nav = document.getElementById("nav")
    const navEl = document.querySelectorAll(".nav-el")
    const lgNav = document.querySelectorAll(".lg-nav")
    const section = document.querySelectorAll(".section")

    menu.addEventListener("click", function() {
        if(nav.classList.contains("hidden") ){
            nav.classList.remove("hidden")
        }else{
            nav.classList.add("hidden")
        }
    })

    navEl.forEach(el => {
        el.addEventListener("click", function() {
            nav.classList.add("hidden")
        })
    });


    
    const home = document.querySelector("#home")
    const about = document.querySelector("#about")
    const skills = document.querySelector("#skills")
    const work = document.querySelector("#work")
    const contact = document.querySelector("#contact")

   // add background to nav element
    function addClass(i) {
        lgNav.forEach(el => {
            el.classList.remove("bg-slate-500/70")
        })
        lgNav[i].classList.add("bg-slate-500/70")
    }
    
   window.addEventListener("scroll", () => {
    //remove background of navbar
        if(home.getBoundingClientRect().top > -120){
            document.querySelector("#nav-bar").classList.remove("bg-slate-400/95")
        }else {
            document.querySelector("#nav-bar").classList.add("bg-slate-400/95")
        }
      // remove background of "home" in navbar  
        lgNav.forEach(el => {
            el.classList.remove("bg-slate-500/70")
        })

        if(contact.getBoundingClientRect().top < 300) {
            addClass(4)

        }else if(work.getBoundingClientRect().top < 300) {
            addClass(3)

        }else if(skills.getBoundingClientRect().top < 300) {
            addClass(2)

        }else if(about.getBoundingClientRect().top < 300) {
            addClass(1)

        }else if(home.getBoundingClientRect().top < -120 ){
            addClass(0)
        }
    })
     


           
    // this code didn't work for me
    

    // section.forEach(el => {
    //     lgNav.forEach(element => {
    //         element.classList.remove("bg-slate-500/70")
    //     })
    //     // get the index of the section to now wich index to apply the class to in lgNav
    //     let index = 0
    //     while (el != section[index]) {
    //         index ++
    //     }
    //         if(el.offsetTop < window.innerHeight / 2){
    //             lgNav[index].classList.add("bg-slate-500/70")
    //         }
    // })   
    


});