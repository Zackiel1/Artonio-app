const { Router } = require("express");
const passport = require('passport');
require("../services/google.js")

const googleRouter = Router();

googleRouter.get("/google", (req, res) => {

    const user = req.user;
    const serializedUser = JSON.stringify(user);
    console.log(serializedUser);
    const redirectUrl = `http://localhost:3000/login/?userGoogle=${encodeURIComponent(serializedUser)}`;
    res.redirect(redirectUrl);
})


module.exports = googleRouter