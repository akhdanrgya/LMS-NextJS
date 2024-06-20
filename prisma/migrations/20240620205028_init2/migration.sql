/*
  Warnings:

  - Added the required column `price` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `time` DATETIME(3) NOT NULL;
