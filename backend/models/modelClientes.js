import { Schema, model } from "mongoose";

export const generalSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: String,
  },
  email: {
    type: String,
  },
});

export const clienteModel = new model("Tabla Clientes", generalSchema);
