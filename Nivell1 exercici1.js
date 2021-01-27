/*
- Exercici 1
Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.
*/

function miPromesa (Entradacomprada) {
    return new Promise((resolve, reject) =>{
        if(Entradacomprada === true){
            resolve('Entra y disfruta del espectaulo');
        }else{
            reject('Dirijase a las taquillas y haga la cola');
        }
    });
}; 

miPromesa(false)
.then(res =>{
    console.log('Genial! '+ res);
})
.catch(err =>{
    console.error(err);
});  