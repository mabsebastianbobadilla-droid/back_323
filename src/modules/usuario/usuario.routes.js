//importa el creador de rotas express
//api/usario
import { Router } from "express"; 

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); //uso el metodo Router() de express para crear la ruta
//la ruta tiene dos parametros la ruta en si misma y la que lo resuelve
router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuariosid);
router.post("/usuarios", usuarioCtr.crearUsuario);
router.delete("/usuarios/:id", usuarioCtr.borrarUsuario);
router.put("/usuarios/:id", usuarioCtr.actualizarUsuario);

export default router;

