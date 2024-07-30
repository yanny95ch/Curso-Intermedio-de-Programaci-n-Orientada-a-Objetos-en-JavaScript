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