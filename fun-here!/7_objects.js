/**Escribe una funcion que cambie el  nombre del estudiante o su edad*/

const student = {
    name: "Jane",
    age: 25
  };

const updateStudent = (obj,prop,value) => {
  //Modifica el código debajo de esta linea

  //Modifica el código arriba de esta linea    
    console.log(obj)
}


updateStudent(student,"name","Juan") //salida { name: 'Juan', age: 25 }
updateStudent(student,"age",28) //salida { name: 'Juan', age: 28 }

