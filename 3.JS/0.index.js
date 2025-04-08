//lenguaje de programcion> javascript(frontend) javascript(backend)->nodejs
//JAVASCRIPT
//1.Tipado datos: dinamico / estatico R=dinamico
//2.Cómo se ejecuta el lenguaje: interpretados / compilados R=interpretado
//3. qué paradigma sigue el lenguaje: procedimentales / objetos / eventos //multiparadigma R= multiparadigma

//variables, condicionales, ciclos, funciones, estructuras de datos, objetos
//APIs DOM, FETCH
//literales
console.log(2 + 2);
console.log("2+2");
console.log("hola mundo");
console.log("2" + "2");
console.log("2" + 2);
console.log(2 + "2");
console.log(2 + true);
console.log(2 + false);
console.log(false + false);
console.log(2 * "*");

//declaracion variables
let nombre = "juan"; //variables locales
var apellido = "perez"; //variables globales
const edad = 30; //constantes, no cambian el valor
console.log(edad);

//tipos variables: enteros, flotantes, boleanos, cadenas, referencia
//enteros
//debugger; //DEPURAR CODIGO JS
let numero = 10;
//flotante
let numero2 = 10.5;
//boleano
let sesionUsuario = true;
let sesionUsuario2 = false;
//cadenas
let nombreUsuario = "juan"; //SON INMUTABLES

//CONDICIONALES
let edadPersona = 18;
console.log(edadPersona > 18);
console.log(edadPersona < 18);
console.log(edadPersona == 18);
console.log(edadPersona != 18);

let numero1 = 1;
let numero3 = "1";
console.log(numero1 == numero3);
console.log(numero1 === numero3);

if (numero1 === numero3) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}

let sesion = false;

if (sesion == true) {
  alert("sesion iniciada");
  console.log("sesion iniciada");
} else {
  alert("sesion no iniciada");
  console.log("sesion no iniciada");
}

//operador ternario ?
//sesion ? alert("sesion iniciada") : alert("sesion no iniciada");

let nombreEstudiante = "juan";

nombreEstudiante == "gabriel"
  ? console.log("hola juan")
  : console.log("no eres juan");

if (nombreEstudiante == "juan") {
  console.log("hola juan");
} else {
  console.log("no eres juan");
}

//ciclos while, for
//tres elementos de un ciclo: inicio, condicion, incremento
//contar del 1 al 5
let inicio = 1;
while (inicio <= 5) {
  console.log(inicio);
  inicio = inicio + 1;
}
