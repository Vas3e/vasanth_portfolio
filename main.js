let navbar=document.getElementById("bar")
let navlinks=document.querySelectorAll("nav ul li a")
// console.log(navlinks)
// console.log(typeof navlinks)
navlinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        if(window.innerWidth<=768){
           navbar.checked=false;
        }
    })
})