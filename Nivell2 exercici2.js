/*
- Exercici 2
Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.
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

const getEmpleado = id => {
    return new Promise((resolve, reject) =>{
        if(employees.find(usuario => usuario.id === id)){
            resolve('Empleado encontrado');
        }else{
            reject('Empleado no existe');
        }
    });
}; 

const getSalario = id => {
    return new Promise((resolve, reject) =>{
        if(employees.find(usuario => usuario.id === id)){
            resolve(`El salario del empleado ${id} es ${(salaries[id-1].salary)};`);
        }else{
            reject('Empleado no existe');
        }
    });
}; 

getSalario(3)
.then(res =>{
    console.log(res);
})
.catch(err =>{
    console.error(err);
});
