// Your code goes here

// Zoom Wheel On Map Img #1 prevent default
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

// on Keydown #3
let keyD = document.querySelector(".main-navigation");

document.addEventListener("keydown", logKey);

function logKey(e) {
  keyD.textContent += `${e.code}`;
}

//focus #4

const blurD = document.querySelectorAll("p");

blurD[2].addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

// cut #5

const cut = document.querySelector("img");

cut.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
  event.preventDefault();
});

// double click  #6

const doublecl = document.querySelectorAll(".nav-link");

doublecl[2].addEventListener("dblclick", function (e) {
  doubleCl.classList.toggle("large");
});

// mouse Out #7

const aboutOut = document.querySelectorAll(".nav-link");

aboutOut[1].addEventListener("mouseleave", function (event) {
  event.target.style.color = "yellow";
});

// on select #8

const select1 = document.querySelector(".nav-link");

select1.addEventListener("select", logSelection);

function logSelection(event) {
  const log = document.querySelectorAll(".nav-link");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log[0].textContent = `You selected: ${selection}`;
}

// pointer lock #9

const pointerLock = document.querySelectorAll(".nav-link");

pointerLock[3].addEventListener("pointerlockchange", (event) => {
  console.log("pointer lock changed");
});

// noContextMenu #10

const noContext = document.querySelectorAll("p");

noContext[1].addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
