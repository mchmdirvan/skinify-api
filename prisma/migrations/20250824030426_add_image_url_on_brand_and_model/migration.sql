/*
  Warnings:

  - Added the required column `imageUrl` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Brand" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Model" ADD COLUMN     "imageUrl" TEXT NOT NULL;
