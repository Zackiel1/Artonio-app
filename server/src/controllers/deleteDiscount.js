const { Users } = require("../db.js");

const deleteDiscount = async (email, id) => {

    email = email.toLowerCase();

    const user = await Users.findOne({ where: { email } });

    if (!user) throw Error("Correo no existe");
    
    let idNum = parseInt(id)
    const discount = await user.discount.filter(discount => discount.discountId !== idNum);
    
    
    user.discount = discount;

    if (!discount) throw Error("Descuento no existe");
    
    await user.save();

    return {message: `descuento eliminado para ${email}`};
}

module.exports = deleteDiscount;