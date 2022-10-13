document.querySelector(".filter__head");
console.log(document.querySelector(".filter__head"));
let btn = document.querySelector(".filter__head");

console.dir(btn);

function handlerClick() {
  btn.innerHTML = '<img src="img/Frame265.svg">';
  btn.style.border = "none";
  div.style.display = "flex";
}

btn.addEventListener("click", handlerClick);

let div = document.querySelector(".glav__benefits");
