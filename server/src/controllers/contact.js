const sendMail = require("../services/sendMail");

const contact = async (email, subject, text) => {
  await sendMail(email, subject = "Contact Client", text);
  return "Mensaje Enviado";
};

module.exports = contact;
