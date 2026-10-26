//importa el creador de rotas express
//api/usario
import { Router } from "express"; 

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); //uso el metodo Router() de express para crear la ruta
//la ruta tiene dos parametros la ruta en si misma y la que lo resuelve
router.get("/usuarios", usuarioCtr.obtenerUsuarios);

export default router;
