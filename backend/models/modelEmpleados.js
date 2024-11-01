import { generalSchema } from "./modelClientes.js";
import { model } from "mongoose";

export const empleadoModel = new model("Tabla Empleado", generalSchema);
