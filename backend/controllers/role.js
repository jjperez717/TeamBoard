//importamos model ya que para alla enviaremos la informacion
import role from "../models/role.js";

//registraremos el rol el req es el que recibe y el res es el que manda o responde
const registerRole = async (req, res) => {
  //dentro del request o req hay un body que es el archivo json  con el simbolo ! negamos asi no usamos el else
  //esto solo es para los campos obligatorios
  if (!req.body.name || !req.body.description)
    //se utiliza 400 cuando hay un error el .send envia el mensaje
    //el return indica que hasta ahi llega el proceso
    return res.status(400).send("Incomplete data");
  //aqui busca en mongo si encuentra ese name ya registrado se vuelve true existingRole
  const existingRole = await role.findOne({ name: req.body.name });
  //si existingRole es true entonces retorna el error de que ya esta registrado ese name
  if (existingRole) return res.status(400).send("The role already exist");

  const roleSchema = new role({
    //aqui le voy a mandar el name
    name: req.body.name,
    //aqui le voy a mandar el description
    description: req.body.description,
    dbStatus: true,
  });
  //aqui guardamos la informacion
  const result = await roleSchema.save();
  //si esto no funciona muestra este mensaje
  if (!result) return res.status(400).sed("Failed to register role");
  //mostramos el result
  return res.status(200).send({result});
};
//cuando es una funcion lo exportamos con las llaves{}
export default {registerRole};