//node: entorno de ejecucion de js
//modulos: propios, nativos, terceros
//tipo de ejecución de un modulo: ECMA MODULES(>2015 js), COMMONJS(<2015 js)

//commonjs
//const { suma, resta } = require("./0.operaciones");
//console.log(suma(2, 3));

//ecma modules
import User from "./0.User.js";
import { suma, resta, saludo } from "./0.operaciones.js";
let usuario = new User("Jhon", "jhon@gmail.com");
console.log(usuario.mostrarDatos());
console.log(suma(2, 3));
console.log(resta(2, 3));

console.log(usuario.email);
console.log(usuario.name);

//destructuring
const { name, email } = usuario;
console.log(name);
console.log(email);
saludo("Jhon");
