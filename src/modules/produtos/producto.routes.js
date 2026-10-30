
import { Router } from "express";

import * as productoCtr from "./productos.controller.js";

const router = Router();
router.get("/productos", productoCtr.obtenerProductos);
router.get("/productos/:id", productoCtr.obtenerProductoid);
router.post("/productos", productoCtr.crearProducto);
router.delete("/productos/:id", productoCtr.borrarProducto);
router.put("/productos/:id", productoCtr.actualizarProducto);

export default router;
