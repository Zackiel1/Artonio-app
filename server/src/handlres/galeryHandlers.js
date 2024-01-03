require("dotenv").config();
const getImg = require("../controllers/getImg");
const postUpImg = require("../controllers/postUpImg");
const deleteImage = require("../controllers/deleteImage");
const patchIsFavorite = require("../controllers/patchIsFavorite");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const postUpload = async (req, res) => {
  const { name, description, price, destination } = req.body;

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
    const nameCloud = response.public_id;

    //uploda url and data img in DB

    await postUpImg(name, nameCloud, imageUrl, description, price, destination);

    res.status(200).json({ message: "Imagen Subida" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const searchImg = async (req, res) => {
  try {
    const dataImgs = await getImg();

    res.status(200).json(dataImgs);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteImg = async (req, res) => {
  const { name_cloud } = req.headers;

  try {
    const result = await deleteImage(name_cloud);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const isFavorite = async (req, res) => {
  const { id } = req.body;

  try {
    const result = await patchIsFavorite(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("id no existe");
  }
};

module.exports = {
  postUpload,
  searchImg,
  deleteImg,
  isFavorite,
};
