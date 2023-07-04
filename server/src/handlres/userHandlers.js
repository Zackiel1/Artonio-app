const createUser = require("../controllers/createUser");

const postUserHandler = async (req, res) => {

    const { name, email, password, phone } = req.body;
    
    try {

        const newUser = await createUser(name, email, password, phone);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message);
    }

}

module.exports = {
    postUserHandler
}



