-- AlterTable
ALTER TABLE "pengguna" ALTER COLUMN "diperbarui_pada" DROP DEFAULT;

-- AlterTable
ALTER TABLE "pengguna_peran" ALTER COLUMN "diperbarui_pada" DROP DEFAULT;

-- AlterTable
ALTER TABLE "peran" ALTER COLUMN "diperbarui_pada" DROP DEFAULT;

-- AlterTable
ALTER TABLE "warga" ALTER COLUMN "diperbarui_pada" DROP DEFAULT;
