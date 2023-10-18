require("dotenv").config();
const { ID_CLIENT, SECRET_CLIENT, REFRESH_TOKEN, EMAIL_USERNAME } = process.env;
const nodemailer = require("nodemailer");
const oAuth2 = require("./oAuth2");
const { Error } = require("sequelize");

const sendMail = async (email, subject, text) => {
  try {
    const accessToken = await oAuth2();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL_USERNAME,
        clientId: ID_CLIENT,
        clientSecret: SECRET_CLIENT,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "del universo",
      to: email,
      subject: subject,
      text: text,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = sendMail;
