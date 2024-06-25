-- CreateTable
CREATE TABLE "Turmaemandamento" (
    "id" TEXT NOT NULL,
    "nomedaturma" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "finalizacao" DATETIME NOT NULL,
    CONSTRAINT "Turmaemandamento_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "turmaemandamentoId" TEXT,
    CONSTRAINT "Aluno_turmaemandamentoId_fkey" FOREIGN KEY ("turmaemandamentoId") REFERENCES "Turmaemandamento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "turmaemandamentoId" TEXT,
    CONSTRAINT "Categoria_turmaemandamentoId_fkey" FOREIGN KEY ("turmaemandamentoId") REFERENCES "Turmaemandamento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategoriaTurma" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoriaId" TEXT NOT NULL,
    "turmaemandamentoId" TEXT NOT NULL,
    CONSTRAINT "CategoriaTurma_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriaTurma_turmaemandamentoId_fkey" FOREIGN KEY ("turmaemandamentoId") REFERENCES "Turmaemandamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Turmaemandamento_id_key" ON "Turmaemandamento"("id");
