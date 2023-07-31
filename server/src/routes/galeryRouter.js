const { Router } = require("express");
const postUpImg = require("../controllers/postUpImg");

const galeryRouter = Router();

galeryRouter.post("/upImg", postUpImg);

module.exports = galeryRouter;
