import { prisma } from "../../../../prisma/prisma";
import { AppError } from "../../../errors/AppErrors";

export class GetToolsByTagUseCase {
  async execute(tag: string) {
    const tool = await prisma.tools.findMany({
      where: {
        tags: {
          contains: tag,
        },
      },
    });

    if (tool.length === 0) {
      throw new AppError("Tool not found");
    }

    return tool;
  }
}
