a = 2;
var a;

//var a;
//a = 2;
//por el hoisting

console.log(a);

//Aqui no funciona el hoisting
console.log(a);
var a = 2;

//Por el hoisting pasa primero la creacion de la funcion y luego la asigna
nameOfDog('Simba');

function nameOfDog(name) {
    console.log(name);
}