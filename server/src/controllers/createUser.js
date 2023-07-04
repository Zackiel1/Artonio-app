const { User } =  require('../db.js')

const createUser = async (name, email, password, phone) => {

     // created es true quiere decir que el email no existe dentro de la DB
       const [user, created ] = await User.findOrCreate({
            where: { email: email },
            defaults: { name: name, password: password, phone: phone }
       })

       if(!created) throw Error("Ese correo ya fue utilizado");
       return "Usuario Creado";
       
}

module.exports = createUser;

