const nodemailer = require('nodemailer');
const deleteUserByEmail = require('../controllers/deleteUserByEmail');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD_APP,
    },
});

transporter
    .verify()
    .then()
    .catch((error) => console.log(error));

const sendMail = async (mailOptions) => {
    try {
        const send = await transporter.sendMail(mailOptions);
        return send;
    } catch (error) {
        console.log(error);
    }
};

const templateSendMail = async (mail) => {
    const { from, to, subject, title, message } = mail;

    const mailOptions = {
        from,
        to,
        subject,
        html: `
        <div style="width: 600px; margin: auto; background: linear-gradient(180deg, #4e4e4e, #000000); border: 3.5px solid #ffd300;">
        <div style="padding: 20px 10px">
            
            <h1 style="text-align: center; color: #ffd300;">Artonio Tatto</h1>
            
            <hr/>

            <!-- tittle -->

            <h2
                style="
                    text-align: center;
                    color: white;
                    text-decoration: none;
                "
            >
            ${title}
            </h2>

            <p
                style="
                    text-align: center;
                    color: white;
                    text-decoration: none;
                "
            >
            ${message}
            </p>

        </div>
    </div>
        `,
        // attachments: [
        //     {
        //         filename: 'logoanimaladas.png',
        //         path: '../api/src/img/logoanimaladas.png',
        //         cid: 'logoanimaladas',
        //     },
        // ],
    };

    try {
        const send = await transporter.sendMail(mailOptions);
        return send;
    } catch (error) {
        console.log(error);
    }
};

const templateSendMailWithButton = async (mail) => {
    const { from, to, subject, title, message, button } = mail;

    const mailOptions = {
        from,
        to,
        subject,
        html: `
        <div style="width: 600px; margin: auto; background: linear-gradient(180deg, #4e4e4e, #000000); border: 3.5px solid #ffd300;">
        <div style="padding: 20px 10px">
            
            <h1 style="text-align: center; color: #ffd300;">Artonio Tatto</h1>
            
            <hr/>

            <!-- tittle -->

            <h2
                style="
                    text-align: center;
                    color: white;
                    text-decoration: none;
                "
            >
                ${title}
                </h2>

                <p
                    style="
                        text-align: center;
                        color: white;
                        text-decoration: none;
                    "
                >
                ${message}
                </p>

                <div style="width: 100%; text-align: center">
                    <button
                        style="
                            height: auto;
                            width: 150px;
                            padding: 5px;
                            background-color: #ffc107;
                            font-weight: bold;
                        "
                    >
                        <a
                            style="text-decoration: none; color: black; padding: 5px;"
                            href="${button.linkButton}"
                            >${button.textButton}</a
                        >
                    </button>
                </div>


            </div>
        </div>
        `,
        // attachments: [
        //     {
        //         filename: 'logoanimaladas.png',
        //         path: '../api/src/img/logoanimaladas.png',
        //         cid: 'logoanimaladas',
        //     },
        // ],
    };

    try {
        const send = await transporter.sendMail(mailOptions);
        return send;
    } catch (error) {
        console.log(error);
        await deleteUserByEmail(to);
        throw new Error("Hubo un error al intentar enviar el correo, disculpa pronto lo solucionaremos");
    }
};

const templateSendMailContact = async (mail) => {
    const { from, to, subject, title, message, name, phone } = mail;

    const mailOptions = {
        from,
        to,
        subject,
        html: `
        <div style="width: 600px; margin: auto; background: linear-gradient(180deg, #4e4e4e, #000000); border: 3.5px solid #ffd300;">
        <div style="padding: 20px 10px">
            
            <h1 style="text-align: center; color: #ffd300;">Artonio Tatto</h1>
            
            <hr/>

            <!-- tittle -->

            <h2
                style="
                    text-align: center;
                    color: white;
                    text-decoration: none;
                "
            >
            ${title}
            </h2>

            <p
                style="
                    text-align: center;
                    color: white;
                    text-decoration: none;
                "
            >
            Contacto de :${name} <br/>
            Email: ${from} <br/>
            Telefono: ${phone} <br/>
            </p>
            <br/>
            <p
                style="
                    text-align: center;
                    color: white;
                    text-decoration: none;
                "
            >
            ${message}
            </p>

        </div>
    </div>
        `,
        // attachments: [
        //     {
        //         filename: 'logoanimaladas.png',
        //         path: '../api/src/img/logoanimaladas.png',
        //         cid: 'logoanimaladas',
        //     },
        // ],
    };

    try {
        const send = await transporter.sendMail(mailOptions);
        return send;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    transporter,
    sendMail,
    templateSendMailWithButton,
    templateSendMail,
    templateSendMailContact,
};
