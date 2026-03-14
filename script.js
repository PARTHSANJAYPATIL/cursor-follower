let body = document.querySelector("body");

let box = document.querySelector("#box");

let food = document.querySelector("#food");

function logKey(e) {
  let X = e.pageX; 
  let Y = e.pageY;
  box.style.transform = `translate(${X}px,${Y}px)`
}

body.addEventListener("mousemove", logKey);

