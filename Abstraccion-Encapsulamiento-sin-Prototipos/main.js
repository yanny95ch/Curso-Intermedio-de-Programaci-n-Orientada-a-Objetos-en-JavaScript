
const objt1 = { 
    a: 'a',
    b: 'b',
    c:{
        d:'D',
        e:'E',
    },
    editA(){
        this.a = 'AAAAA'
    }
};

function isObject(subject){
    return typeof subject == 'object';
};

function isArray(subject){
    return Array.isArray(subject);
};

function deepCopy(subject) {
    let copySubjetc;

    const subjectIsObject = isObject(subject);
    const subjectIsArray =isArray(subject);
     if (subjectIsArray) {
        copySubjetc = [];
     }else if (subjectIsObject){
        copySubjetc = {};
     }else{
        return subject;
     }


     for (key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubjetc[key]= deepCopy(subject[key]);
        }else{
            if(subjectIsArray){
                copySubjetc.push(subject[key]);
            }else{
                copySubjetc[key] = subject[key];
            }
        }
     }

    return copySubjetc;
}

//-----------------------------//-------------------------------

function  requiredParam (param){
    throw new Error(param + ' es obligatorio' )
}
//NOs permite generar alerta para agregar un parametro con argumento obligatorio
function createStudent({
name = requiredParam('name'), 
email= requiredParam('email'),
age,
twitter,
facebook,
instagram,
approvedCourses,
learingPaths,

}) {

    const private={

        '_name':name, 
    };

    const public = {
        email,
        age,
        approvedCourses,
        learingPaths,
        socialMedia:{
            twitter,
            facebook,
            instagram,
        },


        readName(){
            return private['_name'];
        },
  
        changeName(newName){
            private['_name'] = newName;
        },

    };


    return public;
}


const juan = createStudent ({
    name: 'Juanito',
    // age: 18,
    email: 'juanito@gmail.com',
    // twitter: 'fjuandc'
}); //{}


//-------------------------//--------------------------------


const  studentBase = {
    name: undefined,
     email: undefined,
     username: undefined,
     age: undefined,
     approvedCourses: undefined,
     learingPaths: undefined,
     socialMedia:{
         twitter:undefined,
         instagram: undefined,
         facebook :undefined,
     }
 }

 //const  juan = deepCopy(studentBase);

 Object.seal(juan); // SE protegen todas las propiedades de nuestro objeto para que no se puedadn  borrar 

 Object.isSealed(juan); // Nos sirve para consultar si el objeto tien todas sus propiedades con seal es decir con configurable : false

 Object.freeze(juan);// SE protegen todas las propiedades de nuestro objeto para que no se puedadn  borrar y ademas que no se puedan editar writable:false

 Object.isFrozen(juan);// writable: false  no se pueda editar  las propiedades
 
 
//  Object.defineProperty(juan, 'name',{
//     value: 'Lulito',
//     configurable:false,
 //});
//Esto es una forma mas larga de proteger las propiedades una a una 


