require("dotenv").config();
const { ID_CLIENT, SECRET_CLIENT, REFRESH_TOKEN, REDIRECT_URI } = process.env;
const { google } = require("googleapis");

const OAuth2 = async () => {
  const oauth2Client = new google.auth.OAuth2(
    ID_CLIENT,
    SECRET_CLIENT,
    REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();
  return accessToken;
};

module.exports = OAuth2;
