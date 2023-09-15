const { Paintings } = require("../db.js");

const postUpImg = async (
  name,
  nameCloud,
  imageUrl,
  description,
  price,
  destination
) => {
  const upImg = await Paintings.create({
    name: name,
    nameCloud: nameCloud,
    imageUrl: imageUrl,
    description: description,
    price: price,
    destination: destination,
  });
  return upImg;
};

module.exports = postUpImg;
