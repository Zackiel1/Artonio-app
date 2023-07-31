const { Paintings } = require("../db.js");

const postUpImg = async (req, res) => {
  const { name, image, description, price } = req.body;

  const ekis = await Paintings.create({ name, image, description, price });
  console.log(ekis);
};

module.exports = postUpImg;
