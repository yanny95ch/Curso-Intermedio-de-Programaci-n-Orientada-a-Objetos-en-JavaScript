function deepFreeze(obj) {
  
    if (obj && typeof obj === 'object') {
     
      Object.freeze(obj);
      
     
      Object.keys(obj).forEach(key => {
         deepFreeze(obj[key]);
      });
    }
    
    return obj; 
  }
  
  
  const juan = {
    name: "Juanito",
    approvedCourses: ["Curso 1", "Curso 2"],
    caracteristicas: {
      age: 18,
      colorCabello: 'Negro',
      gustos: {
        musica: ['rock', 'punk', 'ska'],
        peliculas: ['drama', 'horros', 'comedia'],
      },
    },
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };
  
  
  deepFreeze(juan);
  
  
  juan.name = "Juanito Modificado"; // No tendrá efecto
  juan.approvedCourses.push("Curso 3"); // No tendrá efecto
  juan.caracteristicas.age = 20; // No tendrá efecto
  
  console.log(juan);