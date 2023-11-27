const { Users } = require("../db.js");

const addDiscount = async (email, discount, reason) => {

    email = email.toLowerCase();

    const user = await Users.findOne({ where: { email } });

    if (!user) throw Error("Correo no existe");

    let discountId = Math.floor(Math.random() * 1000000);

    user.discount = [...user.discount, { discount, reason, discountId }];
    
    await user.save();

    return {message: `descuento agregado a ${email}`};
}

module.exports = addDiscount;