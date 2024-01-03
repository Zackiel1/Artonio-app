const { Paintings } = require("../db.js");
const axios = require("axios");
const cloudinary = require("cloudinary").v2;

const deleteImage = async (data) => {
  //delete DB
  let deleted = await Paintings.destroy({
    where: {
      nameCloud: data,
    },
  });

  if (deleted === 0) throw Error("Imagen no existe");

  //delete Cloudinary
  const response = await cloudinary.uploader.destroy([data], {
    invalidate: true,
    resource_type: "image",
  });

  if (response.result === "not fount") throw Error("Imagen no existe");

  return `Imagen eliminada`;
};

module.exports = deleteImage;

// cloudinary.v2.api
//   .delete_resources(['zot3sh3dasptcebua3lh', 'oibigvyqtyb3bozhq3gr', 'ftzq2gvxtabloy7gy754', 'ruuwrfwgi7tib7iurcxp'],
//     { type: 'upload', resource_type: 'image' })
//   .then(console.log);

//console.log(data.data);
// let deleted = await Paintings.destroy({
//   where: {
//     nameCloud: data.data,
//   },
// });

// if (deleted === 1) {
//   fs.unlinkSync(path.join(__dirname, "../images", data.data));
//   return "se elimino la imagen";
// }

// throw new Error("No se encontro dicha imagen");

// cloudinary.v2.api
//   .delete_resources([`${data}`], { type: "upload", resource_type: "image" })
//   .then(console.log);

//https://api.cloudinary.com/v1_1/{{cloud_name}}/:resource_type/destroy
