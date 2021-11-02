//libreria que nos hara un server
import express from "express";
//libreria se encarga de las reglas de conexion para saber si es de verdad para permitirlas entrar
import cors from "cors";
//libreria que nos trae la conexion a la base de datos
import db from "./db/db.js";
//libreria que nos permite conocer las variables de entorno
import dotenv from "dotenv";
//ruta para traer role
import role from  "./routes/role.js";

//esta linea cuando se ejecute el servidor nos inicializa las variable
dotenv.config();
//aqui ya nuestro backend  app es un servidor
const app = express();
//aqui estamos diciendo que solo vamos a recibir archivos json
app.use(express.json());
//aqui ya estamos usando las reglas de coneccion
app.use(cors());

// esta es toda la ruta que sefuimos http://localhost:3002/api/role/registerRole
app.use("/api/role", role);
//aqui estamos conectandonos al puerto que declaramos en .env y imprimimos a que puerto estamos conectados
app.listen(process.env.PORT, () =>{
  console.log("Backend server running on port: " + process.env.PORT)
});

//aqui ya nos conectamos a la base de datos
db.dbConnection();
