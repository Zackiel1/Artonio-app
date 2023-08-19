const getImg = require("../controllers/getImg");
const postUpImg = require("../controllers/postUpImg");
const path = require("path");
const fs = require("fs");
const deleteImage = require("../controllers/deleteImage");

const postUpload = async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file;
  const filename = req.file.filename;

  try {
    const upIgm = await postUpImg(name, filename, image, description, price);
    res.status(200).json(upIgm);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const searchImg = async (req, res) => {
  try {
    const images = await getImg();

    res.status(200).json(images);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteImg = async (req, res) => {
  const data = req.body;
  try {
    const delet = await deleteImage(data);

    res.status(200).json(delet);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postUpload,
  searchImg,
  deleteImg,
};
