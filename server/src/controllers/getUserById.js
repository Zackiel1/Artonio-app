const { Users } = require("../db.js");

const getUserById = async (userId) => {
  const user = await Users.findByPk(userId);

  if (!user) throw new Error("message: id de usuario no existente");

  return user;
};

module.exports = getUserById;
