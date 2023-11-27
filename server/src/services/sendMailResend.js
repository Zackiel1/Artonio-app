require("dotenv").config();
const { API_KEY_RESEND } = process.env;
const { Resend } = require('resend');

const resend = new Resend(API_KEY_RESEND);

const sendEmailResend = async (email, subject, text) => {

    try {
        const data = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: [`${email}`],
          subject: subject,
          html: `<strong>${text}</strong>`,
        });
        return data
      } catch (error) {
        console.error(error);
      }
}

module.exports = sendEmailResend;