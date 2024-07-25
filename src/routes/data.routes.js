import { Router } from "express";
import * as datasController from "../controllers/data.controller.js";

const datasRouter = Router();

datasRouter.get('/', datasController.index);
datasRouter.get('/:engine_ref_data', datasController.getById);
datasRouter.get('/date/:date', datasController.getByDate);
datasRouter.get('/last', datasController.getLastData);

export default datasRouter;
