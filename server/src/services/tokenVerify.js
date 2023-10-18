const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");

const tokenVerify = (token) => {
  const secret = process.env.JWT_SECRET;

  const verify = jwt.verify(token, secret)
  
  return verify;
};

module.exports = tokenVerify;
