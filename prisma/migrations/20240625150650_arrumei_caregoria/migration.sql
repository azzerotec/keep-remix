/*
  Warnings:

  - You are about to drop the column `turmaemandamentoId` on the `Categoria` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categoria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Categoria" ("id", "nome") SELECT "id", "nome" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
