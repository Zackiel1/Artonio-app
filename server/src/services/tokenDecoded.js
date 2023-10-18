const jwt = require("jsonwebtoken");

const tokenDecoded = (token) => {
    const secret = process.env.JWT_SECRET;
    
    const decoded = jwt.verify(token, secret);
  
    return decoded
};

module.exports = tokenDecoded;