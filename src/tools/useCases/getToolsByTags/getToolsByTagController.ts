import { Request, Response } from "express";
import { GetToolsByTagUseCase } from "./getToolsByTagUseCase";

export class GetToolsByTagController {
  async handle(req: Request, res: Response) {
    const { tag } = req.params;
    const getToolByTag = new GetToolsByTagUseCase();
    const tool = await getToolByTag.execute(tag);

    res.status(200).json(tool);
  }
}
