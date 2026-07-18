# WargaHub Project Manifest

> Single source of truth untuk identitas, arah, dan struktur proyek WargaHub.

---

## 1. Project Identity

| Item | Value |
|---|---|
| Project Name | WargaHub |
| Project Type | Community Management Platform |
| Current Version | 0.1.0 |
| Current Phase | Foundation |
| Development Methodology | Scrum |
| Repository | WargaHub |
| Primary Language | TypeScript |
| Documentation Language | Bahasa Indonesia |

---

## 2. Project Overview

WargaHub adalah platform digital untuk membantu pengelolaan lingkungan RT/RW.

Aplikasi ini dirancang untuk menghubungkan:

- Warga
- Pengurus RT
- Pengurus RW
- Bendahara
- Administrator

dalam satu platform digital yang sederhana, informatif, dan mudah digunakan.

---

## 3. Problem Statement

Banyak proses administrasi lingkungan masih dilakukan secara manual.

Contohnya:

- Pendataan warga menggunakan spreadsheet.
- Pengumuman disampaikan melalui banyak grup chat.
- Pengajuan surat dilakukan secara manual.
- Pencatatan iuran tidak transparan.
- Pengaduan warga sulit dilacak.
- Informasi kegiatan tidak terdokumentasi dengan baik.

WargaHub dibuat untuk membantu menyelesaikan masalah tersebut.

---

## 4. Product Vision

Membangun platform digital yang membantu masyarakat dan pengurus lingkungan mengelola administrasi, komunikasi, pelayanan, dan transparansi lingkungan secara lebih modern.

---

## 5. Product Goals

### Primary Goals

1. Memudahkan warga mengakses layanan lingkungan.
2. Membantu pengurus mengelola data secara terstruktur.
3. Meningkatkan transparansi administrasi.
4. Mengurangi proses manual.
5. Menyediakan informasi yang mudah diakses.

---

## 6. Target Users

### Warga

Dapat:

- Melihat pengumuman.
- Mengajukan surat.
- Melihat informasi iuran.
- Melakukan pengaduan.
- Melihat kegiatan lingkungan.

### Pengurus RT

Dapat:

- Mengelola data warga.
- Mengelola surat.
- Membuat pengumuman.
- Memproses pengaduan.
- Mengelola kegiatan.

### Pengurus RW

Dapat:

- Melihat data agregat RT.
- Mengelola informasi tingkat RW.
- Melihat laporan lingkungan.

### Bendahara

Dapat:

- Mengelola iuran.
- Mencatat pembayaran.
- Melihat laporan keuangan.

### Administrator

Dapat:

- Mengelola sistem.
- Mengelola pengguna.
- Mengelola konfigurasi.

---

## 7. MVP Scope

MVP WargaHub mencakup:

### Authentication

- Login.
- Logout.
- Role-based access.
- Manajemen session.

### Dashboard

- Ringkasan informasi.
- Statistik warga.
- Informasi pengumuman.
- Ringkasan aktivitas.

### Data Warga

- Daftar warga.
- Detail warga.
- Data keluarga.
- Data rumah.
- Status warga.

### Pengumuman

- Membuat pengumuman.
- Mengubah pengumuman.
- Menghapus pengumuman.
- Melihat pengumuman.

### Surat

- Daftar jenis surat.
- Pengajuan surat.
- Status pengajuan.
- Persetujuan surat.

### Iuran

- Jenis iuran.
- Tagihan.
- Pembayaran.
- Riwayat pembayaran.

### Pengaduan

- Membuat pengaduan.
- Melihat status pengaduan.
- Menanggapi pengaduan.
- Menutup pengaduan.

---

## 8. Out of Scope MVP

Fitur berikut belum menjadi prioritas MVP:

- Mobile native application.
- Payment gateway kompleks.
- Integrasi Dukcapil.
- WhatsApp API resmi.
- Multi-tenant enterprise.
- Artificial Intelligence chatbot.
- Integrasi pemerintahan eksternal.

Fitur tersebut dapat dipertimbangkan pada fase berikutnya.

---

## 9. Product Principles

WargaHub harus mengikuti prinsip:

### Simple

Fitur harus mudah dipahami.

### User Friendly

Pengguna tidak boleh membutuhkan pengetahuan teknis.

### Informative

Informasi penting harus mudah ditemukan.

### Transparent

Data administrasi yang relevan harus dapat dipantau secara jelas.

### Secure

Data pribadi harus dilindungi.

### Responsive

Aplikasi harus nyaman digunakan pada:

- Desktop.
- Tablet.
- Mobile.

---

## 10. Technology Direction

### Frontend

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- shadcn/ui.
- TanStack Query.
- React Hook Form.
- Zod.

### Backend

- Node.js.
- Express.js.
- TypeScript.
- Prisma ORM.
- PostgreSQL.

### Infrastructure

- Docker.
- GitHub Actions.
- Cloud deployment.

---

## 11. Repository Structure

```text
WargaHub/
│
├── .ai/
│   ├── AI_CONTEXT.md
│   ├── PROJECT_RULES.md
│   └── SYSTEM_PROMPT.md
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
│
├── apps/
│   ├── web/
│   └── api/
│
├── packages/
│   ├── ui/
│   ├── config/
│   └── types/
│
├── docs/
│
├── docker/
│
├── scripts/
│
├── PROJECT_MANIFEST.md
├── README.md
├── LICENSE
├── .gitignore
├── .editorconfig
└── .gitattributes