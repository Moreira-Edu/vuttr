import { prisma } from "../../prisma/prisma";
import { AppError } from "../errors/AppErrors";
import { createToolsDTO } from "./dto/createToolsDTO";

export class CreateToolsUseCase {
  async execute({ title, link, description, tags }: createToolsDTO) {
    const toolsAlreadyExists = await prisma.tools.findUnique({
      where: {
        title,
      },
    });
    if (toolsAlreadyExists) {
      throw new AppError("tool already exists", 400);
    }

    const tool = await prisma.tools.create({
      data: {
        title,
        link,
        description,
        tags,
      },
    });

    return tool;
  }
}
