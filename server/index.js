const app = require("./src/app.js");
const { sequelize } = require("./src/db.js");

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("estoy en el puerto 3001");
  });
});
