const { postUserHandler } = require('../handlres/userHandlers')
const { Router } = require('express');


const userRouter = Router();


userRouter.post('/', postUserHandler);

module.exports = userRouter;
