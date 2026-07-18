# WargaHub Architecture Decision Records

## 1. Document Control

- Document Title: WargaHub Architecture Decision Records
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
  - [docs/09-DATABASE-SCHEMA.md](09-DATABASE-SCHEMA.md)
- Change Log:
  - 2026-07-18: Initial ADR collection draft created for the WargaHub MVP.

---

## 2. ADR Status Definitions

Berikut status yang dipakai dalam koleksi ADR WargaHub.

- PROPOSED: keputusan sedang diajukan dan belum diterima secara resmi.
- ACCEPTED: keputusan sudah disetujui dan menjadi acuan implementasi.
- SUPERSEDED: keputusan lama digantikan oleh keputusan yang lebih baru.
- DEPRECATED: keputusan masih diketahui, tetapi tidak lagi direkomendasikan untuk digunakan.
- REJECTED: keputusan pernah dipertimbangkan, tetapi ditolak dan tidak dipakai.

Status ADR harus dipakai secara konsisten agar tidak menimbulkan ambiguitas.

---

## 3. ADR-001: Modular Monolith

- Status: ACCEPTED
- Context:
  WargaHub MVP memiliki cakupan yang jelas, tim yang relatif kecil, dan kebutuhan untuk membangun fitur inti secara cepat tanpa menambah kompleksitas operasional. Arsitektur yang terlalu terdistribusi akan menambah beban deployment, observability, dan koordinasi.
- Decision:
  WargaHub MVP dibangun sebagai modular monolith. Fitur utama dipisahkan ke dalam modul konseptual yang jelas, tetapi aplikasi tetap dijalankan sebagai satu unit deployable.
- Alternatives considered:
  - Microservices per domain.
  - Monolith tunggal tanpa modul yang jelas.
  - Modular monolith dengan boundary yang lemah.
- Consequences:
  - Positive: pengembangan lebih cepat, deployment lebih sederhana, debugging lebih mudah, dan kompleksitas operasional lebih rendah.
  - Negative: dibutuhkan disiplin untuk menjaga batas modul agar tidak bercampur.
- Notes:
  Modular monolith cocok untuk MVP karena memberikan struktur yang cukup tanpa overengineering. Ke depannya, modul dapat dipisah menjadi layanan terpisah bila kebutuhan nyata muncul.

---

## 4. ADR-002: REST API

- Status: ACCEPTED
- Context:
  Frontend dan backend perlu berkomunikasi melalui antarmuka yang jelas, mudah dipahami, dan sesuai dengan MVP. REST memberikan model yang sederhana untuk CRUD, workflow status, dan integrasi web.
- Decision:
  WargaHub menggunakan API HTTP REST-oriented yang terversi. Base path adalah /api/v1.
- Alternatives considered:
  - GraphQL.
  - RPC-style endpoints.
  - Custom transport layer.
- Consequences:
  - Positive: sederhana, mudah dipelajari, konsisten dengan arsitektur web, cocok untuk frontend React.
  - Negative: beberapa skenario query kompleks bisa terasa lebih verbose dibanding GraphQL.
- Notes:
  REST dipilih karena lebih sesuai dengan kebutuhan MVP dan memudahkan implementasi, pengujian, dan dokumentasi.

---

## 5. ADR-003: PostgreSQL

- Status: ACCEPTED
- Context:
  WargaHub memerlukan data relasional dengan integritas yang baik, dukungan transaksi, dan kemampuan mengelola data administratif serta keuangan secara aman.
- Decision:
  PostgreSQL dipilih sebagai database relasional utama.
- Alternatives considered:
  - MySQL.
  - SQLite.
  - NoSQL document database.
- Consequences:
  - Positive: relasi kuat, transaksi matang, constraint yang baik, ekosistem yang mature, cocok untuk data keuangan dan administrasi.
  - Negative: operasi operasional dan tuning perlu diperhatikan saat volume data tumbuh.
- Notes:
  PostgreSQL sesuai dengan kebutuhan MVP dan dengan skema relasional yang sudah didokumentasikan.

---

## 6. ADR-004: UUID Identifiers

- Status: ACCEPTED
- Context:
  Sistem perlu identifier yang tidak bergantung pada urutan insert dan dapat digunakan dalam lingkungan yang lebih luas dan lebih fleksibel.
- Decision:
  UUID dipakai sebagai primary key untuk tabel utama dimana arsitektur mengizinkan implementasi demikian.
- Alternatives considered:
  - Integer surrogate key.
  - Natural key.
- Consequences:
  - Positive: lebih aman secara distribusi, tidak mudah ditebak, lebih fleksibel untuk evolusi sistem.
  - Negative: lebih besar secara storage dan kurang human-readable dibanding integer.
- Notes:
  UUID dipilih sebagai strategi yang sesuai dengan arsitektur modern dan API-first.

---

## 7. ADR-005: Database Naming in Bahasa Indonesia

- Status: ACCEPTED
- Context:
  Proyek WargaHub memiliki konteks bisnis yang sangat dekat dengan bahasa Indonesia dan kebutuhan dokumentasi yang jelas untuk tim dan AI agent. Nama yang konsisten membantu komunikasi dan mengurangi ambiguitas.
- Decision:
  Nama tabel dan kolom domain menggunakan Bahasa Indonesia dengan snake_case.
- Alternatives considered:
  - English-only naming.
  - Mixed naming.
- Consequences:
  - Positive: lebih konsisten dengan konteks produk, lebih mudah dipahami oleh tim lokal, dan lebih baik untuk dokumentasi.
  - Negative: memerlukan konsistensi disiplin selama implementasi.
- Notes:
  Contoh yang dipakai: pengguna, warga, keluarga, pengajuan_surat, pembayaran_iuran, aktivitas_audit.

---

## 8. ADR-006: Frontend Technology

- Status: ACCEPTED
- Context:
  WargaHub perlu antarmuka web yang responsif, konsisten, dan dapat diimplementasikan secara efisien untuk MVP. Aplikasi harus dapat digunakan di desktop, tablet, dan mobile.
- Decision:
  Frontend MVP menggunakan React dengan TypeScript, Vite, dan pendekatan UI yang konsisten dengan kebutuhan web responsif. Penggunaan komponen UI yang terstruktur disarankan untuk menjaga konsistensi visual dan implementasi.
- Alternatives considered:
  - Plain JavaScript application.
  - Framework lain yang tidak sudah disepakati.
  - Native mobile-first approach for MVP.
- Consequences:
  - Positive: ekosistem yang mature, produktivitas yang baik, dan kompatibilitas yang kuat dengan arsitektur web.
  - Negative: memerlukan disiplin desain dan arsitektur komponen untuk tetap sederhana.
- Notes:
  Native mobile app tidak dipilih untuk MVP karena itu adalah future scope.

---

## 9. ADR-007: Backend Technology

- Status: ACCEPTED
- Context:
  Backend perlu menangani autentikasi, otorisasi, validasi, aturan bisnis, akses data, dan API yang aman. Solusi harus cukup sederhana untuk tim kecil tetapi tetap profesional.
- Decision:
  Backend MVP menggunakan Node.js dengan TypeScript dan framework HTTP yang sesuai dengan arah arsitektur yang sudah disetujui. Implementasi API harus mengikuti pola yang jelas untuk validasi, otorisasi, dan error handling.
- Alternatives considered:
  - Framework backend yang tidak terdaftar dalam dokumentasi proyek.
  - Backend dengan bahasa yang tidak sesuai dengan stack yang sudah dipilih.
- Consequences:
  - Positive: konsisten dengan stack monorepo dan memudahkan pengembangan lintas frontend/backend.
  - Negative: perlu menjaga struktur modul dan boundary yang jelas agar tetap sederhana.
- Notes:
  Teknologi ini sesuai dengan dokumentasi arsitektur dan repository yang sudah ada.

---

## 10. ADR-008: ORM and Database Access

- Status: PROPOSED
- Context:
  Backend perlu mengakses PostgreSQL dengan cara yang aman, teruji, dan nyaman untuk pengembangan. Pilihan ORM atau layer database access harus mempertimbangkan type safety, migrasi, dan pengalaman developer.
- Decision:
  Penggunaan ORM atau layer database access belum ditetapkan secara final untuk MVP. Keputusan ini tetap PROPOSED sampai ada evaluasi yang memadai.
- Alternatives considered:
  - Prisma.
  - TypeORM.
  - Raw SQL query layer.
- Consequences:
  - Positive: fleksibilitas untuk memilih pendekatan yang paling sesuai dengan kebutuhan tim dan AI-assisted development.
  - Negative: keputusan yang belum final dapat menunda implementasi detail di awal.
- Evaluation criteria:
  - Type safety.
  - Migration support.
  - PostgreSQL support.
  - Developer experience.
  - Maintainability.
  - AI-assisted development compatibility.

---

## 11. ADR-009: Authentication and Authorization

- Status: ACCEPTED
- Context:
  WargaHub memerlukan akses yang aman berdasarkan peran dan cakupan data. Sistem harus mencegah akses tidak sah ke data sensitif seperti profil pribadi, keuangan, pengajuan surat, dan pengaduan.
- Decision:
  Autentikasi dilakukan di backend dengan mekanisme sesi atau token yang aman. Password disimpan sebagai hash. Otorisasi berbasis peran dan cakupan data diterapkan di server. Frontend hanya dapat memberikan pengalaman UX, bukan satu-satunya perlindungan.
- Alternatives considered:
  - Client-only authorization.
  - Tidak ada batasan scope data.
  - Mengandalkan UI route guard saja.
- Consequences:
  - Positive: keamanan lebih kuat dan sesuai dengan SRS dan API contract.
  - Negative: memerlukan implementasi backend yang disiplin dan pengujian akses yang baik.
- Notes:
  AI tidak boleh menganggap route guards sebagai perlindungan keamanan yang cukup.

---

## 12. ADR-010: Validation Strategy

- Status: ACCEPTED
- Context:
  Input pengguna harus divalidasi di batas layanan untuk memberikan pengalaman yang baik dan menjaga integritas data.
- Decision:
  Validasi dilakukan di frontend untuk UX, di backend untuk keamanan dan integritas bisnis, dan di database melalui constraint untuk perlindungan data. Server-side validation adalah sumber otoritatif.
- Alternatives considered:
  - Validation hanya di frontend.
  - Validation hanya di database.
- Consequences:
  - Positive: error lebih terarah, data lebih aman, dan pengalaman pengguna lebih baik.
  - Negative: perlu konsistensi implementasi di beberapa lapisan.

---

## 13. ADR-011: File Storage

- Status: PROPOSED
- Context:
  WargaHub perlu menyimpan dokumen pendukung untuk surat, pembayaran, dan pengaduan. File harus aman, mudah dikelola, dan tidak memerlukan solusi storage yang terlalu kompleks di MVP.
- Decision:
  Metadata file disimpan di PostgreSQL, sedangkan file binary disimpan melalui abstraction storage yang dapat dipilih saat implementasi. Internal storage path tidak diekspos langsung melalui API.
- Alternatives considered:
  - Menyimpan file biner langsung di database.
  - Menyimpan file tanpa metadata terstruktur.
  - Mengekspos path internal ke frontend.
- Consequences:
  - Positive: fleksibel dan aman, memisahkan metadata dari penyimpanan fisik.
  - Negative: implementasi storage layer memerlukan perencanaan yang baik.
- Notes:
  Penyedia storage konkret belum ditetapkan, sehingga status keputusan ini tetap PROPOSED.

---

## 14. ADR-012: Audit Logging

- Status: ACCEPTED
- Context:
  Aktivitas administratif, keamanan, dan keuangan perlu dapat ditelusuri. Tanpa audit, sistem akan sulit dipertanggungjawabkan.
- Decision:
  Perubahan penting dicatat dalam tabel audit yang append-oriented. Record audit dianggap immutable untuk MVP dan tidak boleh dimodifikasi oleh pengguna biasa.
- Alternatives considered:
  - Tidak ada audit.
  - Audit yang dapat dihapus oleh pengguna administratif.
- Consequences:
  - Positive: akuntabilitas lebih baik dan traceability lebih kuat.
  - Negative: menambah overhead penyimpanan dan desain yang perlu dijaga.

---

## 15. ADR-013: Financial Data

- Status: ACCEPTED
- Context:
  Iuran, tagihan, dan pembayaran melibatkan data keuangan yang memerlukan ketelitian tinggi. Kesalahan format numerik dapat menimbulkan masalah serius.
- Decision:
  Semua nilai moneter menggunakan NUMERIC. Tidak digunakan floating point untuk uang. Status pembayaran dan tagihan harus jelas serta dapat diaudit.
- Alternatives considered:
  - FLOAT atau DOUBLE PRECISION.
  - Menyimpan uang sebagai string.
- Consequences:
  - Positive: presisi lebih baik, cocok untuk transaction-level data.
  - Negative: memerlukan perhatian terhadap format dan validasi input.

---

## 16. ADR-014: API Versioning

- Status: ACCEPTED
- Context:
  API akan berkembang seiring waktu. Perubahan yang memengaruhi kontrak harus diidentifikasi dengan jelas untuk menghindari breaking change yang tidak terkendali.
- Decision:
  API menggunakan base path /api/v1. Breaking changes memerlukan versi API baru.
- Alternatives considered:
  - Tanpa versioning.
  - Versioning pada header saja.
- Consequences:
  - Positive: stabilitas kontrak lebih baik dan migrasi lebih terkontrol.
  - Negative: memerlukan disiplin saat memperkenalkan perubahan besar.

---

## 17. ADR-015: Responsive Web First

- Status: ACCEPTED
- Context:
  Pengguna WargaHub akan beragam, termasuk warga yang sering memakai perangkat mobile, serta pengurus yang bekerja di desktop. MVP perlu berjalan dengan baik di berbagai layar.
- Decision:
  WargaHub MVP adalah responsive web application. Native mobile application adalah future scope.
- Alternatives considered:
  - Native mobile-first approach for MVP.
  - Desktop-only application.
- Consequences:
  - Positive: jangkauan pengguna lebih luas, biaya implementasi lebih rendah, dan sesuai dengan batasan MVP.
  - Negative: pengalaman mobile tidak boleh dianggap sama persis dengan aplikasi native.

---

## 18. ADR-016: Observability

- Status: ACCEPTED
- Context:
  Sistem perlu memiliki visibilitas dasar agar bug dan masalah operasional dapat ditemukan dengan cepat tanpa menambahkan infrastruktur yang berlebihan.
- Decision:
  Strategi observability MVP mencakup structured logging, error tracking, dan health checks dasar. Infrastruktur yang lebih kompleks ditunda sampai ada kebutuhan yang jelas.
- Alternatives considered:
  - Tidak ada observability.
  - Stack monitoring penuh di awal.
- Consequences:
  - Positive: membantu debugging dan operational readiness awal.
  - Negative: tidak semua metrik dan alert canggih disediakan di MVP.

---

## 19. ADR-017: Testing Strategy

- Status: ACCEPTED
- Context:
  Perubahan teknis perlu diverifikasi sehingga tidak merusak fungsionalitas yang sudah ada. Tim kecil membutuhkan pendekatan testing yang cukup, tidak terlalu berat untuk MVP.
- Decision:
  Testing MVP menggunakan pendekatan piramida: unit tests untuk logika, integration tests untuk modul, API tests untuk endpoint, component tests untuk UI, dan end-to-end tests untuk alur kritis bila diperlukan.
- Alternatives considered:
  - Hanya manual testing.
  - Membuat terlalu banyak end-to-end tests di awal.
- Consequences:
  - Positive: kualitas lebih baik dan regresi lebih mudah dikendalikan.
  - Negative: memerlukan waktu dan kedisiplinan untuk menjaga coverage yang masuk akal.

---

## 20. ADR-018: Documentation-First Development

- Status: ACCEPTED
- Context:
  WargaHub memerlukan fondasi dokumentasi yang kuat agar implementasi tetap konsisten dan dapat dipahami oleh tim serta AI agent.
- Decision:
  Pekerjaan implementasi yang penting harus dipandu oleh dokumentasi yang sudah disetujui: vision, SRS, product backlog, architecture, ERD, API contract, UI/UX specification, database schema, dan ADR.
- Alternatives considered:
  - Implementasi tanpa dokumentasi formal.
  - Dokumentasi yang tidak sinkron dengan implementasi.
- Consequences:
  - Positive: mengurangi ambiguitas, membantu AI-assisted development, dan menjaga konsistensi.
  - Negative: memerlukan disiplin untuk menjaga dokumentasi tetap mutakhir.

---

## 21. ADR-019: AI-Assisted Development

- Status: ACCEPTED
- Context:
  AI tools dapat membantu pengembangan, tetapi hanya bila digunakan dengan batasan yang jelas. Tanpa batasan, AI berpotensi mengubah keputusan arsitektur, menambahkan fitur yang tidak diminta, atau mengacaukan dokumentasi.
- Decision:
  AI dipakai sebagai asisten pengembangan yang harus membaca konteks proyek sebelum bekerja, mengikuti aturan proyek, tidak mengubah arsitektur yang sudah diterima tanpa persetujuan, tidak menginventarisasi fitur baru, dan tidak mengubah file yang tidak relevan.
- Alternatives considered:
  - AI tanpa pembatasan.
  - AI sebagai sumber keputusan bisnis independen.
- Consequences:
  - Positive: mempercepat kerja, membantu dokumentasi, dan menjaga konsistensi dengan konteks proyek.
  - Negative: membutuhkan review manusia untuk memastikan kualitas dan kesesuaian.
- Notes:
  AI tidak boleh mengubah keputusan arsitektur yang berstatus ACCEPTED tanpa persetujuan eksplisit dari pemilik proyek.

---

## 22. Decision Summary Table

| ADR | Decision | Status | Impact |
|---|---|---|---|
| ADR-001 | Modular monolith | ACCEPTED | Foundation architecture for MVP |
| ADR-002 | Versioned REST API | ACCEPTED | Clear frontend-backend contract |
| ADR-003 | PostgreSQL | ACCEPTED | Relational data foundation |
| ADR-004 | UUID identifiers | ACCEPTED | Safe and extensible identity model |
| ADR-005 | Bahasa Indonesia snake_case naming | ACCEPTED | Consistent domain naming |
| ADR-006 | React + TypeScript + Vite web frontend | ACCEPTED | Responsive web UI foundation |
| ADR-007 | Node.js + TypeScript backend | ACCEPTED | Backend implementation foundation |
| ADR-008 | ORM/database access strategy | PROPOSED | Pending final evaluation |
| ADR-009 | Server-side auth and RBAC | ACCEPTED | Security and access control |
| ADR-010 | Multi-layer validation | ACCEPTED | Data quality and integrity |
| ADR-011 | File storage abstraction | PROPOSED | Pending concrete provider |
| ADR-012 | Append-oriented audit logging | ACCEPTED | Traceability and accountability |
| ADR-013 | NUMERIC for money | ACCEPTED | Exact financial data handling |
| ADR-014 | API versioning with /api/v1 | ACCEPTED | Stable interface evolution |
| ADR-015 | Responsive web first | ACCEPTED | Broad MVP reach |
| ADR-016 | Basic observability | ACCEPTED | Operational visibility |
| ADR-017 | Testing pyramid | ACCEPTED | Quality and regression control |
| ADR-018 | Documentation-first development | ACCEPTED | Consistency and AI alignment |
| ADR-019 | AI-assisted development with guardrails | ACCEPTED | Safe AI collaboration |

---

## 23. Architecture Change Process

Perubahan arsitektur di masa depan harus dilakukan secara terstruktur.

1. Identify the problem.
2. Document the context.
3. Evaluate alternatives.
4. Create or update an ADR.
5. Review the impact.
6. Get approval.
7. Implement.
8. Update affected documentation.
9. Update AI context if required.

Proses ini membantu mencegah perubahan yang terlalu cepat, tidak terkontrol, atau bertentangan dengan keputusan yang sudah diterima.

---

## 24. AI Implementation Rule

Prinsip penting yang harus dipatuhi:

> AI tidak boleh mengubah keputusan arsitektur yang berstatus ACCEPTED tanpa persetujuan eksplisit dari pemilik proyek.

Prinsip ini penting untuk menjaga konsistensi, menghindari drift, dan memastikan keputusan teknis tetap terkontrol.
