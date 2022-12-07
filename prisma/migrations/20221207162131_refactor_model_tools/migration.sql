/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `tools` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tools_title_key" ON "tools"("title");
