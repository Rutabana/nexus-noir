/*
  Warnings:

  - You are about to drop the column `tags` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `activitylog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `activitylog` DROP FOREIGN KEY `ActivityLog_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_userId_fkey`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `tags`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `password`,
    ADD COLUMN `authProvider` ENUM('email', 'google', 'github', 'apple', 'facebook', 'microsoft', 'twitter', 'gitlab', 'discord') NOT NULL DEFAULT 'email',
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `activitylog`;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_content_key`(`content`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TagOnPost` (
    `postId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    INDEX `TagOnPost_postId_idx`(`postId`),
    INDEX `TagOnPost_tagId_idx`(`tagId`),
    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `userId` INTEGER NOT NULL,
    `intensity` INTEGER NOT NULL,
    `details` JSON NULL,
    `image` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `type` ENUM('workout', 'calorie_deficit', 'reading', 'coding') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Activity_userId_date_idx`(`userId`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Macros` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `protein` INTEGER NOT NULL,
    `carbs` INTEGER NOT NULL,
    `fat` INTEGER NOT NULL,
    `caloriesIn` INTEGER NOT NULL,
    `caloriesOut` INTEGER NULL,
    `date` DATE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Macros_userId_date_idx`(`userId`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TagOnPost` ADD CONSTRAINT `TagOnPost_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagOnPost` ADD CONSTRAINT `TagOnPost_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Macros` ADD CONSTRAINT `Macros_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `post` RENAME INDEX `Post_userId_fkey` TO `Post_userId_idx`;
