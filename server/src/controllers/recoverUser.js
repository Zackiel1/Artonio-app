const generateToken = require("../services/generateToken");
const { templateSendMailWithButton } = require("../services/nodemailer");

const tokenDecoded = require("../services/tokenDecoded");
const tokenVerify = require("../services/tokenVerify");
const getUserByEmail = require("./getUserByEmail");

const recoverUser = async (email) =>{

    //check if the email exists, insert token
    let data = await getUserByEmail(email);
    let userId = data.dataValues.id

    //genero token
    const token = generateToken(data);

    const mail = {
        from: process.env.GOOGLE_EMAIL,
            to: email,
            subject: 'Recuperar contraseña',
            title: 'Recuperar contraseña',
            message:
                'Esta solicitud es para recuperar tu clave en Artonio.com, para que puedas cambiar tu contraseña dale al siguiente boton',
            button: {
                textButton: 'Recuperar contraseña',
                linkButton: `${process.env.URL_BACK}/user/verifyToken?token=${token}`,
            },
      }
    
      const emailSend = await templateSendMailWithButton(mail);

      if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }
    
    // let text = `Esta solicitud es para recuperar tu clave en Artonio.com, para que
    // puedas cambiar tu contraseña dale al siguiente click al siguiente link: 
    // http://localhost:3000/recoverPass?token=${token}`;

    return `Se envio un mensaje al correo: ${email}`
    
}

module.exports = recoverUser;