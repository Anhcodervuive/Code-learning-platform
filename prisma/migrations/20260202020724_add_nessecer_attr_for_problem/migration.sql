-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "editorial" TEXT,
ADD COLUMN     "hint" TEXT,
ADD COLUMN     "memory_limit_mb" INTEGER NOT NULL DEFAULT 256,
ADD COLUMN     "time_limit_ms" INTEGER NOT NULL DEFAULT 3000;
