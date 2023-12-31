const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const secret = process.env.JWT_SECRET;
  const payload = {
    userId: user.id,
    isAdmin: user.isAdmin,
  };

  const options = {
    expiresIn: "24h",
  };

  let token = jwt.sign(payload, secret, options);

  return token;
};

module.exports = generateToken;
