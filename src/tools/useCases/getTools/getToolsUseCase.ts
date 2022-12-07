import { prisma } from "../../../../prisma/prisma";

export class GetToolsUseCase {
  async execute() {
    const tools = await prisma.tools.findMany();

    return tools;
  }
}
