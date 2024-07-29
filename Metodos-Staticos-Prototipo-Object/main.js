//Métodos estáticos del prototipo Object

const juan = {
    name: 'juanito',
    age: 18,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};
//  console.log(Object.keys(juan));
//  console.log(Object.getOwnPropertyNames(juan));
//  console.log(Object.entries(juan)); 
//---------------------------------------//-----------------------------


//Object.defineProperty : 

Object.defineProperty(juan, 'navigator',{
    value: 'Chrome',
    writable : true,
    configurable:true,
    enumerable:false
//enumerable: La propiedad no aparesca  con keys pero si con  getOwnPropertyNames
})
Object.defineProperty(juan, 'editor',{
    value: 'vscode',
    writable : false,
    configurable:true,
    enumerable:true
//writable:  La propiedad aparece con keys y con getOwnPropertyNames pero no se puede editar, pero si se puede borrar 
})

Object.defineProperty(juan, 'terminal',{
    value: 'WSL',
    writable : true,
    configurable:false,
    enumerable:true
//  configurable: La propiedad aparece con keys y con getOwnPropertyNames, la podemos editar pero no se puede borrar 
})
Object.defineProperty(juan, 'PuebaNAsa',{
    value: 'extraterrestres',
    writable : false,
    configurable:false,
    enumerable:false
//todas las propiedades en false: no se puede borrar  , no se puede editar , La propiedad no aparesca  con keys pero si con  getOwnPropertyNames
})


// Object.seal(juan); //Evita que las propiedades se puedan borrar: es decir  que la pripoedad configurable: false
Object.freeze(juan); //configurable: false  y  writable : false todas las propiedades ya se no se pueadn borrar o sobreescribir el dato,

console.log(Object.getOwnPropertyDescriptors(juan));