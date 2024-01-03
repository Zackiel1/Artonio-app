const { Router } = require("express");
const {
  postUpload,
  searchImg,
  deleteImg,
  isFavorite,
} = require("../handlres/galeryHandlers");
const fileUpload = require("../services/configMulter");

const galeryRouter = Router();

galeryRouter.post("/upload", fileUpload, postUpload);
//galeryRouter.post("/upload", postUpload);
galeryRouter.get("/searchImg", searchImg);
galeryRouter.delete("/deleteImg", deleteImg);
galeryRouter.patch("/isFavorite", isFavorite);

module.exports = galeryRouter;
