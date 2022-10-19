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

/*---------------------------------*/ 

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

/*--------------------------------------*/ 

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