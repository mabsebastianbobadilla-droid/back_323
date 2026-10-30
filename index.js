import express from "express"; //importamos la libreria
import cors from "cors";
import rutausuario from "./src/modules/usuario/usuario.routes.js";
import rutaproducto from "./src/modules/produtos/producto.routes.js";
//creamos una instancia de las libreria express en la constante app;
const app = express(); //este es el metodo constructor de la libreria;
const port = 4100; //puerto donde desplegaremos el server;

//endpoints o recursos de la api REST 

// app.use('/usuario',(req,res)=>{
//     res.send("hola mundo express");
// });

//otro endpoint 
// app.use("/usuarios/todos",(req,res)=>{
//     res.json([{
//         id:100,
//         nombre:"Lucas",
//         apellido:"Perez",
//         estaActivo:false,
//     },
//     {
//         id:200,
//         nombre:"Lumas",
//         apellido:"Soto",
//         estaActivo:true,
//     },
//     {
//         id:100,
//         nombre:"Lucas",
//         apellido:"Perez",
//         estaActivo:false,
//     }]);
// });


// app.use('/error',(req,res)=>{
//     res.status(500).send({
//         mensaje:"el recurso solicitado no existe",
//     });
// })
// Middlewares

app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());

app.use("/api", rutausuario);
app.use("/api", rutaproducto);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

