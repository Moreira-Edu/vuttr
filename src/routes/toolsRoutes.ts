import { Router } from "express";
import { CreateToolsController } from "../tools/useCases/createTools/createToolsController";
import { DeleteToolController } from "../tools/useCases/deleteTool/deleteToolController";
import { GetToolsController } from "../tools/useCases/getTools/getToolsController";
import { GetUniqueToolController } from "../tools/useCases/getUniqueTool/getUniqueToolController";
import { GetToolsByTagController } from "../tools/useCases/getToolsByTags/getToolsByTagController";
import { UpdateToolController } from "../tools/useCases/updateTool/updateToolController";

const toolsRouter = Router();
const createToolsController = new CreateToolsController();
const getToolsController = new GetToolsController();
const getUniqueToolController = new GetUniqueToolController();
const getToolsByTagController = new GetToolsByTagController();
const updateToolController = new UpdateToolController();
const deleteToolController = new DeleteToolController();

toolsRouter.post("/", createToolsController.handle);
toolsRouter.get("/", getToolsController.handle);
toolsRouter.get("/tag/:tag", getToolsByTagController.handle);
toolsRouter.get("/:id", getUniqueToolController.handle);
toolsRouter.put("/:id", updateToolController.handle);
toolsRouter.delete("/:id", deleteToolController.handle);

export { toolsRouter };
