const { Paintings } = require("../db.js");

const patchIsFavorite = async (id) => {
  const painting = await Paintings.findByPk(id);

  if (!painting.isFavorite) {
    await Paintings.update(
      {
        isFavorite: true,
      },
      { where: { id: id } }
    );
  } else {
    await Paintings.update(
      {
        isFavorite: false,
      },
      { where: { id: id } }
    );
  }

  return "Se cambio el estado fav de la imagen";
};

module.exports = patchIsFavorite;
