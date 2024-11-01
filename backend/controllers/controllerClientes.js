import { clienteModel } from "../models/modelClientes.js";

//Crear un registro de cliente

clienteModel.create({
  name: "Edwin",
  lastName: "Sedano",
  age: 21,
  email: "edwinaseru@gmail.com",
});

export const testClientes = () => {
  console.log("Funciona correctamente controllerClientes");
};
