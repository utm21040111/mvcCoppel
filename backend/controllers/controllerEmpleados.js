import { empleadoModel } from "../models/modelEmpleados.js";

//Crear un registrp de un empleado
empleadoModel.create({
  name: "Roy",
  lastName: "Sedano",
  age: 19,
  email: "royseru@gmail.com",
});

export const testEmpleados = () => {
  console.log("Funcona correctamente controllerEmpleados");
};
