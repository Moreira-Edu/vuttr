import { Request, Response } from "express";
import { UpdateToolUseCase } from "./updateToolUseCase";

export class UpdateToolController {
  async handle(req: Request, res: Response) {
    const { title, description, link, tags } = req.body;
    const { id } = req.params;
    const updateToolUseCase = new UpdateToolUseCase();

    const result = await updateToolUseCase.execute({
      id,
      title,
      description,
      link,
      tags,
    });

    return res.status(201).json(result);
  }
}
