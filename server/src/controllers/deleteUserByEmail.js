const { Users } = require("../db.js");

const deleteUserByEmail = async (email) => {

    // const user = await Users.findOne({ where: { email } });

    // if (!user) throw Error("Correo no existe");

    const user = await Users.destroy({
        where: {
          email: email
        }
      });
       
      if (user === 0) throw Error("Correo no existe");  

    return {message: `El correo ${email} fue eliminado`};
}

module.exports = deleteUserByEmail;