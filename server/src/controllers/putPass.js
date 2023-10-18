const { Users } = require("../db.js");

const putPass = async (userId, newPassword) => {
  console.log(userId, newPassword);
  await Users.update({ password: newPassword }, { where: { id: userId } });

  return "contraseña actualizada";
};

module.exports = putPass;
