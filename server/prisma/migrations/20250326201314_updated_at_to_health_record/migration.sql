/*
  Warnings:

  - Added the required column `updatedAt` to the `HealthRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `healthrecord` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `weight` DECIMAL(65, 30) NULL,
    MODIFY `weightGoal` DECIMAL(65, 30) NULL;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
