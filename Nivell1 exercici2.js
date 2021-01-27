/*
- Exercici 2
Crear una arrow function que, rebent un paràmetre i una function callback, 
li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.
*/

const afirmacio = (num,cb) =>{
    if (num >= 5){
        cb(`El numero ${num} no es menor que 5`);
    } else {
        cb(`El numero ${num} es menor que 5`);
    }
}

afirmacio(4,console.log);