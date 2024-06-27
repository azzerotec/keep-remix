/*
  Warnings:

  - Added the required column `especilidade` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalizacao` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localderesidencia` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Turmaemandamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomedaturma" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "finalizacao" DATETIME NOT NULL,
    CONSTRAINT "Turmaemandamento_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_Turmaemandamento" ("finalizacao", "id", "nomedaturma", "professorId") SELECT "finalizacao", "id", "nomedaturma", "professorId" FROM "Turmaemandamento";
DROP TABLE "Turmaemandamento";
ALTER TABLE "new_Turmaemandamento" RENAME TO "Turmaemandamento";
CREATE TABLE "new_Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "localderesidencia" TEXT NOT NULL,
    "finalizacao" DATETIME NOT NULL,
    "especilidade" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("id", "nome") SELECT "id", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
