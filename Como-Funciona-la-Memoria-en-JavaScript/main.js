const juanita = {
    age : 15,
    email: 'juanita@gmail.com'
}

const nath = juanita;
console.log({juanita,nath})
//Al modificar la informacion de  un de los 2 cambia toda la informacion y seguira siendo igual
nath.email = 'nath@nath.com';
nath.age = 18;
console.log({juanita,nath})

//----------------------------//---------------------------------
 
const objt1 = { 
    a: 'a',
    b: 'b',
    c:{
        d:'D',
        e:'E',
    },
};

/*const objt2 = {};
    for (prop in objt1){ 
        objt2[prop] = objt1[prop];

    } 
 Si modificamos en la consola del navegador los valores de las propiedades van a mantenerse diferentes en cada  Objeto, mientas no contenga Objetos dento de Objetos, en ese caso seran iguales, en el ejemplo el objeto C */

const stringifiedComplexObjt = JSON.stringify(objt1);

//JSON.stringify => Metodo estatico de prototipo Json, que nos permite convertir objetos en un string

const objt2 = JSON.parse(stringifiedComplexObjt);
// JSON.parse( = > caso contrario con este pasamos de String a objetos
// 




