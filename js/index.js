// Your code goes here

// Zoom Wheel On Map Img #1
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  mapImg[1].style.transform = `scale(${scale})`;
}

let scale = 1;
const mapImg = document.querySelectorAll("img");
mapImg[1].onwheel = zoom;

// Mouse Over #2

let mouseO = document.querySelector(".content-pick");

mouseO.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "orange";
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// on Keydown
let keyD = document.querySelector(".main-navigation");

document.addEventListener("keydown", logKey);

function logKey(e) {
  keyD.textContent += `${e.code}`;
}

// drag/drop

let sizED = document.querySelectorAll("h2");

function windowSize() {
  sizED[2].textContent = window.innerHeight;
}
window.onresize = windowSize;
sizED[2].addEventListener("resize", windowSize);

//
