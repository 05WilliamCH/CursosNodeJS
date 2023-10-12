//Explicacion co CallBacks
setTimeout(function(){ 
    console.log('Hola Mundo desde una funcion normal anonima'); 
} ,3000)

setTimeout(() => { 
    console.log('Hola Mundo desde una fucion flecha'); 
} ,3000)

//El problema de esta funcion es que ejecuta todo en la funcion 
//Por ejemplo el control de despliegue del tiempo del mensaje deberia ser 
//fuera dela funcion.


const getUsusuarioById = (id) => {
    const usuario = {
        id, 
        nombre: 'William'
    }

setTimeout( () => {
    console.log(usuario); 
    }, 1500)
}


getUsusuarioById(82);

//Aca no se esta enviando como argunmento otra funcion pero no se 
//esta ejecutando 
getUsusuarioById(200, () => {
    console.log('hola mundo desde getUsuarioByID');
})

//Aplicando callback
const getUsusuarioById2 = (id, callback) => { 
    const user = {
        id,
        nombre: 'William'
    }
    
    setTimeout( () => { 
        callback(user);
    }, 1500)
}
 
getUsusuarioById2 (700, () => { 
    console.log('hola mundo desde getUsuarioByID2'); 
})

//agregando como argumento el usuario
getUsusuarioById2 (650, (usuario) => {
    console.log('hola mundo desde getUsuarioByID2');
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})
