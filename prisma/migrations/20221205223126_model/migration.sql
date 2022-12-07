/*
  Warnings:

  - You are about to drop the `Tools` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tools";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "tools" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
