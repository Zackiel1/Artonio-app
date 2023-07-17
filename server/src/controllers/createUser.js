const { Users } = require("../db.js");
const sendMail = require("../services/sendMail");
const generateToken = require("../services/generateToken.js");

const createUser = async (name, email, password, phone) => {
  // si created es true quiere decir que el email no existe dentro de la DB
  const [user, created] = await Users.findOrCreate({
    where: { email: email },
    defaults: { name: name, password: password, phone: phone },
  });

  const userId = user.id;

  if (!created) throw Error("Ese correo ya fue utilizado");

  //sacar token
  const token = generateToken(userId);

  // enviar correo de verificaion de email
  //await sendMail(name, email, token, userId);

  return `Cuenta Creada. Porfavor, revisa tu correo electronico
   y verificalo para poder continuar,
   
   Nota: Si no te ha llegado el correo, revisa bien en Spam o Correo no deseado`;
};

module.exports = createUser;
