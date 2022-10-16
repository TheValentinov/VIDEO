document.querySelector(".filter__head");
console.log(document.querySelector(".filter__head"));


let btn = document.querySelector(".filter__head");

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

let button = document.querySelector(".card__like");

function HandlerClick() {
  button.innerHTML = '<img src="img/korzina_blue.svg">';
  button.style.border = "none";
  div.style.display = "flex";
}



button.addEventListener("click", HandlerClick);

let a = document.querySelector(".panel_korzina");


function handlerClic() {
  a.style.width = "450px";
  a.innerHTML = '<img src="img/korzina-white.svg">';
  a.style.backgroundColor = "#007ABE";
  p.style.display = 'block';
  p.onclick = null;
}

a.addEventListener("click", handlerClic);

let p = document.querySelector(".korzina_name")

/*-------------------------*/ 
let two = document.querySelector(".filter__two");

function OnClick() {
  twe.style.display = "none";
}

let twe = document.querySelector(".popular__content-two");

two.addEventListener("click", OnClick);

/*--------------------------*/ 

