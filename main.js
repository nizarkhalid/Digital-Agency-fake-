let bars = document.querySelector(".bars");
let nav = document.querySelector(".nav");
bars.addEventListener("click" , ()=> {
    bars.classList.toggle("open")
    nav.classList.toggle("open")
})

let links = document.querySelectorAll(".nav a");

links.forEach( e=> e.addEventListener("click", ()=>{
    bars.classList.remove("open")
    nav.classList.remove("open")
}))
