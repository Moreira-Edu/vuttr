import { Request, Response } from "express";
import { CreateToolsUseCase } from "./createToolsUseCase";

export class CreateToolsController {
  async handle(req: Request, res: Response) {
    const { title, link, description, tags } = req.body;

    const createToolsUseCase = new CreateToolsUseCase();

    const result = await createToolsUseCase.execute({
      title,
      link,
      description,
      tags,
    });

    return res.status(201).json(result);
  }
}
