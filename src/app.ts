import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";
import { AppError } from "./errors/AppErrors";
export const app = express();
app
  .use(express.json(), cors())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  .use(routes)
  .use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res
        .status(err.statusCode)
        .json({ status: "error", message: err.message });
    }

    return res.status(500).json({
      status: "error",
      message: `Internal server error ${err.message}`,
    });
  });
