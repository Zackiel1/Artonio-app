const generateToken = require("../services/generateToken");
const { templateSendMailWithButton } = require("../services/nodemailer");
const sendEmailResend = require("../services/sendMailResend");

const resendMessage = async (email, userId) => {
  const token = generateToken(userId);

  // enviar correo de verificaion de email
  const mail = {
    from: process.env.GOOGLE_EMAIL,
        to: email,
        subject: 'Veficacion de usuario',
        title: 'Bienvenido a ArtonioTatto',
        message:
            'Para terminar la creacion de tu cuenta y puedas optar por el 20% de decuento dale click al siguiente boton',
        button: {
            textButton: 'Verifica tu cuenta',
            linkButton: `${process.env.URL_BACK}/user/verify?token=${token}&userId=${userId}`,
        },
  }

  const emailSend = await templateSendMailWithButton(mail);

  if (!emailSend.messageId) {
    return 'Ocurrio un error al intentar enviar el mail';
}

return `Cuenta Creada. Porfavor, revisa tu correo electronico
     y verificalo para poder continuar,
    
     Nota: Si no te ha llegado el correo, revisa bien en Spam o Correo no deseado`;
};

//   let text = `Hola, para verificar tu correo electronico haz click en el siguiente enlace, 
//      http://localhost:3001/user/verify?token=${token}&userId=${userId}
//         de la contrario ignora dicho mensage`;

//   const send = await sendEmailResend(email, (subject = "Verify Account"), text);

//   if (send.id) {
//     return `Cuenta Creada. Porfavor, revisa tu correo electronico
//     y verificalo para poder continuar,
    
//     Nota: Si no te ha llegado el correo, revisa bien en Spam o Correo no deseado`;
//   } else {
//     throw Error(send.message);
//   }
// };

module.exports = resendMessage;
