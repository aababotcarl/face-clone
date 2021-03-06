import express from 'express';
import UserController from './UserController';

const userRouter = express.Router();

userRouter.post('/auth/signup', UserController.create);
userRouter.post('/auth/login', UserController.login);

export default userRouter;
