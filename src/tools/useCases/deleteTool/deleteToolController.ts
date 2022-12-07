import { Request, Response } from "express";
import { DeleteToolUseCase } from "./DeleteToolUseCase";

export class DeleteToolController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteToolUseCase = new DeleteToolUseCase();

    const result = await deleteToolUseCase.execute(id);

    return res.status(204).json(result);
  }
}
