const { Users } = require("../db.js");
const generateToken = require("../services/generateToken.js");
const { templateSendMailWithButton } = require("../services/nodemailer.js");
const bcrypt = require('bcryptjs');

const createUser = async (name, email, password, phone) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regexEmail.test(email)) throw Error("Formato de email incorrecto");

  const hashedPassword = await bcrypt.hash(password, 10);

  // si created es true quiere decir que el email no existe dentro de la DB
  const [user, created] = await Users.findOrCreate({
    where: { email: email },
    defaults: { name: name, password: hashedPassword, phone: phone },
  });

  if (!created) throw Error("Ese correo ya fue utilizado");

  //sacar token
  const userId = user.id;
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

module.exports = createUser;
