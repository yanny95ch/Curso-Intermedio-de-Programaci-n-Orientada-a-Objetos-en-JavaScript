
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
    return {
        name,
        email,
        age,
        approvedCourses,
        learingPaths,
        socialMedia:{
            twitter,
            facebook,
            instagram,
        },

    };
}


const juan = createStudent ({
    name: 'Juanito',
    // age: 18,
    email: 'juanito@gmail.com',
    // twitter: 'fjuandc'
}); //{}


