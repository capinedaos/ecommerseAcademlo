const titleShowAll = document.getElementById("titleShowAll");
const titleHoodies = document.getElementById("titleHoodies");
const titleShirts = document.getElementById("titleShirts");
const titleSweatshirts = document.getElementById("titleSweatshirts");
const targetHoodies = document.getElementById("targetHoodies");
const targetShirts = document.getElementById("targetShirts");
const targetSweatshirts = document.getElementById("targetSweatshirts");

//getElementsByTagName / busca por etiqueta
//getElementsByClassName / busca por clase
//getElementById / busca por id
//querySelector / busca por combinaciones de etiquetas con clases la primera coindidencia
// querySelector ("div.button")
//querySelectorAll / busca por combinaciones de etiquetas con clases todas las coindidencias

titleShowAll.addEventListener("click", () => {
  targetHoodies.classList.remove("ocultar");
  targetShirts.classList.remove("ocultar");
  targetSweatshirts.classList.remove("ocultar");
});

titleHoodies.addEventListener("click", () => {
  targetShirts.classList.add("ocultar");
  targetSweatshirts.classList.add("ocultar");
});

titleShirts.addEventListener("click", () => {
  targetHoodies.classList.add("ocultar");
  targetSweatshirts.classList.add("ocultar");
});

titleSweatshirts.addEventListener("click", () => {
  targetHoodies.classList.add("ocultar");
  targetShirts.classList.add("ocultar");
});

