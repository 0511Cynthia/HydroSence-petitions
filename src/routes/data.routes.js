import { Router } from "express";
import * as datasController from "../controllers/data.controller.js";

const datasRouter = Router()

datasRouter.get('/', datasController.index)

export default datasRouter;