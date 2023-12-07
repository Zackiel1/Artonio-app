const generateToken = require("../services/generateToken");
const sendEmailResend = require("../services/sendMailResend");

const resendMessage = async (email, userId) => {
  const token = generateToken(userId);

  let text = `Hola, para verificar tu correo electronico haz click en el siguiente enlace, 
     http://localhost:3001/user/verify?token=${token}&userId=${userId}
        de la contrario ignora dicho mensage`;

  const send = await sendEmailResend(email, (subject = "Verify Account"), text);

  if (send.id) {
    return `Cuenta Creada. Porfavor, revisa tu correo electronico
    y verificalo para poder continuar,
    
    Nota: Si no te ha llegado el correo, revisa bien en Spam o Correo no deseado`;
  } else {
    throw Error(send.message);
  }
};

module.exports = resendMessage;
