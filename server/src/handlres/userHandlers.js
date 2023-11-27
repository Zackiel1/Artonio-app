const createUser = require("../controllers/createUser");
const putPass = require("../controllers/putPass");
const statusVerify = require("../controllers/statusVerify");
const tokenVerify = require("../services/tokenVerify");
const userLogin = require("../controllers/userLogin");
const Cookies = require("universal-cookie");
const contact = require("../controllers/contact");
const getUserByEmail = require("../controllers/getUserByEmail");
const recoverUser = require("../controllers/recoverUser");
const tokenDecoded = require("../services/tokenDecoded");

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

    //change verify status
    const verifyAccount = await statusVerify(userId);

    res.redirect(302, `http://localhost:3000/verifyUser/${verifyAccount}`);

  } catch (error) {
    //const errorMessage = error.message || "An unknown error occurred.";
    res.redirect(302, `http://localhost:3000/verifyUser/${error.message}`);

  }
};

//verifica el token del correo enviado
const getVerifyRecoverUserHandler = async (req, res) => {
  const token = req.body.token;
 
  try {
  
    let decoded = tokenDecoded(token)
    res.status(200).json(decoded)

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
    // res.cookie("token", login.token, {
    //   httpOnly: false,
    //   expires: new Date(Date.now() + 3600000),
    // });
    // console.log(req.cookies);
    res.status(200).json(login);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const putPasswordHandler = async (req, res) => {
  const { userId, newPassword } = req.body;
  
  try {
    let data = await putPass(userId, newPassword);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const postUserRecoverHandler = async (req, res) => {
  const { email } = req.body

  try {
    let response = await recoverUser(email);

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const postContactHandler = async (req, res) => {
  const { email, subject, text } = req.body;

  try {
    let data = await contact(email, subject, text);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postUserHandler,
  getVerifyHandler,
  getVerifyRecoverUserHandler,
  postLoginHandler,
  putPasswordHandler,
  postContactHandler,
  postUserRecoverHandler,
};
