/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Model` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Brand" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Model" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
