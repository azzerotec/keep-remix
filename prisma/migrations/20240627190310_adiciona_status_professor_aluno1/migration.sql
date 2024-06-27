/*
  Warnings:

  - Added the required column `status` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "localderesidencia" TEXT NOT NULL,
    "finalizacao" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "turmaemandamentoId" TEXT,
    CONSTRAINT "Aluno_turmaemandamentoId_fkey" FOREIGN KEY ("turmaemandamentoId") REFERENCES "Turmaemandamento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Aluno" ("finalizacao", "id", "localderesidencia", "nome", "turmaemandamentoId") SELECT "finalizacao", "id", "localderesidencia", "nome", "turmaemandamentoId" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE TABLE "new_Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "localderesidencia" TEXT NOT NULL,
    "finalizacao" DATETIME NOT NULL,
    "especilidade" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("especilidade", "finalizacao", "id", "localderesidencia", "nome") SELECT "especilidade", "finalizacao", "id", "localderesidencia", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
