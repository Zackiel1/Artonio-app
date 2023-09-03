require("dotenv").config();
const getImg = require("../controllers/getImg");
const postUpImg = require("../controllers/postUpImg");
const deleteImage = require("../controllers/deleteImage");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const postUpload = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    //upload img Cloudinary
    const buffer = req.file.buffer;
    const response = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        })
        .end(buffer);
    });
    const imageUrl = response.secure_url;

    //uploda url and data img in DB

    await postUpImg(name, imageUrl, description, price);

    res.status(200).json("Imagen subida");
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
