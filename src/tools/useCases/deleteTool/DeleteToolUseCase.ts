import { prisma } from "../../../../prisma/prisma";
import { AppError } from "../../../errors/AppErrors";

export class DeleteToolUseCase {
  async execute(id: string) {
    const toolExists = await prisma.tools.findUnique({
      where: {
        id,
      },
    });

    if (!toolExists) {
      throw new AppError("Tool not found", 400);
    }

    const deletedTool = await prisma.tools.delete({
      where: {
        id,
      },
    });

    return deletedTool;
  }
}
