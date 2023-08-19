const { Paintings } = require("../db.js");
const fs = require("fs");
const path = require("path");

const deleteImage = async (data) => {
  //console.log(data.data);
  let deleted = await Paintings.destroy({
    where: {
      filename: data.data,
    },
  });

  if (deleted === 1) {
    fs.unlinkSync(path.join(__dirname, "../images", data.data));
    return "se elimino la imagen";
  }

  throw new Error("No se encontro dicha imagen");
};

module.exports = deleteImage;
