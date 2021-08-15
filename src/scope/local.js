const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
console.log(hello);

//Variable global
var scope = 'i am global';

const functionScope = () => {
    //Dentro de esta funcion se crea otra variable
    //scope pero solo local
    var scope = 'i am just a local';
    const func = () => {
        //se retorna nuestra variable local
        return scope;
    }
    console.log(func());
};

//llamamos a nuestra funcion que retorna nuestra var global
functionScope();

//seguimos teniendo nuestra variable global con el mismo valor
console.log(scope);