const empleados = [
    {
        id: 1, 
        nombre: 'William'
    },
    {
        id: 2,
        nombre: 'Chiroy'
    },
    {
        id: 3,
        nombre: 'Mendez'
    },
];

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2, 
        salario: 1500
    },
];

//-----------------------------------------------------------------------
//Primera version de una funcion que em busque un emp´leado por su codigo
const getEmpleado_version_uno = (id) => {

    //find sirve para buscar dentro de un objet, e es un empleado
    const empleado = empleados.find(e => e.id === id )
    return empleado;
}

console.log('----Uso de funcion simple para buscar empleado version 1----');
console.log(getEmpleado_version_uno(1));
console.log(getEmpleado_version_uno(2));
console.log(getEmpleado_version_uno(5)); //devuelve un error undefined

//-----------------------------------------------------------------------
//Segunda version de la funcion con validacion de error si no hay 
//Codigo de emplado
const getEmpleado_version_dos = (id) => {

    //find sirve para buscar dentro de un objet, e es un empleado
    const empleado = empleados.find(e => e.id === id )
    
    if (empleado){

        return empleado;
    }else {
        return `Empleado con id ${id} no existe`;
    }
}

console.log('----Uso de funcion simple para buscar empleado version 2----');
console.log(getEmpleado_version_uno(1));
console.log(getEmpleado_version_uno(2));
console.log(getEmpleado_version_uno(5)); //devuelve un error undefined

//-----------------------------------------------------------------------
//Tercera version hacer una funcion con callback para que imprima
//Fuera de la funcion
const getEmpleado_version_tres = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id )?.nombre
    // const empleado = empleados.find(e.id === id)?.nombre
    
    if (empleado){
        callback(null, empleado);
        //El null como argumento es una constumbre para decir que no hay ningun error
        //Para que no se ejecute siempre el mensaje de ERRor!
    }else {
       callback(`Empleado con id ${id} no existe`);
    }
}

//Forma comun de trabajar con callbacks
//Hay otros que ya estan trabajando con PROMESAS Y OBSERVABLES mas eficientes
console.log('-----Uso de funcion con callback para buscar empleado version 3 -----');
getEmpleado_version_tres(3, (err, empleado) => {

    if(err){
        console.log('ERROR');
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado);
})

getEmpleado_version_tres(5, (err, empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado);
})

//--------------------------------------------------------
const id = 1;
const id2 = 2;
const id3 = 5

console.log('-----Funcion callback version uno para salario----');
const getSalario_version_uno = (id, callback) => {
    const salario = salarios.find( s => s.id === id)?.salario

    if( salario ){
        callback(null, salario);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }
}
    
getSalario_version_uno(id, (err, salario) => {
    if(err){
        console.log('ERROR');
        return console.log(err);
    }
    console.log('Empleado existe y el salario');
    console.log(salario);
})

getSalario_version_uno(id3, (err, salario) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe y el salario');
    console.log(salario);
})

//--------------------------------------------------
//Como deberia funcionar el empleado y el salario unidos de
//forma rudimentaria seria asi
console.log('-------Uniendo el Empleado y el salario - version 1 ---------');
console.log(`Obteniendo el empleado y el salario del id ${id}`);
getEmpleado_version_tres(id, (err, empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado);
})

getSalario_version_uno(id, (err, salario) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe y el salario');
    console.log(salario);
})

//-----------------------------------------------------------------------
console.log('-----------Uniendo el Emlpeado y el salario - version 2 ----');
console.log(`Obteniendo el empleado y el salario del id ${id}`);
getEmpleado_version_tres(id, (err, empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    //console.log(Émpleado existe');
    console.log(empleado);//me devuelve solo el nombre del empleado
})

getSalario_version_uno(id, (err, salario) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    //console.log('Empleado existe y el salario')
    console.log(salario); //me devuelve solo el salario del empleado
})

//--------------------------------------------------------------
//------------------------Mejorando getSalario--------------------------------
const getSalario_version_dos = (id, callback) => {


    const salario = salarios.find(s => s.id === id)?.salario;

    if( salario){
        callback(null, salario);
    }else {
        callback(`Empleado con id ${id} no existe`);
    }
}

//-------------------------------------------------------------------------------
console.log('------------------Uniendo el Empleado y el salario -version 3 -------');
console.log(`Obteniendo el empleado y el salario del id ${id}`);
getEmpleado_version_tres(id, (err, empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log(empleado);
})

getSalario_version_dos(id, (err, salario) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log(salario);
})

getEmpleado_version_tres(id3, (err, empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log(empleado.nombre);
})

getSalario_version_dos(id3, (err, salario) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log(salario);
})

//--------------------------------------------------------------------
console.log('-----------Uniendo el empleado y el salario - version 4 - callback hell-----------');

getEmpleado_version_tres(id3, (err, empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario_version_dos(id3, (err, salario) => {
        
        if(err){
            console.log('ERROR!');
            return console.log(err);
        }

        console.log('El empleado: ', empleado , 'tiene un salario de: ' , salario);
    })
})
