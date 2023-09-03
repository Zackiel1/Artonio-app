const { Paintings } = require("../db.js");

const postUpImg = async (name, imageUrl, description, price) => {
  const upImg = await Paintings.create({
    name: name,
    imageUrl: imageUrl,
    description: description,
    price: price,
  });
  return upImg;
};

module.exports = postUpImg;
