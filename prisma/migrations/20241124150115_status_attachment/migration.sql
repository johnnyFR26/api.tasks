-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_attachments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "deadline" DATETIME NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_attachments" ("deadline", "description", "id", "name") SELECT "deadline", "description", "id", "name" FROM "attachments";
DROP TABLE "attachments";
ALTER TABLE "new_attachments" RENAME TO "attachments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
