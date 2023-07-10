const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const secret = process.env.JWT_SECRET;
  const payload = {
    userId: user.id,
  };

  const options = {
    expiresIn: "24h",
  };

  return jwt.sign(payload, secret, options);
};
module.exports = generateToken;
