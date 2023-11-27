const { Router } = require("express");
const { postDiscountHandler, deleteDiscountHandler, searchUserHandler, deleteUserHandler } = require("../handlres/adminHandlers");

const adminRouter = Router();

adminRouter.post("/addDiscount", postDiscountHandler)
adminRouter.delete("/deleteDiscount", deleteDiscountHandler)
adminRouter.post("/searchUser", searchUserHandler)
adminRouter.delete("/deleteUser", deleteUserHandler)

module.exports = adminRouter;