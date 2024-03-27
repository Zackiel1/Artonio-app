const app = require("./src/app.js");
const { sequelize } = require("./src/db.js");

const port = proccess.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`me estoy ejecutando en el puerto ${port}`);
  });
});
