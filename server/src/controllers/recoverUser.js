const generateToken = require("../services/generateToken");
const sendEmailResend = require("../services/sendMailResend");
const tokenDecoded = require("../services/tokenDecoded");
const tokenVerify = require("../services/tokenVerify");
const getUserByEmail = require("./getUserByEmail");

const recoverUser = async (email) =>{

    //check if the email exists, insert token
    let data = await getUserByEmail(email);
    let userId = data.dataValues.id

    //genero token
    const token = generateToken(data);
    
    let text = `Esta solicitud es para recuperar tu clave en Artonio.com, para que
    puedas cambiar tu contraseña dale al siguiente click al siguiente link: 
    http://localhost:3000/recoverPass?token=${token}`;

    await sendEmailResend(email, subject = "Recover User", text);

    return `Se envio un mensaje al correo: ${email}`
    
}

module.exports = recoverUser;