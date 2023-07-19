const { Users } = require("../db.js");
const generateToken = require("../services/generateToken.js");

const userLogin = async (email, password) => {
  const user = await Users.findOne({
    where: { email: email, password: password },
  });

  if (!user) throw new Error("message: email o password incorrectas");

  const token = generateToken(user);

  return token;
};

module.exports = userLogin;
