import { Router } from "express";
import { toolsRouter } from "./toolsRoutes";

const routes = Router();

routes.use("/tools", toolsRouter);

export { routes };
