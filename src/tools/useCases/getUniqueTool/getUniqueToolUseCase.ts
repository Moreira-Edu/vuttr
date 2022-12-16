import { prisma } from "../../../../prisma/prisma";
import { AppError } from "../../../errors/AppErrors";

export class GetUniqueToolUseCase {
  async execute(id: string) {
    const tool = await prisma.tools.findUnique({ where: { id } });

    if (!tool) {
      throw new AppError("Tool not found", 400);
    }

    return tool;
  }
}
