# WargaHub Development Workflow

## 1. Document Control

- Product: WargaHub
- Document Name: WargaHub Development Workflow
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
  - [docs/10-ARCHITECTURE-DECISIONS.md](10-ARCHITECTURE-DECISIONS.md)

---

## 2. Purpose

Dokumen ini mendefinisikan workflow pengembangan WargaHub dari tahap perencanaan produk sampai rilis. Workflow ini dirancang untuk tim yang bekerja secara mandiri dengan dukungan AI, tetapi tetap menjaga kualitas, keamanan, dan konsistensi dengan dokumen proyek.

Alur kerja yang dipakai adalah:

Product Backlog
→ Sprint Planning
→ Task Selection
→ Development
→ Testing
→ Code Review
→ Documentation Update
→ Commit
→ Push
→ Release

Tujuan dokumen ini adalah memastikan setiap perubahan:

- sesuai dengan visi dan MVP WargaHub
- terhubung ke backlog dan requirement yang sudah ditetapkan
- kecil, terukur, dan aman
- dapat diverifikasi sebelum dianggap selesai
- tidak mengubah arsitektur atau scope secara diam-diam

---

## 3. Development Principles

WargaHub diperlakukan sebagai produk yang serius, walaupun dikembangkan secara pragmatis. Prinsip-prinsip berikut wajib dipatuhi dalam setiap pekerjaan.

- Documentation-first development: perubahan teknis yang penting harus didukung oleh dokumentasi yang sesuai.
- Small and focused changes: setiap perubahan harus terbatas pada tugas yang sedang dikerjakan.
- Security by design: keamanan harus dipertimbangkan sejak awal, bukan ditambahkan di akhir.
- Server-side validation: validasi bisnis dan keamanan harus dilakukan di backend, bukan hanya di frontend.
- Tests for important behavior: fitur penting harus diuji secara memadai. Tidak semua perubahan membutuhkan uji serupa, tetapi perubahan yang berdampak signifikan harus diuji.
- No silent architecture changes: setiap perubahan arsitektur yang penting harus didokumentasikan dan disetujui.
- No unrelated modifications: perubahan yang tidak berkaitan dengan tugas tidak boleh ikut masuk.
- Human approval for important decisions: keputusan produk, arsitektur, keamanan, dan rilis tetap menjadi tanggung jawab manusia.
- AI-assisted development with human review: GitHub Copilot membantu implementasi, tetapi manusia tetap bertanggung jawab atas hasil akhir.

---

## 4. Scrum Workflow

WargaHub menggunakan pendekatan Scrum yang disederhanakan untuk kebutuhan proyek MVP. Tujuan tidak adalah menciptakan birokrasi, melainkan menjaga kerja tetap terarah dan terukur.

### 4.1 Product Backlog

Product Backlog adalah daftar prioritas kebutuhan dan pekerjaan yang diharapkan untuk WargaHub. Backlog ini bersumber dari dokumen SRS, visi produk, dan kebutuhan MVP.

Backlog harus memuat:

- kebutuhan bisnis yang jelas
- prioritas yang masuk akal
- traceability ke requirement atau dokumen terkait
- kriteria penerimaan yang cukup jelas

### 4.2 Sprint Goal

Sprint Goal adalah tujuan utama dari satu periode pengembangan. Sprint Goal harus:

- terbatas dan realistis
- berfokus pada nilai nyata bagi pengguna atau sistem
- bisa diukur secara sederhana

Contoh Sprint Goal:

- memungkinkan pengguna masuk ke sistem dan melihat dashboard sesuai peran
- menyediakan alur dasar pengajuan surat dan statusnya
- menyediakan dasar pengelolaan iuran dan pembayaran

### 4.3 Sprint Planning

Sprint Planning adalah proses memilih item backlog yang akan dikerjakan pada sprint tertentu. Dalam konteks WargaHub, Sprint Planning harus mempertimbangkan:

- nilai bisnis
- ukuran pekerjaan
- ketergantungan antar modul
- risiko teknis
- kapasitas kerja yang realistis

Item yang terlalu besar harus dipotong menjadi bagian yang lebih kecil.

### 4.4 Sprint Backlog

Sprint Backlog adalah kumpulan item kerja yang dipilih untuk sprint tertentu. Item-item ini harus dipahami dengan cukup baik sebelum mulai dikerjakan.

### 4.5 Sprint Execution

Selama sprint berjalan:

- pekerjaan dikerjakan secara bertahap
- setiap item tetap terjaga scope-nya
- blocker dilaporkan segera
- dokumentasi diperbarui sesuai kebutuhan
- validation dilakukan saat perubahan dibuat, bukan di akhir saja

### 4.6 Sprint Review

Sprint Review adalah momen untuk memeriksa hasil kerja. Fokusnya adalah:

- apakah increment yang dibuat sesuai tujuan sprint
- apakah fitur tersebut memberi nilai bagi pengguna
- apakah ada perbaikan yang perlu dibuat sebelum lanjut

### 4.7 Sprint Retrospective

Retrospective adalah refleksi singkat atas proses kerja. Pertanyaan utamanya:

- apa yang berjalan baik
- apa yang menghambat
- apa yang perlu diperbaiki pada sprint berikutnya

Untuk proyek solo, retrospective bisa dilakukan secara ringkas setelah setiap sprint atau setiap beberapa minggu kerja.

---

## 5. Task Lifecycle

Setiap item implementasi harus melewati lifecycle berikut.

| State | Meaning | Entry Criteria | Exit Criteria |
|---|---|---|---|
| BACKLOG | Item belum dipilih untuk dikerjakan. | Item telah diidentifikasi dari backlog atau kebutuhan. | Item mendapat prioritas dan dipindahkan ke READY atau ditunda. |
| READY | Item siap dikerjakan. | Tujuan jelas, scope terbatas, acceptance criteria ada, dependency dipahami, dokumentasi terkait tersedia. | Item mulai dikerjakan dan dipindahkan ke IN PROGRESS. |
| IN PROGRESS | Pekerjaan sedang dilakukan. | Item sudah dipilih dan dipahami. | Pekerjaan selesai secara teknis dan siap untuk review. |
| CODE REVIEW | Perubahan sedang ditinjau. | Implementasi selesai dan diff sudah siap untuk review. | Review selesai, masalah yang penting ditangani, dan item siap untuk testing. |
| TESTING | Perubahan sedang divalidasi. | Kode atau fitur sudah siap diuji. | Testing selesai dan hasil memadai. |
| DONE | Perubahan selesai dan siap untuk commit/push. | Semua acceptance criteria terpenuhi, dokumentasi sesuai, review selesai, dan validation jelas. | Item dikommit dan dipindahkan ke backlog atau release tracking sesuai kebutuhan. |

### 5.1 Kriteria tambahan untuk tiap state

- BACKLOG: item dapat ditambah, dipotong, atau ditunda.
- READY: tidak boleh ada pertanyaan arsitektur utama yang belum dijawab.
- IN PROGRESS: perubahan yang dilakukan harus tetap fokus pada tugas.
- CODE REVIEW: perubahan yang tidak terkait harus dihindari.
- TESTING: hasil tes harus dicatat secara sederhana.
- DONE: tidak boleh ada keraguan besar tentang kualitas atau scope.

---

## 6. Work Item Structure

Setiap task implementasi sebaiknya memiliki struktur berikut.

- Task ID: identifier unik, misalnya WB-AUTH-001.
- Epic: area bisnis atau domain terkait, misalnya EPIC-AUTH, EPIC-RESIDENT, EPIC-DUES.
- Title: judul singkat tugas.
- Objective: tujuan bisnis atau teknis yang ingin dicapai.
- Description: uraian singkat mengenai masalah atau kebutuhan.
- Acceptance Criteria: syarat yang harus dipenuhi agar tugas dianggap berhasil.
- Dependencies: hal lain yang harus selesai dulu atau kebutuhan eksternal.
- Relevant documentation: dokumen yang harus dibaca sebelum mengerjakan, misalnya API contract, ERD, architecture, atau UX spec.
- Priority: MUST_HAVE, SHOULD_HAVE, COULD_HAVE, atau FUTURE.
- Estimate: taksiran ukuran kerja, bisa dalam story points atau satuan sederhana.
- Status: BACKLOG, READY, IN PROGRESS, CODE REVIEW, TESTING, DONE.

### 6.1 Contoh struktur task

Contoh yang sesuai dengan backlog WargaHub:

- Task ID: WB-AUTH-001
- Epic: EPIC-AUTH
- Title: Login pengguna dengan validasi kredensial
- Objective: memungkinkan pengguna masuk secara aman ke sistem.
- Description: sistem menerima username dan password, memvalidasi kredensial, dan mengarahkan pengguna ke dashboard yang sesuai.
- Acceptance Criteria:
  - kredensial valid mengarahkan ke dashboard sesuai peran
  - kredensial tidak valid menolak akses dengan pesan aman
  - akses tidak diberikan ke area yang tidak sah
- Dependencies: none
- Relevant documentation: docs/07-API-CONTRACT.md, docs/02-SRS.md, docs/05-ARCHITECTURE.md
- Priority: MUST_HAVE
- Estimate: 3
- Status: BACKLOG

Task yang terlalu besar, misalnya "bangun seluruh sistem autentikasi", harus dipotong menjadi subtask yang lebih kecil.

---

## 7. AI-Assisted Development Workflow

GitHub Copilot di VS Code digunakan sebagai asisten, bukan sebagai pemilik keputusan produk atau arsitektur.

Workflow standar saat memakai GitHub Copilot adalah:

1. Human selects a focused task.
   - Pengguna memilih tugas yang sempit dan jelas.
2. Human provides the task objective.
   - Tujuan tugas dijelaskan dengan konteks yang cukup.
3. GitHub Copilot reads relevant project context.
   - Copilot membaca manifest, AI context, rules, dan dokumen teknis terkait.
4. Copilot analyzes the existing code.
   - Copilot memeriksa struktur kode, pola yang sudah ada, dan area yang relevan.
5. Copilot proposes an implementation plan.
   - Copilot mengusulkan langkah implementasi yang kecil dan aman.
6. Human reviews the plan.
   - Manusia menilai apakah rencana sesuai dengan arsitektur, batas MVP, dan prioritas.
7. Copilot implements the approved scope.
   - Implementasi dijalankan sesuai ruang lingkup yang disetujui.
8. Copilot runs or prepares validation.
   - Copilot menyiapkan atau menjalankan validasi yang relevan.
9. Human reviews the code and git diff.
   - Review dilakukan terhadap perubahan yang sebenarnya, bukan hanya hasil akhir.
10. Human decides whether to commit.
    - Commit hanya dilakukan atas instruksi atau persetujuan manusia.
11. Human pushes to GitHub.
    - Push dilakukan hanya setelah review dan persetujuan manusia.

Prinsip penting:

> AI membantu implementasi, tetapi keputusan produk, arsitektur, keamanan, dan release tetap berada pada manusia.

---

## 8. Standard Copilot Prompt Structure

Prompt yang baik harus memberi arah yang jelas. Struktur yang direkomendasikan adalah:

### Context
Apa proyek dan fitur yang sedang dikerjakan.

### Objective
Apa yang harus diimplementasikan.

### Relevant Files
File mana yang harus dibaca terlebih dahulu.

### Constraints
Apa yang tidak boleh diubah.

### Implementation Scope
File atau modul mana yang boleh dimodifikasi.

### Acceptance Criteria
Bagaimana keberhasilan diukur.

### Validation
Tes atau pemeriksaan apa yang harus dijalankan.

### Output
Apa yang harus dilaporkan AI setelah implementasi selesai.

### 8.1 Contoh prompt yang dapat dipakai ulang

```text
Context
- Project: WargaHub
- Feature: authentication login flow
- Relevant domain: auth, API contract, backend validation

Objective
- Implement login endpoint sesuai dengan WB-AUTH-001 dan kontrak API yang ada.

Relevant Files
- docs/07-API-CONTRACT.md
- docs/02-SRS.md
- docs/05-ARCHITECTURE.md
- docs/10-ARCHITECTURE-DECISIONS.md
- relevant backend/auth files in the repository

Constraints
- Do not change approved architecture.
- Do not add unrelated features.
- Do not modify unrelated modules.
- Do not bypass authorization or validation.

Implementation Scope
- Backend auth endpoint and related validation logic only.
- Update documentation if behavior changes.

Acceptance Criteria
- Valid credentials authenticate successfully.
- Invalid credentials return safe error response.
- Authorization rules remain enforced.
- Relevant tests or checks pass.

Validation
- Run relevant tests or checks.
- Verify the endpoint behavior against the API contract.

Output
- Summarize changes.
- List files changed.
- Report validation results.
- Note assumptions and limitations.
```

---

## 9. Small Change Principle

Prinsip ini sangat penting karena WargaHub adalah proyek MVP dengan batasan yang jelas.

### 9.1 Mengapa perubahan harus kecil

Perubahan yang kecil lebih mudah:

- dipahami
- diuji
- direview
- dipertahankan
- dikembalikan jika perlu

Perubahan besar sering menimbulkan risiko yang tidak proporsional terhadap manfaatnya.

### 9.2 Contoh buruk

"Bangun seluruh sistem autentikasi."

Contoh ini terlalu luas. Ia mencakup banyak unsure, berpotensi menimbulkan scope creep, dan sulit di-review.

### 9.3 Contoh baik

"Implement login endpoint sesuai dengan WB-AUTH-001 dan kontrak API."

Contoh ini jelas, fokus, dan dapat diselesaikan secara bertahap.

### 9.4 Ruang lingkup yang disarankan untuk satu perubahan AI-assisted

Satu perubahan AI-assisted idealnya:

- mencakup satu fitur kecil atau satu bug per task
- memengaruhi area terbatas
- memiliki kriteria penerimaan yang jelas
- dapat selesai dalam satu sesi kerja yang wajar

Jika perubahan terasa terlalu luas, tugas harus dipecah.

---

## 10. Git Workflow

Workflow Git harus sederhana dan konsisten.

### 10.1 Branch yang direkomendasikan

- main: branch utama yang berisi versi yang stabil dan siap untuk release.
- feature/*: pengembangan fitur baru.
- fix/*: perbaikan bug.
- docs/*: perubahan dokumentasi.
- refactor/*: perbaikan struktur atau cleanup teknis yang tidak mengubah behavior secara signifikan.
- test/*: penambahan atau perbaikan test.
- chore/*: perubahan dukungan seperti konfigurasi, maintenance, atau cleanup ringan.

### 10.2 Contoh branch

- feature/auth-login
- feature/resident-list
- fix/payment-status
- docs/update-api-contract

### 10.3 Kapan memakai tiap branch

- feature/*: untuk fitur baru yang sesuai backlog.
- fix/*: untuk perbaikan bug atau masalah yang sudah ada.
- docs/*: untuk perubahan dokumentasi yang tidak menambah fungsionalitas.
- refactor/*: untuk penataan kode yang tidak mengubah perilaku yang terlihat.
- test/*: untuk menambah atau memperbaiki test.
- chore/*: untuk pekerjaan pendukung non-fungsional.

Semua branch kerja harus dibuat dari cabang yang relevan dan tidak boleh dibuat dari branch yang sedang tidak stabil tanpa alasan yang jelas.

---

## 11. Commit Convention

Commit menggunakan Conventional Commits.

### 11.1 Prefix yang dipakai

- feat: penambahan fitur baru
- fix: perbaikan bug
- docs: perubahan dokumentasi
- refactor: perubahan struktur kode tanpa perubahan behavior yang signifikan
- test: penambahan atau perubahan test
- chore: pekerjaan pendukung
- build: perubahan terkait build system
- ci: perubahan terkait CI atau automation

### 11.2 Contoh commit

- feat(auth): implement login flow
- docs(api): update API contract
- fix(dues): correct payment status
- test(resident): add resident service tests

### 11.3 Aturan commit

- Satu logical change per commit.
- Pesan commit harus jelas dan spesifik.
- Jangan commit secret atau kredensial.
- Jangan commit file temporer atau hasil generate yang tidak diperlukan.
- Jangan mencampur perubahan yang tidak terkait dalam satu commit.

---

## 12. Code Review Workflow

Code review adalah bagian penting untuk menjaga kualitas dan keamanan.

### 12.1 Checklist Functional

- Apakah fitur bekerja sesuai kebutuhan?
- Apakah hasilnya sesuai acceptance criteria?
- Apakah perubahan sudah sesuai dengan kontrak API atau spesifikasi yang ada?

### 12.2 Checklist Security

- Apakah authorization diterapkan dengan benar?
- Apakah data sensitif dilindungi?
- Apakah input divalidasi di server?
- Apakah ada kebocoran informasi yang tidak seharusnya?

### 12.3 Checklist Data

- Apakah cakupan data sesuai peran pengguna?
- Apakah relasi data tetap benar?
- Apakah perubahan memengaruhi integritas data secara negatif?

### 12.4 Checklist Code Quality

- Apakah implementasi mudah dipahami?
- Apakah ada duplikasi yang tidak perlu?
- Apakah error handling memadai?
- Apakah naming dan struktur tetap konsisten?

### 12.5 Checklist Testing

- Apakah test relevan ada atau disiapkan?
- Apakah tes yang penting berjalan dengan baik?
- Apakah ada regression yang tidak tercover?

### 12.6 Checklist Scope

- Apakah file yang tidak relevan tidak berubah?
- Apakah ada perubahan yang tidak terkait dengan tugas?

Jika ada masalah yang signifikan, perubahan tidak boleh langsung dianggap selesai.

---

## 13. Testing Workflow

Testing harus seimbang: cukup untuk memastikan kualitas, tetapi tidak berlebihan untuk perubahan kecil.

### 13.1 Unit Tests

Dipakai untuk logika bisnis yang terisolasi, misalnya validasi, transformasi data, atau aturan sederhana.

### 13.2 Integration Tests

Dipakai untuk menguji interaksi antara komponen atau modul yang terkait, misalnya data access, service, atau database interaction.

### 13.3 API Tests

Dipakai untuk menguji endpoint, respons, status code, validasi request, dan otorisasi.

### 13.4 Component Tests

Dipakai untuk menguji perilaku UI yang penting, khususnya komponen atau alur yang berhubungan langsung dengan tugas.

### 13.5 End-to-End Tests

Dipakai untuk alur pengguna penting yang cukup kritis, misalnya login, pengajuan surat, atau pembayaran. End-to-end tidak selalu diperlukan untuk perubahan kecil, tetapi layak dipertimbangkan untuk fitur yang berdampak tinggi.

Prinsipnya:

- tidak setiap perubahan kecil membutuhkan semua jenis test
- perubahan yang berdampak besar atau sensitif harus mendapat pengujian yang lebih luas
- test harus sesuai tingkat resiko, bukan hanya kebiasaan formalitas

---

## 14. Documentation Update Workflow

Dokumentasi harus tetap sinkron dengan implementasi.

Jika API behavior berubah:
→ update [docs/07-API-CONTRACT.md](07-API-CONTRACT.md)

Jika struktur database berubah:
→ update [docs/09-DATABASE-SCHEMA.md](09-DATABASE-SCHEMA.md)
→ update [docs/06-ERD.md](06-ERD.md) jika relasinya berubah

Jika arsitektur berubah:
→ buat atau update ADR di [docs/10-ARCHITECTURE-DECISIONS.md](10-ARCHITECTURE-DECISIONS.md)

Jika perilaku UI/UX berubah:
→ update [docs/08-UI-UX-SPECIFICATION.md](08-UI-UX-SPECIFICATION.md)

Jika kebutuhan produk berubah:
→ update [docs/02-SRS.md](02-SRS.md) atau [docs/03-PRODUCT-BACKLOG.md](03-PRODUCT-BACKLOG.md)

Dokumentasi tidak boleh sengaja bertentangan dengan implementasi.

---

## 15. Definition of Ready

Sebuah task dianggap READY bila:

- objective jelas
- scope terbatas
- acceptance criteria ada
- dependency dipahami
- dokumen terkait tersedia
- task dapat diimplementasikan tanpa pertanyaan arsitektur besar yang belum terjawab

Jika satu atau beberapa poin di atas belum terpenuhi, task belum siap untuk dikerjakan.

---

## 16. Definition of Done

Sebuah task dianggap DONE bila:

- implementasi selesai
- acceptance criteria terpenuhi
- test relevan dilakukan dan hasilnya memadai
- validation dilakukan
- authorization diperiksa jika relevan
- data access scope diperiksa jika relevan
- dokumentasi diperbarui sesuai kebutuhan
- tidak ada perubahan unrelated yang tertinggal
- review manusia selesai
- perubahan sudah di-commit

Tidak ada task yang dianggap selesai hanya karena kode sudah ditulis. Kualitas dan verifikasi tetap wajib.

---

## 17. AI Safety Rules

GitHub Copilot tidak boleh:

- menginventarisasi fitur produk yang tidak disetujui
- mengubah arsitektur yang sudah diterima secara diam-diam
- memodifikasi file yang tidak relevan
- menghapus kode penting tanpa penjelasan
- menambah dependency tanpa alasan yang kuat
- mengekspos secret atau kredensial
- hardcode credential
- melewati authorization
- menganggap frontend validation sebagai satu-satunya perlindungan keamanan
- commit atau push tanpa instruksi eksplisit manusia

Prinsip tambahan:

> AI membantu implementasi, tetapi keputusan produk, arsitektur, keamanan, dan release tetap berada pada manusia.

---

## 18. Solo Developer Responsibilities

Karena proyek ini dikembangkan secara mandiri dengan dukungan AI, tanggung jawab dibagi secara jelas.

### 18.1 Tanggung jawab manusia

- mengambil keputusan produk
- mengambil keputusan arsitektur
- mengambil keputusan keamanan
- menentukan scope tugas
- melakukan review kode
- menyetujui commit
- menyetujui release

### 18.2 Tanggung jawab AI

- membantu menganalisis kode
- membantu menyusun rencana implementasi
- membantu menulis atau memperbaiki kode
- membantu menyiapkan test
- membantu menulis atau memperbarui dokumentasi
- membantu refactoring yang aman dan kecil

AI dapat membantu pelaksanaan, tetapi manusia tetap pemilik keputusan akhir.

---

## 19. Release Workflow

Alur release WargaHub mengikuti tahapan berikut:

Development
→ Testing
→ Review
→ Release Candidate
→ Release

### 19.1 Pre-release checks

Sebelum rilis, lakukan pemeriksaan berikut:

- semua task yang masuk target release sudah selesai
- test yang relevan telah berjalan
- dokumentasi yang berkaitan telah diperbarui
- perubahan arsitektur yang penting telah didokumentasikan
- review selesai dan problem serius sudah diperbaiki

### 19.2 Database migration safety

Jika ada perubahan skema database:

- pastikan migrasi dipahami
- pastikan dampaknya telah dipertimbangkan
- hindari perubahan migrasi yang tidak terkontrol
- pastikan rollback atau mitigasi dipertimbangkan

### 19.3 Environment configuration

Sebelum rilis, pastikan:

- konfigurasi lingkungan sudah sesuai
- secret dan kredensial tidak disimpan secara tidak aman
- environment yang dipakai untuk uji dan produksi dibedakan dengan jelas

### 19.4 Rollback considerations

Jika release bermasalah, pertimbangkan:

- apakah rollback cepat dan aman
- apakah perubahan dapat dikembalikan tanpa merusak data
- apakah masalah yang muncul sudah tercatat dengan jelas

---

## 20. Workflow Checklists

### 20.1 Before Development

- [ ] Baca dokumen proyek yang relevan.
- [ ] Pastikan task punya objective yang jelas.
- [ ] Pastikan scope terbatas.
- [ ] Pastikan acceptance criteria ada.
- [ ] Identifikasi dependency dan risiko.
- [ ] Pastikan dokumentasi terkait tersedia.

### 20.2 During Development

- [ ] Kerjakan satu task pada satu waktu.
- [ ] Jaga perubahan tetap fokus.
- [ ] Hindari perubahan yang tidak relevan.
- [ ] Lakukan validasi saat bekerja.
- [ ] Catat asumsi atau blocker.

### 20.3 Before Commit

- [ ] Review diff.
- [ ] Pastikan tidak ada file yang tidak relevan.
- [ ] Pastikan test yang relevan sudah dijalankan.
- [ ] Pastikan dokumentasi sudah diperbarui jika perlu.
- [ ] Pastikan tidak ada secret atau artifact sementara yang ikut masuk.

### 20.4 Before Push

- [ ] Review ulang perubahan terakhir.
- [ ] Pastikan commit message jelas.
- [ ] Pastikan branch yang dipakai sesuai workflow.
- [ ] Pastikan review manusia sudah selesai.

### 20.5 Before Release

- [ ] Semua task target release selesai.
- [ ] Validasi akhir dilakukan.
- [ ] Dokumentasi sinkron.
- [ ] Risiko dan rollback dipertimbangkan.
- [ ] Release approval manusia ada.

---

## 21. AI Implementation Report

Setelah menyelesaikan suatu task, GitHub Copilot harus melaporkan hasilnya dengan format yang sederhana namun lengkap.

Laporan yang diharapkan mencakup:

- Summary of changes: apa yang telah diubah
- Files changed: file mana yang dimodifikasi atau dibuat
- Tests run: tes atau validasi apa yang dijalankan
- Validation results: apakah hasilnya berhasil atau ada masalah
- Assumptions: asumsi yang dibuat selama implementasi
- Known limitations: batasan yang masih ada atau hal yang belum ditangani
- Recommended next step: tindakan yang disarankan selanjutnya

Laporan ini membantu review manusia dan mencegah interpretasi yang terlalu cepat.

---

## 22. Change Log

| Version | Date | Summary |
|---|---|---|
| 0.1.0 | 2026-07-18 | Initial draft of the WargaHub development workflow covering Scrum, task lifecycle, Git, testing, documentation, AI-assisted workflow, review, release, and safety rules. |

---

## Final Quality Check

Sebelum menyatakan suatu pekerjaan selesai, pastikan hal-hal berikut sudah terpenuhi:

1. File ini komprehensif dan mencakup workflow inti pengembangan WargaHub.
2. Workflow sesuai dengan prinsip Scrum yang disederhanakan.
3. Git workflow jelas dan konsisten.
4. Workflow GitHub Copilot terdefinisi dengan baik.
5. Definition of Ready ada.
6. Definition of Done ada.
7. Testing workflow ada.
8. Dokumentasi synchronization rules ada.
9. AI safety rules ada.
10. Release workflow ada.
11. Checklist workflow ada.
12. Tidak ada file lain yang diubah selain dokumen yang diminta.
