const { Paintings } = require("../db.js");

const postUpImg = async (name, filename, image, description, price) => {
  const upImg = await Paintings.create({
    name: name,
    filename: filename,
    image: image,
    description: description,
    price: price,
  });
  return upImg;
};

module.exports = postUpImg;
