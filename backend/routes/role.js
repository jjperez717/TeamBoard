//importamos el server y el controler
import  express  from "express";
import role from "../controllers/role.js";

const router = express.Router()

//post para registrar
//http://localhost:3002/api/role/registerRole
router.post("/registerRole", role.registerRole);

export default router;