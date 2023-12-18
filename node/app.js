import express from "express";
import cors from "cors";

// importamos conexion a la db
import db from "./database/db.js";

// importamos el enrutador
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexion exitosa a la DB");
} catch (error) {
  console.log("El error conectando a la BD es " + error);
}

// app.get("/", (req, res) => {
//   res.send("HOLA MUNDO");
// });

app.listen(8000, () => {
  console.log("SV UP");
});
