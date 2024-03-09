const { Users } = require("../db.js");
const bcrypt = require('bcryptjs');

const putPass = async (userId, newPassword) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await Users.update({ password: hashedPassword }, { where: { id: userId } });

  return "contraseña actualizada";
};

module.exports = putPass;
