const { Paintings } = require("../db.js");

const getImg = async () => {
  //const users = await User.findAll();
  const imgs = await Paintings.findAll();
  let ekis = [];

  imgs.map((img) => {
    //ekis.push(img.dataValues)
    let url = `http://localhost:3001/${img.dataValues.filename}`;
    img.dataValues.url = url;
  });

  return imgs;
};

module.exports = getImg;
