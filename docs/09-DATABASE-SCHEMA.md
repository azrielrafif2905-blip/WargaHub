# WargaHub Database Schema Specification

## 1. Document Control

- Document Title: WargaHub Database Schema Specification
- Product Name: WargaHub
- Version: 0.1.0
- Status: Draft
- Owner: Product and Engineering Team
- Last Updated: 2026-07-18
- Related Documents:
  - [PROJECT_MANIFEST.md](../PROJECT_MANIFEST.md)
  - [.ai/AI_CONTEXT.md](../.ai/AI_CONTEXT.md)
  - [.ai/PROJECT_RULES.md](../.ai/PROJECT_RULES.md)
  - [.ai/SYSTEM_PROMPT.md](../.ai/SYSTEM_PROMPT.md)
  - [docs/01-VISION.md](01-VISION.md)
  - [docs/02-SRS.md](02-SRS.md)
  - [docs/03-PRODUCT-BACKLOG.md](03-PRODUCT-BACKLOG.md)
  - [docs/04-SPRINT-PLANNING.md](04-SPRINT-PLANNING.md)
  - [docs/05-ARCHITECTURE.md](05-ARCHITECTURE.md)
  - [docs/06-ERD.md](06-ERD.md)
  - [docs/07-API-CONTRACT.md](07-API-CONTRACT.md)
  - [docs/08-UI-UX-SPECIFICATION.md](08-UI-UX-SPECIFICATION.md)
- Change History:
  - 2026-07-18: Initial database schema specification draft created for the WargaHub MVP.

---

## 2. Database Design Principles

Skema WargaHub MVP dirancang dengan prinsip yang sederhana, aman, dan dapat dipelihara.

- Data integrity: data harus konsisten dan tidak ambigu. Setiap record harus memiliki status yang jelas dan field yang diperlukan.
- Referential integrity: hubungan antar tabel dijaga dengan foreign key agar tidak ada referensi yang mengarah ke data yang tidak ada.
- Least privilege: akses data dijaga di aplikasi dan database melalui batasan otorisasi. Skema tidak boleh menjadi satu-satunya perlindungan.
- Auditability: perubahan penting harus dapat ditelusuri oleh aktivitas audit.
- Consistent naming: tabel dan kolom menggunakan snake_case dan bahasa Indonesia untuk domain bisnis.
- Explicit relationships: hubungan keluarga, rumah, pengajuan surat, tagihan, dan pengaduan harus diekspresikan secara eksplisit di skema.
- Avoiding unnecessary duplication: data yang sama tidak diulang tanpa alasan. Hubungan relasional dipakai untuk menghubungkan entitas.
- Migration safety: skema harus dapat berkembang melalui migrasi yang aman dan dapat diterbalikkan secara terbatas.
- Future extensibility: skema harus cukup fleksibel untuk penambahan fitur di masa depan tanpa mengubah fondasi yang sudah stabil.

---

## 3. Database Technology

### 3.1 PostgreSQL

Database utama untuk WargaHub MVP adalah PostgreSQL. PostgreSQL dipilih karena cocok untuk data relasional, foreign key, transaksi, constraint, dan dukungan JSONB untuk metadata terbatas.

### 3.2 Identifier Strategy

Semua tabel utama menggunakan UUID sebagai primary key. Keuntungan utamanya adalah:
- identifier aman dan tidak bergantung pada urutan insert
- lebih cocok untuk sistem modern dan API yang terpisah
- mempermudah migrasi dan integrasi di masa depan

### 3.3 Time and Timestamp

- Semua timestamp menggunakan TIMESTAMPTZ.
- Konvensi: dibuat_pada, diperbarui_pada, dihapus_pada.

### 3.4 JSONB Usage

JSONB digunakan hanya untuk metadata yang fleksibel, misalnya:
- metadata pada aktivitas audit
- metadata lampiran atau konteks file yang tidak membutuhkan relasi kolom tetap

JSONB tidak digunakan untuk menggantikan relasi utama atau tabel domain.

### 3.5 TEXT vs VARCHAR

- Gunakan TEXT untuk data teks yang panjang atau tidak terikat panjang tetap.
- Gunakan VARCHAR(n) untuk field yang perlu dibatasi panjang, misalnya email, kode, singkatan status, nama tampilan.

### 3.6 Numeric Types for Money

Semua nilai uang menggunakan NUMERIC, bukan FLOAT.

Contoh:
- nominal NUMERIC(12,2)
- jumlah_bayar NUMERIC(12,2)

### 3.7 Index Strategy

Index dibuat untuk pencarian, filter, join, dan query yang sering dipakai. Index yang tidak memberi manfaat yang jelas sebaiknya dihindari.

---

## 4. Naming Convention

Konvensi penamaan yang dipakai di seluruh skema adalah:

### Tables
- snake_case
- nama bahasa Indonesia
- konsisten antara singular dan plural

Pilihan yang dipakai di dokumen ini:
- tabel menggunakan bentuk tunggal, misalnya pengguna, warga, pengumuman

### Columns
- snake_case
- bahasa Indonesia untuk domain bisnis
- untuk field teknis yang umum, gunakan nama yang jelas dan konsisten

### Primary Key
- id

### Foreign Key
- <nama_entitas>_id

Contoh:
- pengguna_id
- warga_id
- pengajuan_surat_id

### Timestamp Columns
- dibuat_pada
- diperbarui_pada
- dihapus_pada

Semua tabel utama dan subdomain mengikuti konvensi ini.

---

## 5. Common Column Strategy

Tabel yang mewakili record bisnis utama akan memiliki kolom umum berikut bila relevan:

- id: UUID primary key
- dibuat_pada: TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada: TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada: TIMESTAMPTZ NULL

### Entitas yang memakai soft delete

Soft delete digunakan untuk tabel yang perlu mempertahankan riwayat, audit, dan integritas data historis:
- pengguna
- warga
- pengumuman
- pengajuan_surat
- tagihan_iuran
- pembayaran_iuran
- pengaduan
- kegiatan
- berkas
- notifikasi

### Entitas yang tidak sebaiknya dihapus fisik

- aktivitas_audit: harus immutable dan tidak dihapus secara normal
- peran: biasanya nonaktifkan daripada hapus penuh
- jenis_surat: dapat dinonaktifkan melalui status atau flag aktif
- kategori_pengaduan: dapat dinonaktifkan daripada dihapus penuh

### Why soft delete is used

Soft delete membantu menjaga:
- riwayat transaksi
- audit trail
- konsistensi referensi
- keamanan data historis

---

## 6. Enum and Status Strategy

Skema WargaHub MVP menggunakan pendekatan yang konsisten:

- status domain utama menggunakan VARCHAR dengan CHECK constraint
- tabel referensi digunakan untuk entitas yang nilai-nilainya relatif stabil, misalnya peran, jenis_surat, kategori_pengaduan

### 6.1 Status pengguna

Nilai yang diizinkan:
- AKTIF
- TIDAK_AKTIF
- TERBLOKIR

### 6.2 Status warga

Nilai yang diizinkan:
- AKTIF
- PINDAH
- MENINGGAL
- TIDAK_AKTIF

### 6.3 Status pengumuman

Nilai yang diizinkan:
- DRAFT
- TERBIT
- DIARSIPKAN

### 6.4 Status pengajuan surat

Nilai yang diizinkan:
- DIAJUKAN
- DIPERIKSA
- DISETUJUI
- DITOLAK
- SELESAI

### 6.5 Status tagihan

Nilai yang diizinkan:
- BELUM_LUNAS
- LUNAS
- JATUH_TEMPO
- BATAL

### 6.6 Status pembayaran

Nilai yang diizinkan:
- DIBUAT
- TERKONFIRMASI
- DITOLAK
- DIBATALKAN

### 6.7 Status pengaduan

Nilai yang diizinkan:
- DIAJUKAN
- DITINJAU
- DITANGANI
- SELESAI
- DITUTUP

### 6.8 Status kegiatan

Nilai yang diizinkan:
- DRAFT
- TERJADWAL
- BERLANGSUNG
- SELESAI
- DIBATALKAN

### 6.9 Status notifikasi

Nilai yang diizinkan:
- BELUM_DIBACA
- DIBACA

### 6.10 Status aktif referensi

Untuk tabel referensi seperti jenis_surat dan kategori_pengaduan, gunakan `is_aktif BOOLEAN NOT NULL DEFAULT TRUE` sebagai bagian dari kontrol operasional.

---

## 7. Core Identity Tables

### 7.1 pengguna

Tabel ini menyimpan akun sistem untuk pengguna WargaHub.

Kolom:
- id UUID PRIMARY KEY
- email VARCHAR(255) NOT NULL UNIQUE
- username VARCHAR(100) NULL UNIQUE
- kata_sandi_hash TEXT NOT NULL
- nama_tampilan VARCHAR(150) NOT NULL
- status VARCHAR(30) NOT NULL CHECK (status IN ('AKTIF','TIDAK_AKTIF','TERBLOKIR'))
- terakhir_login_pada TIMESTAMPTZ NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Catatan:
- password tidak pernah disimpan dalam plaintext
- minimal satu dari email atau username harus tersedia sesuai kebijakan autentikasi

### 7.2 peran

Tabel ini menyimpan daftar peran yang valid.

Kolom:
- id UUID PRIMARY KEY
- kode VARCHAR(50) NOT NULL UNIQUE
- nama VARCHAR(100) NOT NULL UNIQUE
- deskripsi TEXT NULL
- is_aktif BOOLEAN NOT NULL DEFAULT TRUE
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

Contoh nilai kode:
- WARGA
- PENGURUS_RT
- PENGURUS_RW
- BENDAHARA
- ADMIN

### 7.3 pengguna_peran

Tabel relasi banyak-ke-banyak antara pengguna dan peran.

Kolom:
- id UUID PRIMARY KEY
- pengguna_id UUID NOT NULL REFERENCES pengguna(id) ON DELETE CASCADE
- peran_id UUID NOT NULL REFERENCES peran(id) ON DELETE RESTRICT
- diberi_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

Constraint:
- unique(pengguna_id, peran_id)

---

## 8. Resident Tables

### 8.1 warga

Tabel ini menyimpan profil warga yang menjadi bagian dari komunitas.

Kolom:
- id UUID PRIMARY KEY
- pengguna_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- nomor_identitas VARCHAR(100) NULL
- nama_lengkap VARCHAR(200) NOT NULL
- jenis_kelamin VARCHAR(20) NULL
- tempat_lahir VARCHAR(100) NULL
- tanggal_lahir DATE NULL
- nomor_telepon VARCHAR(30) NULL
- email VARCHAR(255) NULL
- status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','PINDAH','MENINGGAL','TIDAK_AKTIF'))
- catatan VARCHAR(500) NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Catatan:
- tidak menambahkan data identitas sensitif yang tidak dibutuhkan oleh SRS MVP
- hubungan dengan pengguna bersifat opsional karena tidak semua warga memiliki akun sistem

### 8.2 keluarga

Tabel ini menyimpan kelompok keluarga.

Kolom:
- id UUID PRIMARY KEY
- kode_keluarga VARCHAR(50) NULL UNIQUE
- nama_keluarga VARCHAR(200) NOT NULL
- alamat VARCHAR(255) NULL
- catatan TEXT NULL
- status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','TIDAK_AKTIF'))
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

### 8.3 anggota_keluarga

Tabel relasi antara warga dan keluarga.

Kolom:
- id UUID PRIMARY KEY
- keluarga_id UUID NOT NULL REFERENCES keluarga(id) ON DELETE CASCADE
- warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE CASCADE
- peran_dalam_keluarga VARCHAR(50) NULL
- status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','TIDAK_AKTIF'))
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

Constraint:
- unique(keluarga_id, warga_id)

### 8.4 rumah

Tabel ini menyimpan data rumah atau lokasi hunian.

Kolom:
- id UUID PRIMARY KEY
- alamat_lengkap TEXT NOT NULL
- rt VARCHAR(20) NULL
- rw VARCHAR(20) NULL
- kode_rumah VARCHAR(50) NULL UNIQUE
- catatan TEXT NULL
- status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','TIDAK_AKTIF'))
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

### 8.5 domisili

Tabel ini menyimpan hubungan historis antara warga dan rumah.

Kolom:
- id UUID PRIMARY KEY
- warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE CASCADE
- rumah_id UUID NOT NULL REFERENCES rumah(id) ON DELETE RESTRICT
- tanggal_mulai DATE NOT NULL
- tanggal_selesai DATE NULL
- status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','SELESAI','PINDAH'))
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

Relationship cardinality:
- satu warga dapat memiliki banyak domisili sepanjang waktu
- satu rumah dapat memiliki banyak warga yang tinggal di dalamnya pada periode yang berbeda

---

## 9. Announcement Tables

### 9.1 pengumuman

Tabel ini menyimpan pengumuman komunitas.

Kolom:
- id UUID PRIMARY KEY
- judul VARCHAR(255) NOT NULL
- isi TEXT NOT NULL
- status VARCHAR(30) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','TERBIT','DIARSIPKAN'))
- pengguna_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- tanggal_terbit TIMESTAMPTZ NULL
- tanggal_diarsipkan TIMESTAMPTZ NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Index:
- index pada status
- index pada tanggal_terbit
- index pada pengguna_id

---

## 10. Letter Tables

### 10.1 jenis_surat

Tabel katalog jenis surat.

Kolom:
- id UUID PRIMARY KEY
- kode VARCHAR(50) NOT NULL UNIQUE
- nama VARCHAR(150) NOT NULL
- deskripsi TEXT NULL
- persyaratan TEXT NULL
- is_aktif BOOLEAN NOT NULL DEFAULT TRUE
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

### 10.2 pengajuan_surat

Tabel ini menyimpan pengajuan surat dari warga.

Kolom:
- id UUID PRIMARY KEY
- warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE RESTRICT
- jenis_surat_id UUID NOT NULL REFERENCES jenis_surat(id) ON DELETE RESTRICT
- judul VARCHAR(255) NOT NULL
- keterangan TEXT NULL
- status VARCHAR(30) NOT NULL DEFAULT 'DIAJUKAN' CHECK (status IN ('DIAJUKAN','DIPERIKSA','DISETUJUI','DITOLAK','SELESAI'))
- diajukan_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperiksa_pada TIMESTAMPTZ NULL
- disetujui_pada TIMESTAMPTZ NULL
- ditolak_pada TIMESTAMPTZ NULL
- selesai_pada TIMESTAMPTZ NULL
- diperiksa_oleh UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- disetujui_oleh UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- ditolak_oleh UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- alasan_penolakan TEXT NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Status transition notes:
- status harus diproses oleh aturan bisnis aplikasi, bukan hanya melalui UI
- perubahan status harus dicatat oleh audit

---

## 11. Dues and Payment Tables

### 11.1 iuran

Tabel katalog jenis iuran.

Kolom:
- id UUID PRIMARY KEY
- kode VARCHAR(50) NOT NULL UNIQUE
- nama VARCHAR(150) NOT NULL
- deskripsi TEXT NULL
- nominal NUMERIC(12,2) NOT NULL DEFAULT 0
- periode VARCHAR(50) NULL
- is_aktif BOOLEAN NOT NULL DEFAULT TRUE
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

### 11.2 tagihan_iuran

Tabel tagihan individu untuk setiap warga.

Kolom:
- id UUID PRIMARY KEY
- warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE CASCADE
- iuran_id UUID NOT NULL REFERENCES iuran(id) ON DELETE RESTRICT
- nominal NUMERIC(12,2) NOT NULL CHECK (nominal >= 0)
- tanggal_jatuh_tempo DATE NOT NULL
- status VARCHAR(30) NOT NULL DEFAULT 'BELUM_LUNAS' CHECK (status IN ('BELUM_LUNAS','LUNAS','JATUH_TEMPO','BATAL'))
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

### 11.3 pembayaran_iuran

Tabel pencatatan pembayaran.

Kolom:
- id UUID PRIMARY KEY
- tagihan_iuran_id UUID NOT NULL REFERENCES tagihan_iuran(id) ON DELETE RESTRICT
- warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE RESTRICT
- jumlah_bayar NUMERIC(12,2) NOT NULL CHECK (jumlah_bayar >= 0)
- metode_pembayaran VARCHAR(50) NULL
- status VARCHAR(30) NOT NULL DEFAULT 'DIBUAT' CHECK (status IN ('DIBUAT','TERKONFIRMASI','DITOLAK','DIBATALKAN'))
- diverifikasi_oleh UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- diverifikasi_pada TIMESTAMPTZ NULL
- catatan TEXT NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Important notes:
- semua nilai keuangan menggunakan NUMERIC
- pembayaran yang sudah diverifikasi tidak boleh dihapus secara sembarangan
- transaksi keuangan harus tercatat dan dapat diaudit

---

## 12. Complaint Tables

### 12.1 kategori_pengaduan

Tabel daftar kategori pengaduan.

Kolom:
- id UUID PRIMARY KEY
- kode VARCHAR(50) NOT NULL UNIQUE
- nama VARCHAR(150) NOT NULL
- deskripsi TEXT NULL
- is_aktif BOOLEAN NOT NULL DEFAULT TRUE
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

### 12.2 pengaduan

Tabel ini menyimpan pengaduan warga.

Kolom:
- id UUID PRIMARY KEY
- warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE RESTRICT
- kategori_pengaduan_id UUID NOT NULL REFERENCES kategori_pengaduan(id) ON DELETE RESTRICT
- judul VARCHAR(255) NOT NULL
- deskripsi TEXT NOT NULL
- status VARCHAR(30) NOT NULL DEFAULT 'DIAJUKAN' CHECK (status IN ('DIAJUKAN','DITINJAU','DITANGANI','SELESAI','DITUTUP'))
- penangan_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- resolusi TEXT NULL
- tanggal_resolusi TIMESTAMPTZ NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Index:
- index pada status
- index pada warga_id
- index pada penangan_id

---

## 13. Activity Tables

### 13.1 kegiatan

Tabel ini menyimpan kegiatan lingkungan.

Kolom:
- id UUID PRIMARY KEY
- judul VARCHAR(255) NOT NULL
- deskripsi TEXT NULL
- lokasi VARCHAR(255) NULL
- tanggal_mulai TIMESTAMPTZ NULL
- tanggal_selesai TIMESTAMPTZ NULL
- status VARCHAR(30) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','TERJADWAL','BERLANGSUNG','SELESAI','DIBATALKAN'))
- pengguna_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

### 13.2 peserta_kegiatan

Tabel ini menyimpan partisipasi warga pada kegiatan bila fitur partisipasi dipakai.

Kolom:
- id UUID PRIMARY KEY
- kegiatan_id UUID NOT NULL REFERENCES kegiatan(id) ON DELETE CASCADE
- warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE CASCADE
- status VARCHAR(30) NOT NULL DEFAULT 'TERDAFTAR' CHECK (status IN ('TERDAFTAR','DIBATALKAN'))
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

Constraint:
- unique(kegiatan_id, warga_id)

---

## 14. Notification Tables

### 14.1 notifikasi

Tabel ini menyimpan notifikasi internal untuk pengguna.

Kolom:
- id UUID PRIMARY KEY
- pengguna_id UUID NOT NULL REFERENCES pengguna(id) ON DELETE CASCADE
- tipe VARCHAR(100) NOT NULL
- judul VARCHAR(255) NOT NULL
- isi TEXT NULL
- status VARCHAR(30) NOT NULL DEFAULT 'BELUM_DIBACA' CHECK (status IN ('BELUM_DIBACA','DIBACA'))
- entitas_tipe VARCHAR(100) NULL
- entitas_id UUID NULL
- dibaca_pada TIMESTAMPTZ NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Index:
- index pada pengguna_id dan status untuk query unread

---

## 15. File Tables

### 15.1 berkas

Tabel ini menyimpan metadata file pendukung.

Kolom:
- id UUID PRIMARY KEY
- pengguna_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- entitas_tipe VARCHAR(100) NULL
- entitas_id UUID NULL
- nama_asli VARCHAR(255) NOT NULL
- storage_key TEXT NOT NULL
- mime_type VARCHAR(100) NOT NULL
- ukuran_bytes BIGINT NOT NULL CHECK (ukuran_bytes >= 0)
- hash_file VARCHAR(128) NULL
- metadata_json JSONB NULL
- status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','TIDAK_AKTIF','Dihapus'))
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
- dihapus_pada TIMESTAMPTZ NULL

Catatan:
- tabel ini tidak menyimpan file biner secara langsung
- path internal tidak boleh diekspos melalui API
- akses file harus dikendalikan server-side

---

## 16. Audit Tables

### 16.1 aktivitas_audit

Tabel ini menyimpan jejak aktivitas penting.

Kolom:
- id UUID PRIMARY KEY
- pengguna_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL
- aksi VARCHAR(100) NOT NULL
- entitas_tipe VARCHAR(100) NOT NULL
- entitas_id UUID NULL
- metadata_json JSONB NULL
- ip_address INET NULL
- dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()

Catatan:
- tabel audit dianggap immutable untuk MVP
- record audit tidak boleh dihapus secara normal
- data sensitif dalam metadata harus dibatasi

---

## 17. Complete Relationship Map

| Parent Table | Child Table | Relationship | Foreign Key | Delete Strategy |
|---|---|---|---|---|
| pengguna | pengguna_peran | satu pengguna memiliki banyak peran | pengguna_peran.pengguna_id -> pengguna.id | CASCADE |
| peran | pengguna_peran | satu peran dapat dipakai banyak pengguna | pengguna_peran.peran_id -> peran.id | RESTRICT |
| pengguna | pengumuman | satu pengguna dapat membuat banyak pengumuman | pengumuman.pengguna_id -> pengguna.id | SET NULL |
| warga | pengajuan_surat | satu warga dapat membuat banyak pengajuan surat | pengajuan_surat.warga_id -> warga.id | RESTRICT |
| jenis_surat | pengajuan_surat | satu jenis surat dapat dipakai banyak pengajuan | pengajuan_surat.jenis_surat_id -> jenis_surat.id | RESTRICT |
| pengguna | pengajuan_surat (reviewer) | satu pengguna bisa meninjau banyak pengajuan | pengajuan_surat.diperiksa_oleh -> pengguna.id | SET NULL |
| pengguna | pengajuan_surat (approval) | satu pengguna bisa menyetujui banyak pengajuan | pengajuan_surat.disetujui_oleh -> pengguna.id | SET NULL |
| pengguna | pengajuan_surat (rejection) | satu pengguna bisa menolak banyak pengajuan | pengajuan_surat.ditolak_oleh -> pengguna.id | SET NULL |
| warga | tagihan_iuran | satu warga memiliki banyak tagihan | tagihan_iuran.warga_id -> warga.id | CASCADE |
| iuran | tagihan_iuran | satu iuran dapat dipakai banyak tagihan | tagihan_iuran.iuran_id -> iuran.id | RESTRICT |
| tagihan_iuran | pembayaran_iuran | satu tagihan dapat memiliki banyak pembayaran | pembayaran_iuran.tagihan_iuran_id -> tagihan_iuran.id | RESTRICT |
| warga | pembayaran_iuran | satu warga dapat memiliki banyak pembayaran | pembayaran_iuran.warga_id -> warga.id | RESTRICT |
| pengguna | pembayaran_iuran (verifier) | satu pengguna dapat memverifikasi banyak pembayaran | pembayaran_iuran.diverifikasi_oleh -> pengguna.id | SET NULL |
| warga | pengaduan | satu warga dapat membuat banyak pengaduan | pengaduan.warga_id -> warga.id | RESTRICT |
| kategori_pengaduan | pengaduan | satu kategori dapat dipakai banyak pengaduan | pengaduan.kategori_pengaduan_id -> kategori_pengaduan.id | RESTRICT |
| pengguna | pengaduan (handler) | satu pengguna dapat menangani banyak pengaduan | pengaduan.penangan_id -> pengguna.id | SET NULL |
| pengguna | kegiatan | satu pengguna dapat membuat banyak kegiatan | kegiatan.pengguna_id -> pengguna.id | SET NULL |
| kegiatan | peserta_kegiatan | satu kegiatan dapat memiliki banyak peserta | peserta_kegiatan.kegiatan_id -> kegiatan.id | CASCADE |
| warga | peserta_kegiatan | satu warga dapat mendaftar di banyak kegiatan | peserta_kegiatan.warga_id -> warga.id | CASCADE |
| pengguna | notifikasi | satu pengguna dapat menerima banyak notifikasi | notifikasi.pengguna_id -> pengguna.id | CASCADE |
| pengguna | berkas | satu pengguna dapat mengunggah banyak file | berkas.pengguna_id -> pengguna.id | SET NULL |
| pengguna | aktivitas_audit | satu pengguna dapat melakukan banyak aktivitas audit | aktivitas_audit.pengguna_id -> pengguna.id | SET NULL |
| warga | domisili | satu warga dapat memiliki banyak domisili | domisili.warga_id -> warga.id | CASCADE |
| rumah | domisili | satu rumah dapat memiliki banyak domisili | domisili.rumah_id -> rumah.id | RESTRICT |
| keluarga | anggota_keluarga | satu keluarga memiliki banyak anggota | anggota_keluarga.keluarga_id -> keluarga.id | CASCADE |
| warga | anggota_keluarga | satu warga dapat masuk ke banyak keluarga | anggota_keluarga.warga_id -> warga.id | CASCADE |

---

## 18. Index Strategy

Index yang disarankan untuk MVP:

- Login lookup: index pada pengguna.email, pengguna.username, pengguna.status
- Resident search: index pada warga.nama_lengkap, warga.status, warga.nomor_telepon
- Status filtering: index pada status untuk tabel dengan filter status yang sering dipakai
- Letter status: index pada pengajuan_surat.status dan warga_id
- Payment status: index pada tagihan_iuran.status, pembayaran_iuran.status, dan warga_id
- Complaint status: index pada pengaduan.status dan penangan_id
- Notification unread lookup: index pada notifikasi.pengguna_id dan notifikasi.status
- Audit lookup: index pada aktivitas_audit.entitas_tipe, aktivitas_audit.entitas_id, dan aktivitas_audit.dibuat_pada

Index tambahan hanya dibuat bila query aktual menunjukkan kebutuhan.

---

## 19. Constraint Strategy

Constraint yang diterapkan:

- Primary keys: UUID primary key untuk semua tabel utama
- Foreign keys: memastikan relasi valid
- Unique constraints: mencegah duplikasi seperti email, kode peran, kode iuran, atau relasi anggota keluarga
- NOT NULL: field yang wajib diisi untuk kelangsungan data bisnis
- CHECK constraints: membatasi nilai status dan nilai positif untuk jumlah keuangan
- Positive money constraints: nominal dan jumlah_bayar harus >= 0
- Valid date constraints: tanggal mulai tidak boleh setelah tanggal selesai bila keduanya diisi

---

## 20. DDL Reference

Berikut adalah contoh DDL PostgreSQL yang konsisten dengan skema di atas. Ini adalah referensi representatif, bukan migrasi resmi.

```sql
CREATE TABLE pengguna (
    id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(100) NULL UNIQUE,
    kata_sandi_hash TEXT NOT NULL,
    nama_tampilan VARCHAR(150) NOT NULL,
    status VARCHAR(30) NOT NULL CHECK (status IN ('AKTIF','TIDAK_AKTIF','TERBLOKIR')),
    terakhir_login_pada TIMESTAMPTZ NULL,
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    dihapus_pada TIMESTAMPTZ NULL
);

CREATE TABLE peran (
    id UUID PRIMARY KEY,
    kode VARCHAR(50) NOT NULL UNIQUE,
    nama VARCHAR(100) NOT NULL UNIQUE,
    deskripsi TEXT NULL,
    is_aktif BOOLEAN NOT NULL DEFAULT TRUE,
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE pengguna_peran (
    id UUID PRIMARY KEY,
    pengguna_id UUID NOT NULL REFERENCES pengguna(id) ON DELETE CASCADE,
    peran_id UUID NOT NULL REFERENCES peran(id) ON DELETE RESTRICT,
    diberi_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (pengguna_id, peran_id)
);

CREATE TABLE warga (
    id UUID PRIMARY KEY,
    pengguna_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL,
    nomor_identitas VARCHAR(100) NULL,
    nama_lengkap VARCHAR(200) NOT NULL,
    jenis_kelamin VARCHAR(20) NULL,
    tempat_lahir VARCHAR(100) NULL,
    tanggal_lahir DATE NULL,
    nomor_telepon VARCHAR(30) NULL,
    email VARCHAR(255) NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','PINDAH','MENINGGAL','TIDAK_AKTIF')),
    catatan VARCHAR(500) NULL,
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    dihapus_pada TIMESTAMPTZ NULL
);

CREATE TABLE keluarga (
    id UUID PRIMARY KEY,
    kode_keluarga VARCHAR(50) NULL UNIQUE,
    nama_keluarga VARCHAR(200) NOT NULL,
    alamat VARCHAR(255) NULL,
    catatan TEXT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','TIDAK_AKTIF')),
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    dihapus_pada TIMESTAMPTZ NULL
);

CREATE TABLE anggota_keluarga (
    id UUID PRIMARY KEY,
    keluarga_id UUID NOT NULL REFERENCES keluarga(id) ON DELETE CASCADE,
    warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE CASCADE,
    peran_dalam_keluarga VARCHAR(50) NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','TIDAK_AKTIF')),
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (keluarga_id, warga_id)
);

CREATE TABLE rumah (
    id UUID PRIMARY KEY,
    alamat_lengkap TEXT NOT NULL,
    rt VARCHAR(20) NULL,
    rw VARCHAR(20) NULL,
    kode_rumah VARCHAR(50) NULL UNIQUE,
    catatan TEXT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','TIDAK_AKTIF')),
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    dihapus_pada TIMESTAMPTZ NULL
);

CREATE TABLE domisili (
    id UUID PRIMARY KEY,
    warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE CASCADE,
    rumah_id UUID NOT NULL REFERENCES rumah(id) ON DELETE RESTRICT,
    tanggal_mulai DATE NOT NULL,
    tanggal_selesai DATE NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF','SELESAI','PINDAH')),
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE pengumuman (
    id UUID PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    isi TEXT NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','TERBIT','DIARSIPKAN')),
    pengguna_id UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL,
    tanggal_terbit TIMESTAMPTZ NULL,
    tanggal_diarsipkan TIMESTAMPTZ NULL,
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    dihapus_pada TIMESTAMPTZ NULL
);

CREATE TABLE jenis_surat (
    id UUID PRIMARY KEY,
    kode VARCHAR(50) NOT NULL UNIQUE,
    nama VARCHAR(150) NOT NULL,
    deskripsi TEXT NULL,
    persyaratan TEXT NULL,
    is_aktif BOOLEAN NOT NULL DEFAULT TRUE,
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE pengajuan_surat (
    id UUID PRIMARY KEY,
    warga_id UUID NOT NULL REFERENCES warga(id) ON DELETE RESTRICT,
    jenis_surat_id UUID NOT NULL REFERENCES jenis_surat(id) ON DELETE RESTRICT,
    judul VARCHAR(255) NOT NULL,
    keterangan TEXT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'DIAJUKAN' CHECK (status IN ('DIAJUKAN','DIPERIKSA','DISETUJUI','DITOLAK','SELESAI')),
    diajukan_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperiksa_pada TIMESTAMPTZ NULL,
    disetujui_pada TIMESTAMPTZ NULL,
    ditolak_pada TIMESTAMPTZ NULL,
    selesai_pada TIMESTAMPTZ NULL,
    diperiksa_oleh UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL,
    disetujui_oleh UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL,
    ditolak_oleh UUID NULL REFERENCES pengguna(id) ON DELETE SET NULL,
    alasan_penolakan TEXT NULL,
    dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    diperbarui_pada TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    dihapus_pada TIMESTAMPTZ NULL
);
```

DDL tambahan untuk tabel keuangan, pengaduan, kegiatan, notifikasi, berkas, dan audit dapat dibuat mengikuti pola yang sama saat implementasi dimulai.

---

## 21. Seed Data Strategy

Seed data untuk MVP harus aman, terbatas, dan tidak mengandung data pribadi nyata.

### Seed data yang disarankan

- peran awal: WARGA, PENGURUS_RT, PENGURUS_RW, BENDAHARA, ADMIN
- jenis_surat awal: surat keterangan domisili, surat keterangan usaha, surat pengantar, surat permohonan lain sesuai kebutuhan awal
- kategori_pengaduan awal: kebersihan, keamanan, ketertiban, fasilitas, lain-lain
- konfigurasi sistem dasar bila benar-benar dibutuhkan

Seed data tidak boleh berisi data real warga, data sensitif, atau akun produksi.

---

## 22. Migration Strategy

Strategi migrasi MVP:

- Gunakan nama migrasi yang jelas dan berurutan, misalnya 001_create_pengguna.sql.
- Terapkan migrasi dalam urutan yang aman: tabel referensi, tabel domain, tabel relasi, indeks, constraint tambahan.
- Migrasi harus dapat diterapkan maju (forward migration) dan dipahami untuk rollback terbatas.
- Perubahan skema yang memengaruhi data sebelumnya harus diuji terlebih dahulu.
- Produksi harus menghindari perubahan schema yang tidak terkontrol.
- Migrasi data besar harus dipersiapkan secara hati-hati dan disertai backup sebelum eksekusi.

---

## 23. Backup and Recovery

Ekspektasi MVP:

- backup rutin untuk database utama
- restore prosedur yang sederhana dan dapat diuji
- backup sebelum deployment skema yang signifikan
- pemulihan data harus dapat dilakukan dengan tahapan yang jelas

Tidak perlu membangun arsitektur backup kompleks di tahap MVP. Fokus pada keamanan data dan kemampuan pemulihan dasar.

---

## 24. Data Security

Prinsip keamanan data untuk skema MVP:

- kata sandi disimpan sebagai hash, bukan plaintext
- akses data sensitif dibatasi oleh otorisasi aplikasi dan database
- file hanya disimpan melalui mekanisme yang aman dan dikendalikan
- audit mencatat aktivitas penting
- kredensial database tidak boleh disimpan di source control
- environment variable atau secret manager dipakai untuk konfigurasi sensitif

Tidak ada secret, token, atau password yang boleh ditempatkan dalam repository secara terbuka.

---

## 25. MVP vs Future Schema

### MVP

Schema MVP mencakup:
- identity and access
- resident and household
- announcements
- letters
- dues and payments
- complaints
- activities
- notifications
- files
- audit

### Future

Schema berikut tidak termasuk dalam MVP inti:
- warehouse analytics untuk pelaporan canggih
- integrasi eksternal pemerintahan
- struktur data AI khusus
- multi-region atau multi-tenant data architecture
- persistence khusus untuk aplikasi mobile native

Skema future dapat diperluas saat kebutuhan nyata muncul.

---

## 26. Traceability

| Table | SRS Requirement | Epic | API Group | ERD Entity |
|---|---|---|---|---|
| pengguna | FR-001, FR-002, FR-003, SEC-001 | EPIC-AUTH | Auth API | pengguna |
| peran | FR-006, FR-007 | EPIC-ADMIN | User and Role Admin API | peran |
| pengguna_peran | FR-006, FR-007 | EPIC-ADMIN | User and Role Admin API | pengguna_peran |
| warga | FR-010, FR-011 | EPIC-RESIDENT | Resident API | warga |
| keluarga | FR-012, FR-013 | EPIC-FAMILY | Family and Household API | keluarga |
| anggota_keluarga | FR-012, FR-013 | EPIC-FAMILY | Family and Household API | anggota_keluarga |
| rumah | FR-010, FR-011 | EPIC-RESIDENT | Resident API | rumah |
| domisili | FR-010, FR-011 | EPIC-RESIDENT | Resident API | domisili |
| pengumuman | FR-020, FR-021 | EPIC-ANNOUNCEMENT | Announcement API | pengumuman |
| jenis_surat | FR-030, FR-031 | EPIC-LETTER | Letter API | jenis_surat |
| pengajuan_surat | FR-030, FR-031, FR-032 | EPIC-LETTER | Letter API | pengajuan_surat |
| iuran | FR-040, FR-041 | EPIC-DUES | Dues and Payment API | jenis_iuran |
| tagihan_iuran | FR-040, FR-041 | EPIC-DUES | Dues and Payment API | tagihan_iuran |
| pembayaran_iuran | FR-040, FR-041, FR-042 | EPIC-DUES | Dues and Payment API | pembayaran_iuran |
| kategori_pengaduan | FR-050, FR-051 | EPIC-COMPLAINT | Complaint API | kategori_pengaduan |
| pengaduan | FR-050, FR-051, FR-052 | EPIC-COMPLAINT | Complaint API | pengaduan |
| kegiatan | FR-060, FR-061 | EPIC-ACTIVITY | Activity API | kegiatan |
| peserta_kegiatan | FR-060, FR-061 | EPIC-ACTIVITY | Activity API | peserta_kegiatan |
| notifikasi | FR-070, FR-071 | EPIC-NOTIFICATION | Notification API | notifikasi |
| berkas | FR-080, FR-081 | EPIC-FILE | File API | berkas |
| aktivitas_audit | SEC-010, NFR-010 | EPIC-AUDIT | Audit API | aktivitas_audit |

---

## 27. Database Quality Checklist

- Every table has a clear purpose.
- Every relationship is documented.
- Foreign keys are defined.
- Delete behavior is defined.
- Financial values use NUMERIC.
- Sensitive data is protected.
- Indexes are justified.
- Constraints are defined.
- Status values are consistent.
- Schema is traceable to requirements.
- MVP and future scope are separated.

---

## 28. Change Log

| Version | Date | Summary |
|---|---|---|
| 0.1.0 | 2026-07-18 | Initial database schema specification draft for the WargaHub MVP |
