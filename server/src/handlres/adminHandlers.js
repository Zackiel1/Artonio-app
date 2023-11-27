const addDiscount = require("../controllers/addDiscount");
const deleteDiscount = require("../controllers/deleteDiscount");
const deleteUserByEmail = require("../controllers/deleteUserByEmail");
const getUserByEmail = require("../controllers/getUserByEmail");

const postDiscountHandler = async (req, res) => {
    const { email, discount, reason } = req.body

    try {
        let result = await addDiscount(email, discount, reason);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteDiscountHandler =  async (req, res) => {
    const { email, id } = req.headers;
   
    try {
        let result = await deleteDiscount(email, id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const searchUserHandler =  async (req, res) => {
    const { email } = req.body;
    try {
        let result = await getUserByEmail(email);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteUserHandler =  async (req, res) => {
    const { email } = req.body;
    
    try {
        let result = await deleteUserByEmail(email);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = {
    postDiscountHandler,
    deleteDiscountHandler,
    searchUserHandler,
    deleteUserHandler
}