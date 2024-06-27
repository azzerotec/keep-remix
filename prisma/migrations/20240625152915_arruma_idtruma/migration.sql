-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Turmaemandamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomedaturma" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "finalizacao" DATETIME NOT NULL,
    CONSTRAINT "Turmaemandamento_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Turmaemandamento" ("finalizacao", "id", "nomedaturma", "professorId") SELECT "finalizacao", "id", "nomedaturma", "professorId" FROM "Turmaemandamento";
DROP TABLE "Turmaemandamento";
ALTER TABLE "new_Turmaemandamento" RENAME TO "Turmaemandamento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
