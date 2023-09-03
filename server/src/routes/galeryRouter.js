const { Router } = require("express");
const {
  postUpload,
  searchImg,
  deleteImg,
} = require("../handlres/galeryHandlers");
const fileUpload = require("../services/configMulter");

const galeryRouter = Router();

galeryRouter.post("/upload", fileUpload, postUpload);
//galeryRouter.post("/upload", postUpload);
galeryRouter.get("/searchImg", searchImg);
galeryRouter.delete("/deleteImg", deleteImg);

module.exports = galeryRouter;
