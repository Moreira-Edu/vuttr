import { Router } from "express";
import { CreateToolsController } from "../tools/createToolsController";
const toolsRouter = Router();

const createToolsController = new CreateToolsController();
toolsRouter.post("/", createToolsController.handle);

export { toolsRouter };
