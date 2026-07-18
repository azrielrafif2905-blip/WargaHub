# WargaHub AI Context

## Purpose

Dokumen ini adalah sumber konteks utama untuk pengembangan AI-assisted di proyek WargaHub. Tujuannya adalah memastikan semua kontribusi teknis, dokumentasi, dan keputusan desain tetap konsisten dengan identitas produk, arah bisnis, dan batasan proyek.

Dokumen ini bukan sekadar template; dokumen ini harus diperlakukan sebagai referensi operasional untuk memahami apa yang sedang dibangun, mengapa dibangun, dan bagaimana pembangunan harus dilakukan.

---

## 1. Project Identity

- Project Name: WargaHub
- Project Type: Community Management Platform
- Current Version: 0.1.0
- Current Phase: Foundation
- Development Methodology: Scrum
- Repository: WargaHub
- Primary Language: TypeScript
- Documentation Language: Bahasa Indonesia
- Primary Goal: Menyediakan platform digital sederhana untuk pengelolaan administrasi dan komunikasi lingkungan RT/RW

---

## 2. Product Overview

WargaHub adalah platform digital yang dirancang untuk membantu pengelolaan lingkungan RT/RW secara lebih terstruktur, transparan, dan efisien. Platform ini menggabungkan kebutuhan administrasi internal komunitas dengan kebutuhan layanan publik sederhana yang bisa diakses oleh warga.

Secara bisnis, WargaHub bertujuan menjadi sistem digital sentral untuk:

- administrasi warga
- komunikasi pengumuman
- pengajuan surat
- pencatatan iuran
- pengelolaan pengaduan
- dokumentasi kegiatan lingkungan

Produk ini diharapkan mempermudah kerja pengurus lingkungan tanpa membuat proses menjadi rumit secara teknis. Karena itu, pendekatan utama adalah kesederhanaan, kejelasan informasi, dan aksesibilitas bagi pengguna dengan berbagai tingkat literasi digital.

---

## 3. Problem Statement

Banyak proses administrasi lingkungan saat ini masih dijalankan secara manual atau tersebar di beberapa kanal yang tidak terintegrasi. Kondisi ini menimbulkan berbagai masalah, antara lain:

- pendataan warga sering disimpan dalam spreadsheet atau catatan manual
- pengumuman sering tersebar di grup chat yang tidak terdokumentasi dengan baik
- pengajuan surat dilakukan secara berulang dan tidak tertrack dengan jelas
- pencatatan iuran tidak selalu transparan atau mudah diakses
- pengaduan warga sulit dipantau sampai selesai
- informasi kegiatan lingkungan tidak selalu terdokumentasi secara konsisten

WargaHub hadir untuk mengatasi permasalahan tersebut dengan pendekatan digital yang terorganisir dan ramah pengguna.

---

## 4. Product Vision

Membangun platform digital yang membantu masyarakat dan pengurus lingkungan mengelola administrasi, komunikasi, pelayanan, dan transparansi secara lebih modern, aman, dan mudah dipahami.

Visi ini menekankan bahwa teknologi tidak boleh menjadi hambatan. Platform harus terasa sebagai alat bantu yang berguna bagi komunitas, bukan sistem yang kompleks dan sulit dipakai.

---

## 5. Product Goals

### Primary Goals

1. Memudahkan warga mengakses layanan lingkungan secara digital.
2. Membantu pengurus mengelola data secara lebih terstruktur dan konsisten.
3. Meningkatkan transparansi administrasi dan keuangan komunitas.
4. Mengurangi proses manual dan duplikasi kerja.
5. Menyediakan informasi lingkungan yang mudah diakses oleh semua pihak yang berwenang.

### Secondary Goals

- Menyediakan fondasi untuk pengembangan fitur lanjutan di masa depan.
- Mendorong adopsi digital di tingkat lingkungan RT/RW.
- Mengurangi ketergantungan pada alat komunikasi informal yang tidak terdokumentasi.

---

## 6. Target Users

### Warga

Warga adalah pengguna utama yang membutuhkan akses ke informasi lingkungan dan layanan administratif sederhana. Mereka mengharapkan pengalaman yang ringan, cepat, dan tidak membingungkan.

### Pengurus RT

Pengurus RT membutuhkan alat untuk mengelola data warga, surat, pengumuman, kegiatan, dan pengaduan secara lebih efisien.

### Pengurus RW

Pengurus RW membutuhkan gambaran agregat dan informasi tingkat lingkungan yang lebih luas, termasuk ringkasan aktivitas dan situasi administrasi di wilayahnya.

### Bendahara

Bendahara membutuhkan alat untuk mengelola iuran, tagihan, pembayaran, dan pelaporan keuangan secara terstruktur.

### Administrator

Administrator bertanggung jawab atas pengelolaan sistem, pengguna, dan konfigurasi platform secara umum.

---

## 7. User Roles

Sistem diharapkan menggunakan model role-based access control. Setiap peran memiliki batasan akses sesuai tanggung jawabnya.

- Warga: melihat informasi publik, mengajukan permintaan, melihat status, dan mengirim pengaduan.
- Pengurus RT: mengelola data operasional RT dan memproses aktivitas harian.
- Pengurus RW: melihat data lintas RT dan mengawasi informasi tingkat RW.
- Bendahara: mengelola transaksi iuran dan laporan keuangan.
- Administrator: mengelola sistem dan konfigurasi keamanan serta pengguna.

Peran harus dirancang untuk mencegah akses yang tidak perlu terhadap data sensitif.

---

## 8. Core Business Domains

WargaHub mencakup beberapa domain bisnis inti yang saling terkait:

- Community Administration: data warga, rumah, keluarga, status tinggal, dan struktur organisasi lingkungan.
- Communication: pengumuman, pemberitahuan, dan informasi kegiatan.
- Service Requests: pengajuan surat dan workflow persetujuan.
- Finance: iuran, tagihan, pembayaran, dan pelaporan keuangan.
- Complaint Handling: pengaduan warga, penanganan, status, dan penutupan.
- Governance: peran, akses, kebijakan, dan pelacakan tindakan administratif.

Domain-domain ini harus diperlakukan sebagai modul yang jelas dan terhubung, bukan sebagai fitur yang terisolasi.

---

## 9. MVP Scope

MVP WargaHub mencakup fitur-fitur prioritas berikut:

### Authentication

- login
- logout
- session management
- role-based access

### Dashboard

- ringkasan informasi
- statistik warga
- daftar pengumuman terbaru
- ringkasan aktivitas

### Data Warga

- daftar warga
- detail warga
- data keluarga
- data rumah
- status warga

### Pengumuman

- membuat pengumuman
- mengubah pengumuman
- menghapus pengumuman
- melihat pengumuman

### Surat

- daftar jenis surat
- pengajuan surat
- status pengajuan
- persetujuan surat

### Iuran

- jenis iuran
- tagihan
- pembayaran
- riwayat pembayaran

### Pengaduan

- membuat pengaduan
- melihat status pengaduan
- menanggapi pengaduan
- menutup pengaduan

MVP harus fokus pada kelengkapan fungsional dasar, bukan pada ekosistem fitur yang luas.

---

## 10. Out of Scope for MVP

Fitur berikut belum menjadi prioritas MVP:

- mobile native application
- payment gateway kompleks
- integrasi Dukcapil
- WhatsApp API resmi
- multi-tenant enterprise
- artificial intelligence chatbot
- integrasi pemerintahan eksternal

Fitur-fitur ini dapat dipertimbangkan pada fase berikutnya jika kebutuhan pengguna dan kapasitas tim memungkinkan.

---

## 11. Business Terminology

Beberapa istilah bisnis yang penting dalam proyek ini:

- Warga: individu yang menjadi bagian dari lingkungan RT/RW.
- RT: Rukun Tetangga, unit lingkungan terkecil yang biasanya dikelola secara lokal.
- RW: Rukun Warga, unit lingkungan yang mencakup beberapa RT.
- Keluarga: kelompok warga yang terkait dalam satu rumah atau unit keluarga.
- Rumah: lokasi fisik yang menjadi basis data penduduk.
- Pengumuman: informasi resmi yang disampaikan kepada komunitas.
- Surat: dokumen layanan administratif yang diajukan oleh warga.
- Iuran: kontribusi rutin atau insidental yang dikelola oleh komunitas.
- Tagihan: jumlah yang harus dibayar oleh warga terkait iuran tertentu.
- Pembayaran: transaksi pelunasan tagihan.
- Pengaduan: laporan masalah atau kebutuhan yang dikirim warga.
- Bendahara: peran yang mengelola keuangan.
- Administrator: peran teknis dan operasional untuk mengelola sistem.

Istilah-istilah ini harus dipakai secara konsisten dalam UI, dokumentasi, dan kode.

---

## 12. Repository Structure

Repositori ini mengikuti struktur monorepo yang memisahkan aplikasi, paket bersama, dan dokumentasi.

```text
WargaHub/
├── .ai/
│   ├── AI_CONTEXT.md
│   ├── PROJECT_RULES.md
│   └── SYSTEM_PROMPT.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── ui/
│   ├── config/
│   └── types/
├── docs/
├── docker/
├── scripts/
├── PROJECT_MANIFEST.md
├── README.md
├── LICENSE
└── ...
```

### Repository Intent

- apps/web: frontend application
- apps/api: backend application
- packages/ui: reusable UI components
- packages/config: shared configuration and tooling
- packages/types: shared domain and API types
- docs: product and technical documentation
- docker: containerization support
- scripts: operational and automation scripts

Setiap perubahan harus mempertimbangkan dampaknya terhadap monorepo secara keseluruhan, terutama saat berbagi tipe, konfigurasi, dan komponen UI.

---

## 13. Technology Direction

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- TanStack Query
- React Hook Form
- Zod

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

### Infrastructure

- Docker
- GitHub Actions
- Cloud deployment

Teknologi yang dipilih harus mendukung pengembangan cepat, maintainability, dan kemampuan kerja sama tim yang baik.

---

## 14. Architecture Direction

Arsitektur proyek harus tetap sederhana, modular, dan mudah dipahami.

### Direction Principles

- monorepo untuk mengelola aplikasi dan paket bersama dalam satu repositori
- pemisahan yang jelas antara frontend, backend, dan shared packages
- penggunaan TypeScript di seluruh stack untuk mengurangi bug dan meningkatkan konsistensi
- pendekatan domain-oriented dan feature-oriented untuk pengorganisasian kode
- API dan UI harus berbagi kontrak tipe yang jelas

### Expected Architectural Shape

- frontend mengonsumsi API backend melalui endpoint yang terdefinisi dengan baik
- backend memegang logika bisnis dan validasi
- shared packages digunakan untuk komponen UI, konfigurasi, dan tipe lintas aplikasi
- struktur modul harus memudahkan penambahan fitur baru tanpa mengorbankan stabilitas

Arsitektur tidak boleh terlalu over-engineered di fase awal. Prioritas adalah penyelesaian kebutuhan MVP dengan kualitas yang cukup baik.

---

## 15. Database Direction

Basis data yang dituju adalah PostgreSQL dengan Prisma ORM.

### Direction Principles

- relational database untuk data komunitas yang terstruktur
- schema yang jelas untuk entitas seperti user, role, resident, household, announcement, letter, dues, payment, complaint
- migration-based development untuk menjaga konsistensi schema
- validasi data di level aplikasi dan database
- dukungan untuk audit trail dan status workflow yang jelas

### Data Model Expectations

Model data harus mencerminkan realitas penggunaan komunitas dan organisasi lingkungan, termasuk hubungan antar entitas yang kompleks namun tetap dapat dipahami.

---

## 16. API Direction

API backend diharapkan menggunakan arsitektur yang sederhana dan konsisten.

### Direction Principles

- RESTful-style endpoints dengan payload JSON
- strong typing dan validasi input
- role-based authorization pada resource yang sensitif
- error handling yang konsisten dan mudah dipahami
- clear separation between controller, service, and data access concerns

### API Expectations

- endpoint untuk autentikasi dan manajemen sesi
- endpoint untuk data warga, pengumuman, surat, iuran, dan pengaduan
- response format yang konsisten
- dokumentasi endpoint yang memadai untuk tim dan AI assistance

API tidak perlu menjadi kompleks di fase awal; yang penting adalah konsistensi, keamanan, dan kemampuan berkembang.

---

## 17. Frontend Direction

Frontend akan fokus pada pengalaman yang sederhana, cepat, dan jelas.

### Frontend Principles

- React dengan TypeScript
- desain berdasarkan component composition dan reuse
- state management yang ringan dan konsisten
- data fetching melalui library yang memudahkan caching dan loading state
- form handling dan validasi yang aman dan terstruktur

### UX Expectations

- antarmuka harus mudah dipahami oleh pengguna non-teknis
- navigasi harus jelas dan langsung
- informasi penting harus mudah ditemukan
- status proses harus terlihat dengan baik

---

## 18. UI/UX Principles

WargaHub harus mengikuti prinsip desain berikut:

- Simple: fitur harus mudah dipahami dan tidak membebani pengguna.
- User Friendly: pengguna tidak boleh membutuhkan pengetahuan teknis khusus untuk menjalankan fungsional dasar.
- Informative: informasi penting harus mudah ditemukan dan dipahami.
- Transparent: data administrasi yang relevan harus dapat dipantau secara jelas.
- Responsive: aplikasi harus nyaman digunakan di desktop, tablet, dan mobile.
- Accessible: antarmuka harus mempertimbangkan keterbacaan, kontras, navigasi, dan struktur yang jelas.

UI tidak boleh terlihat terlalu “enterprise” atau terlalu teknis. Fokus utamanya adalah pengalaman yang terasa membantu dan tidak membingungkan.

---

## 19. Security Principles

Keamanan adalah bagian penting dari produk dan bukan fitur tambahan.

### Security Priorities

- role-based access control untuk semua operasi sensitif
- perlindungan data pribadi dan data administratif
- enkripsi dalam transit dan praktik keamanan standar untuk autentikasi
- pencegahan akses tidak sah pada data warga dan keuangan
- logging dan audit trail yang memadai untuk operasi penting
- tidak menampilkan data sensitif secara luas tanpa otorisasi yang tepat

Prinsip keamanan harus diterapkan sejak tahap desain, bukan ditambahkan belakangan.

---

## 20. Development Methodology

Proyek ini mengikuti pendekatan Scrum dengan fokus pada increment yang terukur.

### Working Principles

- fitur dikembangkan dalam siklus yang kecil dan terarah
- setiap perubahan harus memiliki tujuan yang jelas
- prioritas produk ditentukan berdasarkan nilai bisnis dan kebutuhan pengguna
- kualitas teknis harus dijaga melalui struktur dan review yang konsisten
- dokumentasi dan konteks harus tetap diperbarui saat perubahan terjadi

Pengembangan tidak boleh mengorbankan arah produk untuk keuntungan teknis jangka pendek.

---

## 21. Scrum Workflow

Proses Scrum yang diharapkan:

1. Product backlog disusun berdasarkan prioritas fitur dan nilai pengguna.
2. Sprint planning menentukan scope yang realistis untuk satu siklus pengembangan.
3. Tim mengerjakan item yang telah disepakati dalam sprint.
4. Daily coordination menjaga agar progres tetap jelas dan hambatan segera teridentifikasi.
5. Sprint review menilai hasil kerja terhadap kebutuhan pengguna.
6. Sprint retrospective mengevaluasi kualitas proses dan peluang perbaikan.

Dalam fase foundation, fokus utama adalah menetapkan fondasi yang kuat untuk sprint-sprint berikutnya.

---

## 22. AI Collaboration Workflow

AI digunakan untuk membantu percepatan pengembangan, tetapi keputusan akhir tetap berada di tangan tim manusia.

### AI Usage Guidelines

- AI dapat membantu menulis struktur kode, dokumentasi, sketsa API, test case, dan draft implementasi.
- AI harus bekerja berdasarkan konteks proyek yang sudah ditetapkan di dokumen ini.
- Setiap output AI harus diperiksa untuk kesesuaian dengan kebutuhan bisnis, arsitektur, dan keamanan.
- AI tidak boleh mengambil keputusan produk yang berdampak besar tanpa review manusia.
- Perubahan desain yang signifikan harus dikonfirmasi terhadap manifest dan tujuan MVP.

### Collaboration Expectations

- gunakan bahasa yang jelas dan ringkas saat berinteraksi dengan AI
- pertahankan konsistensi terminologi bisnis dan teknis
- jangan mengandalkan AI untuk mengisi pemahaman domain yang belum diverifikasi
- selalu pertimbangkan batasan MVP dan prioritas proyek

Dokumen ini adalah landasan utama untuk interaksi AI yang konsisten dan bertanggung jawab.

---

## 23. Documentation Hierarchy

Dokumentasi proyek harus disusun dalam hierarki yang jelas:

1. PROJECT_MANIFEST.md: sumber kebenaran untuk identitas, arah, dan batasan proyek.
2. README.md: gambaran umum repositori dan cara memulai secara umum.
3. .ai/AI_CONTEXT.md: konteks penuh untuk AI-assisted development.
4. docs/: dokumentasi produk, arsitektur, dan keputusan teknis yang lebih detail.
5. code comments and inline documentation: penjelasan implementasi yang relevan di level kode.

Jika ada konflik informasi, manifest dan konteks AI harus diprioritaskan sebelum dokumentasi implementasi yang lebih rinci.

---

## 24. Decision-Making Principles

Keputusan dalam proyek ini harus didasarkan pada prinsip-prinsip berikut:

- prioritize user value over complexity
- keep the MVP simple and usable
- prefer clarity over cleverness
- use shared contracts and typed interfaces wherever possible
- treat security and privacy as non-negotiable requirements
- avoid premature expansion into features that are not yet validated

Keputusan yang dibuat harus selalu membantu proyek bergerak maju secara konsisten, bukan hanya cepat secara dangkal.

---

## 25. Current Project Status

Proyek WargaHub berada pada tahap fondasi awal.

### Current Status

- identitas produk dan arah bisnis sudah dirumuskan
- struktur repositori monorepo sudah mulai terbentuk
- fokus utama saat ini adalah penyelarasan visi, batasan MVP, dan landasan teknis
- implementasi fitur inti belum menjadi prioritas utama pada fase ini

Proyek ini masih dalam tahap perumusan dan penyediaan fondasi, bukan tahap ekspansi fitur besar.

---

## 26. Current Phase

Saat ini proyek berada dalam fase Foundation.

Fase ini menekankan:

- pemahaman kebutuhan pengguna
- penentuan cakupan MVP
- penyiapan struktur teknis dan organisasi kode
- konsistensi dokumentasi dan prinsip kerja tim

Tujuan utama fase ini adalah memastikan proyek memiliki landasan yang kuat sebelum berkembang ke implementasi fitur yang lebih luas.

---

## 27. Known Constraints

Beberapa batasan yang perlu dipertimbangkan selama pengembangan:

- tim masih dalam tahap awal dan kapasitas pengembangan terbatas
- fokus harus tetap pada MVP yang realistis
- tidak ada prioritas untuk aplikasi native yang berdiri sendiri
- integrasi eksternal tidak menjadi fokus utama di fase awal
- produk harus tetap sederhana agar mudah dipahami dan dikelola
- keamanan dan privasi data harus dipertimbangkan sejak awal

Kendala-kendala ini seharusnya memengaruhi prioritas dan batasan desain secara aktif.

---

## 28. Future Direction

Setelah MVP terbentuk dan diterima pengguna, arah pengembangan berikutnya dapat mencakup:

- penguatan fitur administrasi dan pelaporan
- peningkatan pengalaman mobile
- integrasi dengan layanan eksternal yang relevan
- otomatisasi proses bisnis yang berulang
- peningkatan analitik dan insight komunitas
- kemungkinan ekspansi ke kebutuhan organisasi yang lebih luas

Namun, perlu diingat bahwa pertumbuhan fitur harus dilakukan secara bertahap dan berdasarkan bukti kebutuhan pengguna, bukan sekadar ambisi produk.

---

## 29. Practical Guidance for Future Work

Saat mengerjakan proyek ini di masa depan, pertimbangkan hal-hal berikut:

- selalu mulai dari kebutuhan pengguna dan nilai bisnis
- gunakan dokumentasi ini sebagai acuan utama sebelum menambahkan fitur baru
- jaga agar MVP tetap sederhana dan dapat dipahami
- pilih solusi yang mudah dipelihara daripada solusi yang terlalu canggih
- pastikan setiap fitur memiliki alasan jelas untuk ada
- pertahankan kualitas keamanan dan konsistensi data

Dokumen ini harus diperbarui jika arah bisnis, teknologi, atau batasan proyek berubah.
