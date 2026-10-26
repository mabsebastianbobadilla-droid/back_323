import { UserModel } from "./usuario.model.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const results = await UserModel.ListarTodos();
    res.json({ results });//serealiza la respuesta en json
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al listar : ${error}`,
    });
  }
};

export const obtenerUsuariosid = async (req, res) => {
  // codigo protegido con try..catch
  try {
    const id = req.params.id || req.params.id_usuario;
    const results = await UserModel.findById(id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar : ${error}`,
    });
  }
};

export const getUserById = obtenerUsuariosid;
