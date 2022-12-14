document.querySelector(".filter__head");
console.log(document.querySelector(".filter__head"));

let btn = document.querySelector(".filter__head");

function handlerClick(e) {
  document.body.classList.toggle("filter");
  e.currentTarget.classList.toggle("filter__head--active");
}

function rightNav() {
  document.getElementById("mySidebar").style.width = "340px";
  document.getElementById("main").style.marginLeft = "340px";
}

function leftNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

btn.addEventListener("click", handlerClick);

let div = document.querySelector(".filters_wrapper");
function erClick(f){
document.currentTarget.classList.toggle("filters_wrapper--active");
}
div.addEventListener("click", erClick);

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
  e.currentTarget.classList.toggle("card__like--active");
}

button.forEach(function (btn) {
  btn.addEventListener("click", HandlerClick);
});

let a = document.querySelector(".panel_korzina");

function handlerClic() {
  a.classList.toggle("panel_korzina--active");
}

a.addEventListener("click", handlerClic);

let p = document.querySelector(".korzina_name");

/*-------------------------*/
let one = document.querySelector(".filter__one");
let two = document.querySelector(".filter__two");

let twe = document.querySelectorAll(".card");

function OnClick() {
  document.body.classList.add("list");
  twe.forEach((element) => {
    element.classList.add("popular__content--list");
  });
}

function OnClick2() {
  document.body.classList.remove("list");
  twe.forEach((element) => {
    element.classList.remove("popular__content--list");
  });
}

two.addEventListener("click", OnClick);
one.addEventListener("click", OnClick2);

/*--------------------------*/

function myFunction() {
  document.getElementById("myDrop").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
  if (!event.target.matches(".drop-btn")) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDrop = dropdowns[i];
      if (openDrop.classList.contains("show")) {
        openDrop.classList.remove("show");
      }
    }
  }
};

/*--------------------------------------------*/

var show = function (state) {
  document.getElementById("modalForm").style.display = state;
  document.getElementById("filter").style.display = state;
};

/*-----------------------------------------*/

let btn2 = document.querySelector(".btn_1");
let btn3 = document.querySelector(".btn_2");
let div2 = document.querySelector(".chet");
let chet = 1;

btn3.addEventListener("click", function () {
  ++chet;
  div2.innerText = chet;
});
btn2.addEventListener("click", function () {
  --chet;
  div2.innerText = chet;
});

/*--------------------------------------------*/

("use srtict");
let productButtons = document.querySelectorAll(".buyBtn");
productButtons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    let id = event.srcElement.dataset.id;
    let price = event.srcElement.dataset.price;
    let name = event.srcElement.dataset.name;
    let img = event.srcElement.dataset.img;
    cart.addProduct({
      id: id,
      img: img,
      price: price,
      name: name,
    });
  });
});

let cart = {
  products: {},
  /**
   * Добавляет продукт в корзину
   */
  addProduct(product) {
    this.productObject(product);
    this.renderProduct(product);
    this.productsTotalRender();
    this.productAddDeleteListeners();
    cart.productsQtyInCart();
  },
  /**
   * Обрабатывает событие кнопки удаления товара
   */
  productDeleteListener(event) {
    cart.productDelete(event);
    cart.productsTotalRender();
    cart.productsQtyInCart();
  },
  /**
   * Добавляет слушателей события на кнопки удаления
   */
  productAddDeleteListeners() {
    let delBtns = document.querySelectorAll(".productDelete");
    for (let i = 0; i < delBtns.length; i++) {
      delBtns[i].addEventListener("click", this.productDeleteListener);
    }
  },
  /**
   * Пишет сумму и количество товаров
   */
  productsTotalRender() {
    document.querySelector(".shop-price").textContent = this.productsTotal();
  },
  /**
   * Рендерит количество продуктов
   */
  productsQtyInCart() {
    let sumQtyInCart = document.querySelectorAll(".menu-shop>li").length - 1;
    document.querySelector(".clor-cart").textContent = sumQtyInCart;
  },

  /**
   * Сам продукт в объекте
   */
  productObject(product) {
    if (this.products[product.id] == undefined) {
      this.products[product.id] = {
        img: product.img,
        price: product.price,
        name: product.name,
        count: 1,
      };
    } else {
      this.products[product.id].count++;
    }
  },
  /**
   * Отрисовывает продукт в корзине
   */
  renderProduct(product) {
    let productCartExists = document.querySelector(`.productCount[data-id="${product.id}"]`);
    if (productCartExists !== null) {
      productCartExists.textContent++;
      return;
    }
    let productUnit = `
                            <li class="shop-item">
                                        <div class="shop-cart">
                                            <div class="image-shop">
                                                <img src="${product.img}" alt="">
                                            </div>
                                            <div class="next-shop">
                                                <i class="fa fa-times-circle productDelete" data-id="${product.id}"></i>
                                            </div>
                                            <div class="list-names">
                                                <a href="${product.id}">${product.name}</a>

                                            </div>
                                            <span class="price">
                                                <span class="amount">${product.price} руб/м2</span>
                                            </span>
                                            <div class="list-qty">
                                                <p>ШТУК: <span class="productCount" data-id="${product.id}">1</span></p>
                                            </div>
                                        </div></li>

                            `;
    let tbody = document.querySelector(".menu-shop");
    tbody.insertAdjacentHTML("afterbegin", productUnit);
  },
  /**
   * Считает общую сумму
   */
  productsTotal() {
    let sumTotal = 0;
    for (let ids in this.products) {
      sumTotal += this.products[ids].price * this.products[ids].count;
    }
    return sumTotal;
  },

  /**
   * Удалить из корзины и объекта продуктов
   * @param {MouseEvent} event
   */
  productDelete(event) {
    let id = event.srcElement.dataset.id;
    this.productDeleteFromObj(id);
    this.productDeleteFromCart(id);
  },
  /**
   * Удалить из корзины
   */
  productDeleteFromCart(id) {
    let productTD = document.querySelector(`.productCount[data-id="${id}"]`);
    if (productTD.textContent == 1) {
      productTD.parentNode.parentNode.parentNode.parentNode.remove();
    } else {
      productTD.textContent--;
    }
  },

  /**
   * Удалить из объекта продуктов
   */
  productDeleteFromObj(id) {
    if (this.products[id].count == 1) {
      delete this.products[id];
    } else {
      this.products[id].count--;
    }
  },
};


/*----------------------------------------------------------*/

function myFunction() {
  document.getElementById("myDropFilter").classList.toggle("showFilter");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_filter')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showFilter')) {
        openDropdown.classList.remove('showFilter');
      }
    }
  }
}