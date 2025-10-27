import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import Usuario from "./models/Usuario.js";

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "Backend funcionando" });
});

// Sincronizar base de datos
sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
});

export default app;
