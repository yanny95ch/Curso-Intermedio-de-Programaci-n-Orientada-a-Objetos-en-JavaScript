//Métodos estáticos del prototipo Object

const juan = {
    name: 'juanito',
    age: 18,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); 

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, 'PruebaNasa',{
    value: 'estraterrestres',
    writable : true,
    configurable:true,
    enumerable:true

})