const { Users } = require("../db.js");
const generateToken = require("../services/generateToken.js");

const userLogin = async (email, password) => {
  const user = await Users.findOne({
    where: { email: email, password: password },
  });

  if (!user) throw new Error("email o password incorrectas");

  //const userForToken =
  const token = generateToken(user);

  const userInfo = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    discount: user.discount,
    isAdmin: user.isAdmin,
    is_verified: user.is_verified,
    token: token,
  };

  return userInfo;
};

module.exports = userLogin;
