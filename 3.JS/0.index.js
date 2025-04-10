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

for (let i = 1; i <= 5; i++) {
  console.log("ciclo for", i);
  console.log(`ciclo for ${i}`);
}

//funciones
/*
con parametro y retorno
sin parametro y sin retorno
sin parametro y con retorno
*/
//funciones propias
function saludar(dato) {
  console.log("hola", dato);
}

saludar("juan");
saludar("jhon");
saludar("felipe");

let suma = function (numero1, numero2) {
  return numero1 + numero2;
};

//funciones de flecha, tambien son anonimas
let resta = (numero1, numero2) => {
  return numero1 - numero2;
};
console.log(suma(2, 3));
console.log(resta(2, 3));

(function () {
  console.log("hola");
})();

(() => {
  console.log("hola");
})();

//funciones nativas
let variable = prompt("ingrese un dato");
console.log(variable);
console.log(Math.random() * 10);
console.log(Math.round(4.6));
let saludo = "hola mundo";
console.log(saludo.toUpperCase());

//estructuras de datos
//arrays, listas, diccionarios(map), conjuntos(set), colas, pilas

//listas
let edades = [12, 34, 56, 78];
let datos = ["jhon", 45, "felipe", 48];
let personas = [
  ["jhon", 45, "jhon@gmail.com"],
  ["felipe", 78, "felipe@gmail.com"],
];
console.log(edades); //muestra toda la lista
console.log(datos);
console.log(personas[1][2]);

//map
//recorre un alista y genera una nueva lista
edades;
edadesAux = edades.map((edad) => edad + 1);
//reduce - reduce una expresion de una lista
let promedio =
  edades.reduce((acumulador, edad) => {
    return acumulador + edad;
  }, 0) / edades.length;
promedio;
let contador = 0;
for (let i = 0; i < edades.length; i++) {
  contador = contador + edades[i];
}
contador / 5;

//foreach> recorrer una lista
edades.forEach((edad) => {
  console.log("edad->", edad);
});
for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]);
}
//listas
let edades = [12, 34, 34, 56, 78, 12];
edades.length;
//buscar datos find, filter
//find - busca un elemento que cumpla con una condicion
let filtroEdad = edades.find((edad) => edad == 34);
filtroEdad;

//filter->filtra una lista y devuelve una nueva lista
let filtroEdad2 = edades.filter((edad) => edad > 18);
filtroEdad2;

//listas
let edades = [12, 34, 34, 56, 78, 12, 78];
edades.length;

let edadMayor = Math.max(...edades);
edadMayor;
//buscar datos find, filter
//find - busca un elemento que cumpla con una condicion
let filtroEdad = edades.find((edad) => edad == 34);
filtroEdad;

//filter->filtra una lista y devuelve una nueva lista
let filtroEdad2 = edades.filter((edad) => edad > 18);
filtroEdad2;

let elMayor = edades.filter((edad) => edad === edadMayor);
elMayor;

//OBJETOS - ABSTRACCION(REPRESENTACION DE UNA REALIDAD) CONTEXTO

//PERSONA - USUARIO - {CORREO, NOMBRE, APELLIDO, NOMBRE USUARIO}
//PERSONA - {CEDULA, NOMBRE, APELLIDO, NACIONALIDAD, EDAD, PROFESION}

//crear un objeto
let estudiante1 = {
  correo: "jhon@gmail.com",
  nombre: "jhon",
  apellido: "mendez",
};
let estudiante2 = {
  correo: "fellipe@gmail.com",
  nombre: "felipe",
  apellido: "ramirez",
};
let estudiante3 = {
  correo: "maria@gmail.com",
  nombre: "maria",
  apellido: "ramirez",
};
//lista de objetos
let estudiantes = [estudiante1, estudiante2];
estudiantes.push(estudiante3);
estudiantes.pop();
estudiantes.pop();
estudiantes.shift();
estudiantes;
//lista de listas
let personas = [["jhon", 12], "felipe", 45];

//leer un atributo de un objeto en una lista
estudiantes[1].correo;
//leer un elemento dentro de otro elemento de lista
personas[0][0];
