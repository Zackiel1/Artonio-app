const createUser = require("../controllers/createUser");
const statusVerify = require("../controllers/statusVerify");
const tokenVerify = require("../controllers/tokenVerify");
const userLogin = require("../controllers/userLogin");

const postUserHandler = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const email_LC = email.toLowerCase();

  try {
    const newUser = await createUser(name, email_LC, password, phone);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getVerifyHandler = async (req, res) => {
  const token = req.query.token;
  const userId = req.query.userId;

  try {
    tokenVerify(token);
    const verifyAccount = await statusVerify(userId);

    res.status(200).json(verifyAccount);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(400).send("Token has expired");
    } else {
      res.status(400).send("Token is invalid");
    }
  }
};

const postLoginHandler = async (req, res) => {
  const { email, password } = req.body;

  const email_LC = email.toLowerCase();

  try {
    const login = await userLogin(email_LC, password);
    res.cookie("token", login, { httpOnly: true });
    res.status(200).json(login);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postUserHandler,
  getVerifyHandler,
  postLoginHandler,
};
