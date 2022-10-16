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