


let dvmMobile = document.querySelector(".divmobile");
let openNav = document.querySelector("#open");
let closeNav = document.querySelector("#close");

openNav.addEventListener("click", () => {
  dvmMobile.style.right = "0";
});

closeNav.addEventListener("click", () => {
  dvmMobile.style.right = "-100" + "%";
});

// ---------------------------------------------------------
let watchVd = document.querySelector(".watch");
let closeVd = document.querySelector("#close-vd");
let vdContent = document.querySelector(".fixed-vd");
let frameVd = document.querySelector(".frame-vd")
console.log(watchVd, closeVd, vdContent);

function openVd() {
  vdContent.classList.add("show");
 
}

function closeVideo() {
  vdContent.classList.remove("show");
  frameVd.pause();
}
 watchVd.addEventListener("click", () => {
  openVd();
});
closeVd.addEventListener("click", () => {
  closeVideo();

}); 

