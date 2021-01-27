/*
- Exercici 1
Donats els objectes employees i salaries, creu una arrow function getEmpleado 
que retorni una Promise efectuant la cerca en l'objecte pel seu id.
*/
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

var foundemployee = "";
var encontrado = ""

let getEmpleado = id => {
    return new Promise((resolve, reject) =>{
        var foundemployee = employees.filter(employees => employees.id === id);
        encontrado = foundemployee[0];
        if (typeof encontrado !== 'undefined'){
            return resolve(encontrado);
        }else{
            reject('Empleado no existe');
        }
    });
};
getEmpleado(2)
.then(res =>{
    console.log(res);
})
.catch(err =>{
    console.error(err);
}); 