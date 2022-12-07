/*
  Warnings:

  - The primary key for the `tools` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tools" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
INSERT INTO "new_tools" ("description", "id", "link", "tags", "title") SELECT "description", "id", "link", "tags", "title" FROM "tools";
DROP TABLE "tools";
ALTER TABLE "new_tools" RENAME TO "tools";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
