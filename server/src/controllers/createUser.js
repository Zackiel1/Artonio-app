const { Users } = require("../db.js");
const sendMail = require("../services/sendMail");
const generateToken = require("../services/generateToken.js");
const sendEmailResend = require("../services/sendMailResend.js");

const createUser = async (name, email, password, phone) => {

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if(!regexEmail.test(email)) throw Error("Formato de email incorrecto");
  
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
  let text = `Hola ${name}, para verificar tu correlo electronico haz click en el siguiente enlace, 
  http://localhost:3001/user/verify?token=${token}&userId=${userId}
  de la contrario ignora dicho mensage`;
  
  const send = await sendEmailResend(email, subject = "Verify Account", text);

  if(send.id){
    return `Cuenta Creada. Porfavor, revisa tu correo electronico
    y verificalo para poder continuar,
    
    Nota: Si no te ha llegado el correo, revisa bien en Spam o Correo no deseado`
  } else {
    throw Error(send.message)
  }
  
};

module.exports = createUser;
