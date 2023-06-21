let dvmMobile =  document.querySelector(".divmobile");
let openNav =  document.querySelector("#open");
let closeNav =  document.querySelector("#close");
console.log(dvmMobile,closeNav,openNav);

openNav.addEventListener("click",()=>{
    dvmMobile.style.right = "0"
});

closeNav.addEventListener("click",()=>{
    dvmMobile.style.right = "-100"+ "%"
});