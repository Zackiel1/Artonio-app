const { Paintings } = require("../db.js");

const getImg = async () => {
  //const users = await User.findAll();
  const imgsDB = await Paintings.findAll();
  let dataImgs = [];

  const dataDB = imgsDB.map((data) => {
    dataImgs.push(data.dataValues);
  });

  return dataImgs;
};

module.exports = getImg;
