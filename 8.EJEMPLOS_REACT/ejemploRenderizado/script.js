//qué quiero renderizar
const h1 = document.createElement("h1");
h1.innerText = "Hola Mundo desde JS";

//dónde quiero renderizar
const mi_app = document.getElementById("mi_app");

//renderizar
mi_app.appendChild(h1);
