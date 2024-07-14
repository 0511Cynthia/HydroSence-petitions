import { Router } from "express";
import * as datasController from "../controllers/data.controller.js";

const datasRouter = Router()

datasRouter.get('/', datasController.index)
datasRouter.get('/:id', datasController.getById);
datasRouter.get('/date/:date', datasController.getByDate);


export default datasRouter;