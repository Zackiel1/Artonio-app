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

app.use(cors({ // Invocamos cors con opciones
  origin: "http://localhost:3000", // Especificamos el origen permitido
  credentials: true, // Habilitamos credenciales (si las usas)
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"], // Cabeceras permitidas
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"], // Métodos permitidos
}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
app.use(passport.initialize());
// app.use(session({
//   secret: 'your-secret-key', 
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true } // Para HTTPS
// }));

app.use(mainRouter);


// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
