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

let firstWidth = document.querySelector(".card").offsetWidth;
slidBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    carusel.scrollLeft += btn.id === "slidBtn1" ? -firstWidth : firstWidth;
  });
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

//-----------------------------------------------------------

let caruselImg = document.querySelector(".caruselimg");
let isDragImg = false,
  startImgX,
  startImgScrollLeft;

let slidBtnImg = document.querySelectorAll(".btnsslidImg button");
console.log(slidBtnImg);

let firstWidthImg = document.querySelector(".cardimg").offsetWidth;
slidBtnImg.forEach((btnimg) => {
  btnimg.addEventListener("click", () => {
    caruselImg.scrollLeft +=
      btnimg.id === "slidBtn1Img" ? -firstWidthImg : firstWidthImg;
  });
});

const dragStartImg = (ev) => {
  isDragImg = true;
  caruselImg.classList.add("draging");
  startImgX = ev.pageX;
  startImgScrollLeft = caruselImg.scrollLeft;
};
const dragaImg = (ev) => {
  if (!isDragImg) return;
  caruselImg.scrollLeft = startImgScrollLeft - (ev.pageX - startImgX);
};
const dragStopImg = (ev) => {
  isDragImg = false;
  caruselImg.classList.remove("draging");
};
caruselImg.addEventListener("mouseover", dragaImg);
caruselImg.addEventListener("mousedown", dragStartImg);
document.addEventListener("mouseup", dragStopImg);

// --------------------------------------------------------
let scroll_up = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    scroll_up.classList.add("show");
  } else {
    scroll_up.classList.remove("show");
  }
};
scroll_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//--------------------------------------------------------------
let darkBtn = document.querySelector("#darkBtn");

function darkMode() {
  document.body.classList.toggle("dark");
  document.querySelector(".main-heading").classList.toggle("dark");
  document.querySelector(".darkmod").classList.toggle("light");
  document.querySelector("header").classList.toggle("dark");
  document.querySelector(".section-1").classList.toggle("dark");
  document.querySelector(".section-2").classList.toggle("dark");
  document.querySelector(".section-3").classList.toggle("dark");
  
  document.querySelector(".section-4").classList.toggle("dark");
    
  document.querySelector(".section-5").classList.toggle("dark");
  document.querySelector(".section-5 .main-heading").classList.toggle("dark");
  document.querySelector(".section-6").classList.toggle("dark");
  document.querySelector(".section-6 .main-heading").classList.toggle("dark");
  document.querySelector(".section-7").classList.toggle("dark");
  document.querySelector(".section-7 .main-heading").classList.toggle("dark");
  document.querySelector(".section-8").classList.toggle("dark");
  document.querySelector(".section-8 .main-heading").classList.toggle("dark");
  document.querySelector(".section-9").classList.toggle("dark");
  document.querySelector(".section-9 .main-heading").classList.toggle("dark");
  document.querySelector(".section-10").classList.toggle("dark");
  document.querySelector(".section-10 .main-heading").classList.toggle("dark");
}
darkBtn.addEventListener("click", darkMode);
