import { Request, Response } from "express";
import { GetToolsUseCase } from "./getToolsUseCase";

export class GetToolsController {
  async handle(req: Request, res: Response) {
    const getToolsUseCase = new GetToolsUseCase();

    const result = await getToolsUseCase.execute();

    return res.status(200).json(result);
  }
}
