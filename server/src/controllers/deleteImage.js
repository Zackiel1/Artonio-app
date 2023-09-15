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

// cloudinary.v2.api
//   .delete_resources(['zot3sh3dasptcebua3lh', 'oibigvyqtyb3bozhq3gr', 'ftzq2gvxtabloy7gy754', 'ruuwrfwgi7tib7iurcxp'],
//     { type: 'upload', resource_type: 'image' })
//   .then(console.log);
