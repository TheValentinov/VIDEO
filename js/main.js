document.querySelector(".filter__head");
console.log(document.querySelector(".filter__head"));
let btn = document.querySelector(".filter__head");

console.dir(btn);

function handlerClick() {
  btn.innerHTML = '<img src="img/fa-solid_filter.svg">';
  btn.style.border = "none";
  div.style.display = "flex";
}

btn.addEventListener("click", handlerClick);

let div = document.querySelector(".glav__benefits");

/*----------------------*/ 

/* Установить ширину боковой панели с шириной 250 пикселей и следующий */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Установите ширину боковой навигации в 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*---------------------*/ 

