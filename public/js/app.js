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
let frameVd = document.querySelector(".frame-vd");
let clickwatch = document.querySelector("#clickwatch");

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
clickwatch.addEventListener("click", () => {
  openVd();
});
closeVd.addEventListener("click", () => {
  closeVideo();
});

// --------------------------------------------------------

let span1 = document.querySelector(".btn1");
let span2 = document.querySelector(".btn2");
let span3 = document.querySelector(".btn3");
let span4 = document.querySelector(".btn4");
let divcontent1 = document.querySelector(".div-content1");
let divcontent2 = document.querySelector(".div-content2");
let divcontent3 = document.querySelector(".div-content3");
let divcontent4 = document.querySelector(".div-content4");

span1.addEventListener("click", () => {
  divcontent1.classList.add("show");
  span1.classList.add("active");
  divcontent2.classList.remove("show");
  span2.classList.remove("active");
  divcontent3.classList.remove("show");
  span3.classList.remove("active");
  divcontent4.classList.remove("show");
  span4.classList.remove("active");
});
span2.addEventListener("click", () => {
  divcontent2.classList.add("show");
  span2.classList.add("active");
  divcontent1.classList.remove("show");
  span1.classList.remove("active");
  divcontent3.classList.remove("show");
  span3.classList.remove("active");
  divcontent4.classList.remove("show");
  span4.classList.remove("active");
});
span3.addEventListener("click", () => {
  divcontent3.classList.add("show");
  span3.classList.add("active");
  divcontent2.classList.remove("show");
  span2.classList.remove("active");
  divcontent1.classList.remove("show");
  span1.classList.remove("active");
  divcontent4.classList.remove("show");
  span4.classList.remove("active");
});
span4.addEventListener("click", () => {
  divcontent4.classList.add("show");
  span4.classList.add("active");
  divcontent2.classList.remove("show");
  span2.classList.remove("active");
  divcontent1.classList.remove("show");
  span1.classList.remove("active");
  divcontent3.classList.remove("show");
  span3.classList.remove("active");
});

// ---------------------------------------
let carusel = document.querySelector(".carusel");
let isDrag = false,
  startX,
  startScrollLeft;

let slidBtn = document.querySelectorAll(".btnsslid button");
console.log(slidBtn);

let firstWidth = document.querySelector(".card").offsetWidth;
slidBtn.forEach(btn => {
  btn.addEventListener('click',()=>{
    carusel.scrollLeft += btn.id === "slidBtn1" ? -firstWidth : firstWidth;

})
});



const dragStart = (e) => {
  isDrag = true;
  carusel.classList.add("draging");
  startX = e.pageX;
  startScrollLeft = carusel.scrollLeft;
};
const draga = (e) => {
  if (!isDrag) return;
  carusel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = (e) => {
  isDrag = false;
  carusel.classList.remove("draging");
};
carusel.addEventListener("mouseover", draga);
carusel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
