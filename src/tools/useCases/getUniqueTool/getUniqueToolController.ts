import { Request, Response } from "express";
import { GetUniqueToolUseCase } from "./getUniqueToolUseCase";

export class GetUniqueToolController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getUniqueToolUseCase = new GetUniqueToolUseCase();

    const tool = await getUniqueToolUseCase.execute(id);

    return res.status(200).json(tool);
  }
}
