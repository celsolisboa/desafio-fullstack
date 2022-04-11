-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "start_time" TEXT NOT NULL,
    "finish_time" TEXT NOT NULL,
    "classroom_number" INTEGER NOT NULL,
    "instructor_name" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "number" INTEGER NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instructor_name_fkey" FOREIGN KEY ("instructor_name") REFERENCES "Instructor"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_classroom_number_fkey" FOREIGN KEY ("classroom_number") REFERENCES "Classroom"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
