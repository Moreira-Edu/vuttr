import { Router } from "express";
import { CreateToolsController } from "../tools/useCases/createTools/createToolsController";
import { DeleteToolController } from "../tools/useCases/deleteTool/deleteToolController";
import { GetToolsController } from "../tools/useCases/getTools/getToolsController";
import { UpdateToolController } from "../tools/useCases/updateTool/updateToolController";

const toolsRouter = Router();
const createToolsController = new CreateToolsController();
const getToolsController = new GetToolsController();
const updateToolController = new UpdateToolController();
const deleteToolController = new DeleteToolController();

toolsRouter.post("/", createToolsController.handle);
toolsRouter.get("/", getToolsController.handle);
toolsRouter.put("/:id", updateToolController.handle);
toolsRouter.delete("/:id", deleteToolController.handle);

export { toolsRouter };
