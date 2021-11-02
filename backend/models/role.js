//importamos mongoose
import  mongoose  from "mongoose";
//aqui creamos la estructura de la coleccion
const roleSchema = new mongoose.Schema(
{
    name: String,
    description: String,
    registerDate: { type: Date, default: Date.now },
    dbStatus: Boolean,
}
);
//aqui lo mandamos a guardar la coleccion  que se llamara roles
const role = mongoose.model("roles", roleSchema);

//exportamos sin llaves porque no es funcion
export default role;