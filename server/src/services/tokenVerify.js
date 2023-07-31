const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");

const tokenVerify = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);

  return decoded;
};

module.exports = tokenVerify;
