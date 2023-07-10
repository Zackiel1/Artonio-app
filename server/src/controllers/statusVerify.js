const { Users } = require("../db.js");
const getUserById = require("./getUserById.js");

const statusVerify = async (userId) => {
  const user = await getUserById(userId);

  if (user.is_verified === false) {
    Users.update(
      { is_verified: true },
      {
        where: {
          id: userId,
        },
      }
    );

    return "Verificado";
  } else {
    return "Ya esta Verificado";
  }
};

module.exports = statusVerify;
