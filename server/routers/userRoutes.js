import express from "express";
const router = express.Router();

import UserController from "../controllers/UserController.js";

router.get("/", (req, res) => {
  res.send("Kullanici endpoint'i calisti!");
});

router.post("/create", UserController.createUser);

router.post("/delete/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Kullanici silme endpoint'i calisti! Gelen kullanici id: ${userId}`);
});

export default router;
