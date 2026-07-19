CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE "peran" (
    "id" UUID NOT NULL,
    "kode" VARCHAR(50) NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "deskripsi" TEXT,
    "is_aktif" BOOLEAN NOT NULL DEFAULT true,
    "dibuat_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "peran_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "pengguna" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255),
    "username" VARCHAR(100),
    "kata_sandi_hash" TEXT NOT NULL,
    "nama_tampilan" VARCHAR(150) NOT NULL,
    "status" VARCHAR(30) NOT NULL DEFAULT 'AKTIF',
    "terakhir_login_pada" TIMESTAMPTZ(6),
    "dibuat_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dihapus_pada" TIMESTAMPTZ(6),

    CONSTRAINT "pengguna_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "pengguna_status_check" CHECK ("status" IN ('AKTIF','TIDAK_AKTIF','TERBLOKIR'))
);

CREATE TABLE "pengguna_peran" (
    "id" UUID NOT NULL,
    "pengguna_id" UUID NOT NULL,
    "peran_id" UUID NOT NULL,
    "diberi_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dibuat_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pengguna_peran_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "pengguna_peran_pengguna_id_fkey" FOREIGN KEY ("pengguna_id") REFERENCES "pengguna" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "pengguna_peran_peran_id_fkey" FOREIGN KEY ("peran_id") REFERENCES "peran" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE "warga" (
    "id" UUID NOT NULL,
    "pengguna_id" UUID,
    "nomor_identitas" VARCHAR(100),
    "nama_lengkap" VARCHAR(200) NOT NULL,
    "jenis_kelamin" VARCHAR(20),
    "tempat_lahir" VARCHAR(100),
    "tanggal_lahir" DATE,
    "nomor_telepon" VARCHAR(30),
    "email" VARCHAR(255),
    "status" VARCHAR(30) NOT NULL DEFAULT 'AKTIF',
    "catatan" VARCHAR(500),
    "dibuat_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dihapus_pada" TIMESTAMPTZ(6),

    CONSTRAINT "warga_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "warga_pengguna_id_fkey" FOREIGN KEY ("pengguna_id") REFERENCES "pengguna" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "warga_status_check" CHECK ("status" IN ('AKTIF','PINDAH','MENINGGAL','TIDAK_AKTIF'))
);

CREATE UNIQUE INDEX "peran_kode_key" ON "peran" ("kode");
CREATE UNIQUE INDEX "peran_nama_key" ON "peran" ("nama");
CREATE UNIQUE INDEX "pengguna_email_key" ON "pengguna" ("email");
CREATE UNIQUE INDEX "pengguna_username_key" ON "pengguna" ("username");
CREATE UNIQUE INDEX "pengguna_peran_pengguna_id_peran_id_key" ON "pengguna_peran" ("pengguna_id", "peran_id");
CREATE INDEX "pengguna_peran_peran_id_idx" ON "pengguna_peran" ("peran_id");
CREATE UNIQUE INDEX "warga_pengguna_id_key" ON "warga" ("pengguna_id");
CREATE INDEX "warga_nama_lengkap_idx" ON "warga" ("nama_lengkap");
CREATE INDEX "warga_status_idx" ON "warga" ("status");
