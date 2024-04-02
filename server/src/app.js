require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mainRouter = require("./routes/index.js");
const userRouter = require("../src/routes/userRouter.js");
const passport = require('passport');
const session = require('express-session')
require("../src/services/google.js")

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE',
    );
    next();
});
app.use(passport.initialize());

app.use(mainRouter);

// // Error catching endware.
// app.use((err, req, res, next) => {
//   // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

module.exports = app;
