import { prisma } from "../../../../prisma/prisma";
import { AppError } from "../../../errors/AppErrors";
import { UpdateToolDTO } from "../../dto/updateToolDTO";

export class UpdateToolUseCase {
  async execute({ id, title, description, link, tags }: UpdateToolDTO) {
    const toolExists = await prisma.tools.findUnique({
      where: {
        id,
      },
    });

    if (!toolExists) {
      throw new AppError("Tool not found", 400);
    }

    const updatedTool = await prisma.tools.update({
      where: {
        id,
      },
      data: {
        title: title || toolExists.title,
        description: description || toolExists.description,
        link: link || toolExists.link,
        tags: tags || toolExists.tags,
      },
    });

    return updatedTool;
  }
}
