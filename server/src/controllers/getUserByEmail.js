const { Users } = require("../db.js");

const getUserByEmail = async (data) => {

  const email = data.toLowerCase();

  const user = await Users.findOne({ where: { email: email } });

  if (!user) throw new Error("message: email de usuario no existente");

  return user;
};

module.exports = getUserByEmail;
