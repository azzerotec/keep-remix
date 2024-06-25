/*
  Warnings:

  - You are about to drop the `CategoriaTurma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoriaTurma";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CategoriaToTurmaemandamento" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoriaToTurmaemandamento_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoria" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoriaToTurmaemandamento_B_fkey" FOREIGN KEY ("B") REFERENCES "Turmaemandamento" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriaToTurmaemandamento_AB_unique" ON "_CategoriaToTurmaemandamento"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriaToTurmaemandamento_B_index" ON "_CategoriaToTurmaemandamento"("B");
