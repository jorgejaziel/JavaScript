//Variables globales

var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
const helloWorld = 'Hello World!';

//Accedo a ellas en otra funcion

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Mala practica pero funciona

const helloWorld = () => {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

//Mala practica

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}

anotherFunction()
console.log(globalVar);