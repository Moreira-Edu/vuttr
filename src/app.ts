import express from "express";
import cors from "cors";
import { routes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";
export const app = express();
app
  .use(express.json(), cors())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  .use(routes);
