# WargaHub Project Rulebook

## 1. Purpose of This Rulebook

Dokumen ini adalah aturan wajib bagi semua developer, reviewer, dan AI agent yang terlibat dalam pengembangan WargaHub.

Tujuan utama rulebook ini adalah memastikan bahwa setiap perubahan:

- selaras dengan tujuan produk WargaHub
- konsisten dengan PROJECT_MANIFEST.md dan .ai/AI_CONTEXT.md
- aman untuk diterapkan
- kecil, jelas, dan dapat diverifikasi
- tidak merusak batasan MVP yang telah disepakati

Dokumen ini harus diperlakukan sebagai standar kerja operasional, bukan sekadar pedoman tambahan.

---

## 2. General Development Principles

Semua pekerjaan di WargaHub harus mengikuti prinsip berikut:

- Prioritaskan nilai bagi pengguna dan kebutuhan bisnis.
- Jangan menambah fitur yang tidak ada dalam tugas saat ini.
- Pilih perubahan paling kecil yang aman dan cukup untuk menyelesaikan masalah.
- Jaga konsistensi dengan struktur proyek yang sudah ada.
- Jangan menebak kebutuhan bisnis yang belum terverifikasi.
- Jika informasi tidak jelas, hentikan pekerjaan dan minta klarifikasi.
- Jangan mengubah arsitektur secara tidak sah tanpa persetujuan eksplisit.
- Jangan mengorbankan keamanan demi kecepatan.
- Jangan mengklaim bahwa fitur bekerja tanpa verifikasi.

---

## 3. Source of Truth Rules

Dokumen berikut adalah sumber kebenaran proyek:

1. PROJECT_MANIFEST.md
2. .ai/AI_CONTEXT.md
3. README.md
4. dokumentasi teknis di folder docs/
5. kode yang sudah ada di repositori

Aturan sumber kebenaran:

- Selalu baca PROJECT_MANIFEST.md sebelum memulai perubahan yang berdampak pada arah produk.
- Selalu baca .ai/AI_CONTEXT.md sebelum bekerja pada area yang memerlukan pemahaman konteks proyek.
- Jika ada konflik antara dokumen, prioritas tetap pada manifest dan AI context, lalu diikuti oleh implementasi yang ada.
- Jangan menganggap pendapat pribadi sebagai requirement jika tidak tercantum dalam sumber kebenaran.

---

## 4. AI Agent Rules

AI agent yang bekerja pada WargaHub wajib:

- beroperasi berdasarkan konteks proyek yang ada
- mengikuti aturan ini secara ketat
- menghindari asumsi bisnis yang tidak didukung dokumen
- menghindari pembuatan skema database, field, atau endpoint yang tidak ada dasar dokumen atau diskusi yang jelas
- mengutamakan perubahan kecil dan aman
- meminta klarifikasi jika ada ambiguity yang signifikan
- tidak mengubah struktur arsitektur tanpa persetujuan
- tidak mengklaim selesai sebelum verifikasi dilakukan

AI agent tidak boleh:

- menginventarisasi requirement bisnis sendiri
- menambahkan fitur yang tidak diminta
- mengubah workflow yang sudah berjalan tanpa alasan yang jelas
- menghapus fitur yang ada tanpa approval
- memberikan jawaban yang terlalu pasti saat informasi belum cukup

---

## 5. Rules Before Modifying Code

Sebelum mengubah kode, wajib dilakukan hal-hal berikut:

- baca file terkait yang akan diubah
- pahami konteks, dependency, dan alur kerja yang sudah ada
- cari pola yang sudah dipakai di repositori
- pastikan perubahan tidak melanggar prinsip MVP dan batasan proyek
- identifikasi dampak terhadap frontend, backend, shared packages, dan dokumentasi jika relevan

Jika perubahan memengaruhi area yang luas, lakukan investigasi lebih dahulu sebelum edit.

---

## 6. Rules for Creating New Files

Saat membuat file baru, wajib:

- pastikan file benar-benar diperlukan
- pilih lokasi yang sesuai dengan struktur monorepo
- gunakan nama yang konsisten dengan konvensi proyek
- hindari membuat file duplikat atau file yang mengulang fungsi yang sudah ada
- tulis isi file dengan format yang konsisten dan rapi
- pastikan file baru tidak mengganggu struktur yang sudah ada

Aturan tambahan:

- jangan membuat file baru hanya untuk mengakomodasi solusi improvisasi
- jangan membuat file konfigurasi baru tanpa kebutuhan yang jelas
- jangan menambahkan modul baru jika sudah ada pola yang lebih sesuai

---

## 7. Rules for Modifying Existing Files

Saat memodifikasi file yang sudah ada, wajib:

- memahami isi file sebelum mengubahnya
- mempertahankan gaya penulisan dan pola yang sudah ada
- hindari perubahan unrelated
- batasi edit hanya pada area yang diperlukan
- pastikan perubahan tidak mengganggu fitur lain yang belum ditangani

Prinsip utama:

- perubahan harus bersifat minimal dan aman
- jangan melakukan refactor besar kecuali memang menjadi bagian tugas yang jelas
- jangan mengubah perilaku existing functionality tanpa kebutuhan yang sah

---

## 8. Rules for Deleting Files

Penghapusan file hanya boleh dilakukan jika:

- file tersebut benar-benar tidak lagi diperlukan
- ada alasan yang jelas dan terdokumentasi
- dampaknya sudah dipahami
- ada approval yang sesuai jika file tersebut penting atau digunakan secara luas

Jangan menghapus file:

- hanya karena file terlihat tidak terpakai
- tanpa memeriksa referensi dan dependency
- tanpa mempertimbangkan risiko terhadap sistem lain

---

## 9. Scope Control

Batasan scope harus selalu dijaga.

Aturan scope:

- jangan mengimplementasikan fitur di luar tugas yang sedang dikerjakan
- jangan menambah modul baru kecuali memang diperlukan
- jangan memperluas cakupan fitur tanpa persetujuan
- tetap fokus pada MVP dan kebutuhan inti yang telah disepakati

Jika tugas tampak terlalu luas, pecah menjadi subtask yang lebih kecil dan lebih aman.

---

## 10. Architecture Rules

Arsitektur proyek harus tetap sederhana, modular, dan dapat dipelihara.

Aturan arsitektur:

- jangan mengubah arsitektur tanpa approval eksplisit
- pertahankan pemisahan yang jelas antara frontend, backend, dan shared packages
- gunakan pendekatan yang konsisten dengan monorepo yang ada
- hindari over-engineering di tahap awal
- pilih solusi yang mudah dipahami dan dipelihara

Prinsip penting:

- struktur kode harus tetap mudah diikuti oleh developer lain
- perubahan teknis harus mempertimbangkan dampak terhadap aplikasi secara keseluruhan

---

## 11. Frontend Rules

Untuk area frontend, aturan wajib adalah:

- gunakan React dan TypeScript sesuai arah proyek
- jaga komponen tetap sederhana, reusable, dan mudah dipahami
- hindari state management yang berlebihan untuk kebutuhan sederhana
- gunakan pola yang konsisten dengan existing codebase
- jangan menambah library frontend yang tidak diperlukan

Frontend harus tetap:

- cepat dipahami oleh pengguna non-teknis
- jelas dalam navigasi
- konsisten secara visual
- tidak terlalu kompleks untuk fitur sederhana

---

## 12. Backend Rules

Untuk area backend, aturan wajib adalah:

- gunakan struktur yang jelas dan mudah dipelihara
- pisahkan logika bisnis, validasi, dan akses data dengan rapi
- jangan menaruh logika bisnis yang terlalu besar di controller
- jaga agar service layer tetap terorganisasi
- pertahankan konsistensi pattern yang sudah ada

Backend harus fokus pada:

- konsistensi data
- keamanan akses
- validasi input
- error handling yang jelas

---

## 13. Database Rules

Aturan database sangat ketat:

- jangan menginventasikan field database tanpa dokumentasi atau alasan yang jelas
- jangan mengubah schema secara diam-diam
- setiap perubahan schema harus dipertimbangkan secara matang
- perubahan schema harus sesuai dengan requirement yang terverifikasi
- jangan mengubah constraint, relasi, atau indexing tanpa alasan yang sah

Prinsip penting:

- database schema harus mencerminkan kebutuhan bisnis yang sebenarnya
- perubahan schema harus dapat dijelaskan secara logis dan terdokumentasi

---

## 14. API Rules

API harus dirancang dengan prinsip yang konsisten:

- gunakan format response yang jelas dan konsisten
- validasi input harus dilakukan di level aplikasi
- gunakan status code yang sesuai
- hindari perubahan breaking change tanpa komunikasi yang jelas
- jaga endpoint tetap mudah dipahami oleh frontend dan AI agent

Aturan penting:

- jangan menambahkan endpoint yang tidak diperlukan
- jangan mengubah kontrak API secara tidak terduga
- pastikan dokumentasi API tetap sinkron jika ada perubahan

---

## 15. Security Rules

Security adalah prioritas yang tidak boleh dikompromikan.

Aturan wajib:

- jangan mengekspos secret, token, API key, atau credential
- jangan menyimpan data sensitif di file yang tidak aman
- jangan commit .env atau file sensitif lainnya
- gunakan otorisasi yang sesuai untuk setiap resource
- hindari log yang mencantumkan data pribadi atau secret
- jangan memperkenankan akses yang tidak perlu

Jika ada keraguan mengenai keamanan, hentikan pekerjaan dan evaluasi terlebih dahulu.

---

## 16. Authentication and Authorization Rules

Semua fitur yang terkait authentication dan authorization harus:

- mengikuti model role-based access control yang sesuai dengan proyek
- memastikan pengguna hanya bisa mengakses data dan tindakan yang sesuai peran mereka
- memperlakukan data warga, administrasi, dan keuangan sebagai data sensitif
- tidak mengandalkan asumsi bahwa “user yang login” otomatis berhak melakukan semua hal

Aturan tambahan:

- jangan melemahkan kontrol akses untuk mempermudah implementasi
- jangan mengubah peran pengguna tanpa alasan yang sah dan terdokumentasi
- jangan menampilkan data sensitif ke pengguna yang tidak berhak

---

## 17. Validation Rules

Validasi harus dilakukan secara konsisten.

Aturan wajib:

- validasi input di level aplikasi sebelum memproses data
- gunakan tipe dan schema yang aman untuk mencegah data invalid
- jangan mengabaikan validasi hanya karena fitur terlihat sederhana
- pastikan error feedback jelas dan informatif

Jangan gunakan bypass TypeScript safety tanpa justifikasi yang kuat dan terdokumentasi.

---

## 18. Error Handling Rules

Error handling harus konsisten dan aman.

Aturan wajib:

- jangan membiarkan error tidak tertangani
- tampilkan pesan error yang aman dan tidak terlalu teknis bagi pengguna akhir
- jangan mengekspos stack trace atau detail internal yang sensitif
- gunakan pola error handling yang sama di seluruh aplikasi

Untuk operasi yang penting, error harus ditangani dengan cara yang memungkinkan debugging dan pemulihan yang baik.

---

## 19. Logging Rules

Logging harus digunakan secara hati-hati dan tepat.

Aturan wajib:

- log peristiwa penting yang membantu debugging dan observability
- hindari logging data pribadi atau informasi sensitif
- jangan menumpuk log noise yang tidak berguna
- gunakan struktur log yang konsisten jika sistem sudah mengadopsinya

Jika log berpotensi mengandung data sensitif, pastikan tidak terekspos secara tidak sengaja.

---

## 20. UI/UX Rules

Antarmuka WargaHub harus sederhana, jelas, informatif, dan ramah pengguna.

Aturan wajib:

- prioritaskan pemahaman pengguna di atas estetika yang berlebihan
- desain harus terasa membantu, bukan membingungkan
- informasi penting harus mudah ditemukan
- gunakan bahasa yang jelas dan tidak terlalu teknis
- hindari elemen visual yang tidak memberikan manfaat nyata

UI/UX harus selalu mempertimbangkan pengguna dengan berbagai tingkat literasi digital.

---

## 21. Accessibility Rules

Semua antarmuka harus mempertimbangkan aksesibilitas.

Aturan wajib:

- gunakan label yang jelas untuk form dan elemen interaktif
- pastikan navigasi keyboard tetap berfungsi
- perhatikan kontras warna dan keterbacaan
- jangan mengandalkan warna saja untuk menyampaikan status atau pesan penting
- gunakan struktur semantik yang sesuai

Aksesibilitas bukan fitur tambahan; ini adalah bagian dari kualitas produk.

---

## 22. Responsive Design Rules

Aplikasi harus bekerja dengan baik di desktop, tablet, dan mobile.

Aturan wajib:

- desain tidak boleh rusak pada layar kecil
- elemen penting harus tetap mudah dijangkau
- jangan mengandalkan layout yang hanya cocok untuk desktop
- pastikan interaksi tetap nyaman pada perangkat berbeda

Prinsip responsif harus diterapkan sejak awal, bukan ditambahkan belakangan.

---

## 23. TypeScript Rules

TypeScript adalah standar utama proyek.

Aturan wajib:

- gunakan type safety secara aktif
- hindari penggunaan any tanpa justifikasi yang kuat
- gunakan tipe yang jelas untuk props, response, input, dan state
- hindari perilaku runtime yang membuat type menjadi tidak dapat dipercaya

Jika ada kebutuhan untuk mengabaikan keamanan tipe, harus ada alasan yang sangat jelas dan disertai penjelasan.

---

## 24. Naming Conventions

Penamaan harus konsisten dan mudah dipahami.

Aturan umum:

- gunakan nama yang menjelaskan fungsi atau makna, bukan kebiasaan singkatan yang tidak jelas
- pilih nama yang konsisten di seluruh codebase
- gunakan bahasa Inggris untuk identifier teknis, kecuali untuk domain yang sudah ditetapkan dalam Bahasa Indonesia
- hindari nama yang ambigu seperti data, thing, item, atau temp

Prinsip penting:

- nama harus membantu developer lain memahami kode dengan cepat

---

## 25. Code Organization Rules

Kode harus diorganisasi dengan cara yang memudahkan pemeliharaan.

Aturan wajib:

- kelompokkan kode berdasarkan fungsi atau domain yang jelas
- hindari file yang terlalu besar dan terlalu banyak tanggung jawab
- gunakan struktur modular yang sesuai dengan area proyek
- jangan menggabungkan urusan yang berbeda menjadi satu tempat yang tidak jelas

Jika ada perubahan besar, pertahankan readability dan keteraturan organisasi kode.

---

## 26. Git Rules

Git harus digunakan dengan disiplin.

Aturan wajib:

- jangan melakukan perubahan yang tidak terkait dalam satu commit
- jangan mengubah file yang bukan bagian tugas tanpa alasan yang jelas
- jangan menambah file yang tidak diperlukan
- jangan membuat commit yang berisi campuran fitur, refactor, dan perbaikan bug tanpa alasan yang jelas
- jangan push ke remote tanpa instruksi eksplisit dari pemilik proyek atau yang berwenang

Prinsip utama:

- perubahan harus bisa ditinjau dengan mudah dan aman

---

## 27. Commit Message Rules

Commit message harus jelas, ringkas, dan informatif.

Format yang disarankan:

- type: short summary

Contoh:

- feat: add resident list page
- fix: correct announcement status handling
- docs: add project context rulebook
- chore: update project documentation

Commit message tidak boleh ambigu atau terlalu umum seperti “update” atau “fix stuff”.

---

## 28. Branching Rules

Branch harus digunakan secara teratur dan terstruktur.

Aturan wajib:

- gunakan branch yang deskriptif dan spesifik untuk tugas tertentu
- hindari branch yang terlalu umum seperti temp atau test
- pastikan branch tidak mengandung perubahan yang tidak terkait

Branch harus mencerminkan tujuan pekerjaan yang sedang dilakukan.

---

## 29. Pull Request Rules

Pull request harus memudahkan review.

Aturan wajib:

- jelaskan apa yang berubah dan mengapa
- sertakan konteks singkat jika ada keputusan teknis yang penting
- jangan mengajukan PR yang berisi banyak perubahan yang tidak terkait
- pastikan perubahan telah diverifikasi sebelum PR dibuat
- jika ada risiko, jelaskan dengan jelas di PR

PR harus memudahkan reviewer memahami maksud perubahan, dampaknya, dan risikonya.

---

## 30. Testing Rules

Semua perubahan yang signifikan harus diuji sesuai kemampuan proyek.

Aturan wajib:

- jangan mengklaim bahwa kode bekerja tanpa verifikasi
- uji perubahan yang relevan dengan skenario yang paling dekat dengan masalah yang sedang ditangani
- jika fitur tidak memiliki test yang ada, tambahkan test yang sesuai jika tugas dan konteks memungkinkan
- jangan hanya mengandalkan inspeksi visual untuk menyimpulkan bahwa fitur aman

Untuk perubahan kecil, minimal verifikasi yang sesuai harus dilakukan.

---

## 31. Documentation Rules

Dokumentasi harus tetap sinkron dengan perubahan yang dilakukan.

Aturan wajib:

- update dokumentasi jika perubahan memengaruhi alur kerja, API, skema, atau perilaku pengguna
- jangan tinggalkan dokumentasi yang sudah usang jika perubahan memengaruhi pemahaman tim
- gunakan bahasa yang jelas dan konsisten dengan dokumentasi proyek

Dokumentasi yang tidak sinkron bisa menyebabkan kesalahan implementasi dan kebingungan di masa depan.

---

## 32. Environment Variable Rules

Variabel lingkungan harus ditangani dengan hati-hati.

Aturan wajib:

- jangan mengekspos secret di kode, dokumen, atau output terminal
- gunakan file environment yang aman dan tidak dikomit
- jangan mengubah konfigurasi lingkungan tanpa kebutuhan yang jelas
- pastikan nama variabel jelas dan konsisten

Jangan pernah commit .env atau file konfigurasi sensitif.

---

## 33. Dependency Rules

Dependensi harus dipilih dengan hati-hati.

Aturan wajib:

- jangan menambah dependency jika solusi yang sudah ada cukup
- pilih dependency yang aktif, stabil, dan sesuai kebutuhan
- pertimbangkan beban maintenance sebelum menambah library baru
- jangan mengubah dependency secara tidak perlu

Jika dependency baru diperlukan, pastikan alasan dan dampaknya jelas.

---

## 34. Performance Rules

Performa harus dipertimbangkan sejak awal.

Aturan wajib:

- jangan menambah beban komputasi yang tidak perlu
- hindari query atau operasi yang tidak efisien jika ada pola yang lebih baik
- pertimbangkan dampak performa terhadap UI dan API
- jangan mengorbankan maintainability demi optimasi prematur

Prioritas tetap pada solusi yang benar, aman, dan jelas sebelum optimasi yang rumit.

---

## 35. Data Privacy Rules

Data pengguna dan data komunitas harus diperlakukan sebagai data sensitif.

Aturan wajib:

- jangan menampilkan data pribadi secara luas tanpa otorisasi yang tepat
- hindari penyimpanan data yang tidak diperlukan
- lindungi informasi yang berkaitan dengan warga, iuran, surat, dan pengaduan
- jangan membuat data test atau sample yang meniru data asli secara tidak aman

Privasi data harus dipertimbangkan dalam desain fitur, penyimpanan, logging, dan API response.

---

## 36. Scrum and Task Rules

Proyek WargaHub mengikuti metode Scrum, sehingga setiap pekerjaan harus terarah.

Aturan wajib:

- setiap task harus memiliki tujuan yang jelas
- task harus bisa dikerjakan dalam batas yang realistis
- fokus harus tetap pada prioritas sprint yang sedang berjalan
- jika task terlalu besar, pecah menjadi item yang lebih kecil
- semua pekerjaan harus bisa diukur secara sederhana

Jangan mengerjakan fitur yang tidak terkait dengan sprint yang sedang berjalan tanpa persetujuan.

---

## 37. Definition of Done

Sebuah pekerjaan dianggap selesai hanya jika:

- tugas yang diminta telah diselesaikan sesuai requirement
- perubahan telah diverifikasi dengan cara yang sesuai
- kode atau dokumentasi yang relevan telah diperiksa
- tidak ada perubahan yang tidak perlu yang ikut terpakai
- risiko dan dampak telah dipertimbangkan
- jika ada ketidakpastian, hal tersebut telah didiskusikan atau diklarifikasi

Tidak cukup hanya “kode sudah ditulis”; pekerjaan harus benar-benar siap untuk review dan penggunaan.

---

## 38. Forbidden Practices

Praktik berikut dilarang:

- menginventasikan requirement bisnis
- menambahkan field database tanpa dasar yang jelas
- merombak arsitektur tanpa approval
- menambah dependency yang tidak perlu
- mengubah file yang tidak terkait dengan tugas
- menghapus fitur yang ada tanpa approval
- mem-bypass TypeScript safety tanpa alasan yang sah
- membiarkan bug yang jelas tanpa penanganan
- menyembunyikan masalah dengan mengklaim “sudah bekerja” tanpa verifikasi
- mengirim secret atau data sensitif ke tempat yang tidak aman
- commit .env atau file sensitif

---

## 39. AI Hallucination Prevention

Untuk mengurangi risiko hallucination, setiap perubahan harus didasarkan pada bukti dan konteks.

Aturan wajib:

- jangan menganggap informasi yang tidak terverifikasi sebagai kebenaran
- jangan menambahkan feature berdasarkan dugaan pribadi
- jika ada ketidakpastian, tanyakan sebelum bertindak
- gunakan dokumen proyek dan kode yang ada sebagai sumber utama
- hindari jawaban yang terlalu pasti saat data tidak cukup

AI harus mengutamakan ketelitian, bukan kecepatan semata.

---

## 40. Decision Escalation Rules

Jika suatu situasi melibatkan hal berikut, keputusan harus escalasi ke pemilik proyek atau reviewer yang berwenang:

- perubahan arsitektur besar
- perubahan schema database yang signifikan
- penambahan dependency besar
- perubahan pada alur otorisasi atau keamanan
- penambahan fitur yang berada di luar MVP atau scope saat ini
- keputusan yang berpotensi memengaruhi banyak area sistem

Aturan dasar:

- jangan mengambil keputusan strategis sendiri jika dampaknya besar
- jika ragu, minta klarifikasi sebelum melanjutkan

---

## Closing Statement

WargaHub adalah proyek yang harus dikembangkan dengan disiplin, kejelasan, dan tanggung jawab. Semua perubahan harus membantu proyek tumbuh secara aman, konsisten, dan sesuai arah yang telah ditetapkan.

Jika sebuah keputusan tidak jelas, prioritasnya adalah berhenti, minta klarifikasi, dan melanjutkan hanya setelah ada dasar yang memadai.
