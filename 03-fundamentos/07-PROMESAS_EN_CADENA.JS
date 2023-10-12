const empleados = [
    {
        id: 1, nombre: 'William'
    },
    {
        id: 2,
        nombre: 'Denis'
    },
    {
        id: 3,
        nombre: 'Fernando'
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



const getEmpleado_version_uno = (id) => { 
    const empleado = empleados.find(e => e.id === id)?.nombre;

    const promesa = new Promise( ( resolve, reject ) => {

        if (empleado){
            resolve(empleado);
        }else{
            reject(`No existe empleado con id ${ id }`);
        }
    });

//--------------------- Mejorando el codigo -----------------------------------
//Version dos - mejorando el codigo de la promesa

const getEmpleado_version_dos = (id) => {
    return new Promise( ( resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${ id }`);
    });
}

/// ---------------
getEmpleado_version_dos(id)
.then( empleado => console.log(empleado, 'version 2'))
.catch( err => console.log(err));


//-----------------------------------------------------------------
const getSalario_version_uno = (id) => {

    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
    
        ( salario )
        ?resolve(empleado)
        :reject(`No existe el salario del empleado con el id ${ id }`);
    })
}

//--------------------------------------------------
//---------------------------------
getSalario_version_uno(id)
.then( salario => console.log(salario, 'version 2'))
.catch( err => console.log(err));

//---------------------
//-----------------
id = 5;
getEmpleado_version_dos(id)
.then(empleado => {
    getSalario_version_uno(id)
    .then( salario => {
        console.log('El empleado: ', empleado, 'tiene un salario de: ', salario, 'Union version 1');
    })
    .catch(err => console.log(err, 'Union version 1'))

})
.catch(err => console.log(err, 'Union version 1'))
}