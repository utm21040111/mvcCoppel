import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
});

export const productoModel = new model("Tabla Productos", productSchema);
