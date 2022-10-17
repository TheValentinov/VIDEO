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