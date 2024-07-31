//La recursividad en JavaScript es un concepto fundamental que se refiere a la capacidad de una función para llamarse a sí misma

/*
function recursiva(){
    if (Validacion) {
        llamados recursivos
    }else{
        llamados normales sin recursividad
    }
} 
 */

const numeritos = [0,1,2,3,4,5,3,5,54,51,321454,54,32,2,5,56,54,1,21,78,];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index];
    console.log({index, numerito});
    
}

function recursiva (numbersArray){
    if(numbersArray.length !== 0 ){
        const firstNumb = numbersArray[0];
        console.log(firstNumb);
        numbersArray.shift();
        return recursiva(numbersArray)
    }else{

    }
}


//--------------------------------//--------------------------------

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
