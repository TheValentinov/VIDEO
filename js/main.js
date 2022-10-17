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

let button = document.querySelectorAll(".card__like");

function HandlerClick(e) {
  e.target.src = 'img/korzina_blue.svg';
}

button.forEach(function (btn) {
  btn.addEventListener("click", HandlerClick);
})


let a = document.querySelector(".panel_korzina");


function handlerClic() {
  a.style.width = "450px";
  let img = a.querySelector('img')

  img.src = 'img/korzina-white.svg'
  a.style.backgroundColor = "#007ABE";
  p.style.display = 'flex';
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

function myFunction() {
  document.getElementById("myDrop").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDrop = dropdowns[i];
      if (openDrop.classList.contains('show')) {
        openDrop.classList.remove('show');
      }
    }
  }
}




/*--------------------------------------------*/ 

var show = function (state) {
  document.getElementById('modalForm').style.display = state;
  document.getElementById('filter').style.display = state;
}


/*-----------------------------------------*/

let btn2 = document.querySelector(".btn_1")
let btn3 = document.querySelector(".btn_2")
let div2 = document.querySelector(".chet")
let chet = 1

btn3.addEventListener("click", function () {
  ++chet
  div2.innerText = chet
})
btn2.addEventListener("click", function () {
  --chet
  div2.innerText = chet
})