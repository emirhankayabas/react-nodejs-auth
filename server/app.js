import express from "express";
import connectToDatabase from "./config/db.js";
import cors from "cors";

// routes
import userRoutes from "./routers/userRoutes.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
connectToDatabase();

app.get("/", (req, res) => {
  res.send("Merhaba, Dünya!");
});

app.use("/api/users", userRoutes);

app.listen(port, console.log(`http://localhost:${port} adresinde calisiyor!`));