import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { testClientes } from "./backend/controllers/controllerClientes.js";
import { testEmpleados } from "./backend/controllers/controllerEmpleados.js";
import { testProductos } from "./backend/controllers/controllerProductos.js";

dotenv.config();
mongoose
  .connect(process.env.urlbd)
  .then(() => {
    console.log("La conexion funciona correctamente");
  })
  .catch((error) => {
    console.log("La conexion NO funciona correctamente");
  });

const app = express();

app.use(cors());
app.listen(4000, () => {
  console.log("Funciona correctamente el servidor");
});

testClientes();
testEmpleados();
testProductos();
