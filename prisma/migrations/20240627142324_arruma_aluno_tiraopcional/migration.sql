/*
  Warnings:

  - Made the column `finalizacao` on table `Aluno` required. This step will fail if there are existing NULL values in that column.
  - Made the column `localderesidencia` on table `Aluno` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "localderesidencia" TEXT NOT NULL,
    "finalizacao" DATETIME NOT NULL,
    "turmaemandamentoId" TEXT,
    CONSTRAINT "Aluno_turmaemandamentoId_fkey" FOREIGN KEY ("turmaemandamentoId") REFERENCES "Turmaemandamento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Aluno" ("finalizacao", "id", "localderesidencia", "nome", "turmaemandamentoId") SELECT "finalizacao", "id", "localderesidencia", "nome", "turmaemandamentoId" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
