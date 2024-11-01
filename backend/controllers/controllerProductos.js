import { productoModel } from "../models/modelProductos.js";

//Crear producto

productoModel.create({
  name: "Tenis Mike",
  price: 1600,
  category: "Zapateria",
});

export const testProductos = () => {
  console.log("Funciona correctamente controllerProductos");
};
