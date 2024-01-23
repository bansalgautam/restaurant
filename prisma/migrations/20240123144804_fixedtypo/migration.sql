/*
  Warnings:

  - You are about to drop the column `producs` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "producs",
ADD COLUMN     "products" JSONB[];
