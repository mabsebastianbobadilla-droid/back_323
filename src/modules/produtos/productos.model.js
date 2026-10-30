import db from "../../config/db_conexion.js";

export const ProductoModel = {
  ListarTodos: async () => {
    const sql = "SELECT * FROM producto ORDER BY descripcion";
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM producto WHERE id_producto=? OR codigo=?";
    const [rows] = await db.query(sql, [id, id]);
    return rows;
  },

  delete: async (id) => {
    const sql = "DELETE FROM producto WHERE id_producto=? OR codigo=?";
    const [rows] = await db.query(sql, [id, id]);
    return rows;
  },

  create: async (data) => {
    console.log(data);
    const sql = "INSERT INTO producto SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  update: async (id, data) => {
    const sql = "UPDATE producto SET ? WHERE id_producto = ? OR codigo = ?";
    const [rows] = await db.query(sql, [data, id, id]);
    return rows;
  },
};
