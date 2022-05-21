-- CreateTable
CREATE TABLE "teacher" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sub_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "teacher" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
