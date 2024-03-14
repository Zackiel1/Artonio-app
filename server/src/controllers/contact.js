const { templateSendMailContact } = require("../services/nodemailer.js");

const contact = async (name, email, phone, subject, message) => {
  
  if(subject === ""){
    subject = "Contacto de Usuario"
  }
  
  const mail = {
    from: email,
    to: process.env.GOOGLE_EMAIL,
    subject,
    title: 'Contacto de Usuario',
    message,
    name,
    phone,
  }

  const emailSend = await templateSendMailContact(mail);

  if (!emailSend.messageId) {
    return 'Ocurrio un error al intentar enviar el mail';
}

return `Mensaje enviado`;
};

module.exports = contact;
