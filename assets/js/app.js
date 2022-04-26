const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener("DOMContentLoaded", () => {
  fechData();
});

cards.addEventListener("click", (e) => {
  addCarrito(e);
});

const fechData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    // console.log(data);
    pintarCard(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (data) => {
  data.forEach((producto) => {
    templateCard.querySelector("h2").textContent = producto.title;
    templateCard.querySelector("span").textContent = producto.precio;
    templateCard.querySelector("p").textContent = producto.stock;
    templateCard
      .querySelector("img")
      .setAttribute("src", producto.thumbnailUrl);
    templateCard.querySelector("button").dataset.id = producto.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const addCarrito = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.classList.contains("btn-add"));

  if (e.target.classList.contains("btn-add")) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  //   console.log(objeto);
  const producto = {
    id: objeto.querySelector(".btn-add").dataset.id,
    title: objeto.querySelector("h2").textContent,
    precio: objeto.querySelector("span").textContent,
    stock: objeto.querySelector("p").textContent,
    cantidad: 1,
  };

  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  carrito[producto.id] = { ...producto };
  pintarCarrito();
};

const pintarCarrito = () => {
  // console.log(carrito);
  items.innerHTML = "";
  Object.values(carrito).forEach((producto) => {
    templateCarrito
      .querySelector("img")
      .setAttribute("src", producto.thumbnailUrl);
    templateCarrito.querySelector("h3").textContent = producto.title;
    templateCarrito.querySelector("p").textContent = producto.stock;
    templateCarrito.querySelector("span").textContent = producto.precio;
    templateCarrito.querySelector(".btn-add").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-remove").dataset.id = producto.id;
    templateCarrito.querySelector(".subtotal").textContent =
      producto.cantidad * producto.precio;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};
