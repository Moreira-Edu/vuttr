import express from "express";

export const routes = express.Router();

routes.get("/tools", (req, res) => {
  res.status(200).send({ msg: "ok" });
});
