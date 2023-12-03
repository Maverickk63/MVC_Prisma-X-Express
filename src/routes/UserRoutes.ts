import { Request, Response, Router } from "express";
import { PrismaClient } from '@prisma/client'
import UserController from "../controllers/UserController";

const prisma = new PrismaClient()

const UserRouter = Router();

UserRouter.get('/user', UserController.listUsuarios)

UserRouter.get('/cuser', UserController.userCreatepage)

UserRouter.get('/duser', UserController.userDeletepage)

UserRouter.post('/user', UserController.createUsuarios)

UserRouter.delete('/user', UserController.deleteUsuarios)

UserRouter.put('/user', UserController.updateUsuarios)

export default UserRouter;
// coment