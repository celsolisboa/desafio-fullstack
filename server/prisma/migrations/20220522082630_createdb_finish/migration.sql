-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Classroom" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "room_number" INTEGER NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "courseId" TEXT,
    "teachersId" TEXT,
    CONSTRAINT "Classroom_teachersId_fkey" FOREIGN KEY ("teachersId") REFERENCES "Teachers" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Classroom_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Classroom" ("end_time", "id", "room_number", "start_time") SELECT "end_time", "id", "room_number", "start_time" FROM "Classroom";
DROP TABLE "Classroom";
ALTER TABLE "new_Classroom" RENAME TO "Classroom";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
