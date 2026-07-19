const highlights = ['Pengumuman', 'Surat', 'Iuran', 'Pengaduan'];

export default function App() {
  return (
    <div className="app-shell">
      <main className="hero" aria-labelledby="welcome-title">
        <p className="eyebrow">Platform Digital Lingkungan Warga</p>
        <h1 id="welcome-title">WargaHub</h1>
        <p className="subtitle">
          Selamat datang di pusat informasi dan layanan lingkungan yang lebih sederhana,
          jelas, dan terhubung.
        </p>

        <section className="card" aria-label="Fitur utama">
          <h2>Mulai dengan WargaHub</h2>
          <p>
            Aplikasi ini menjadi fondasi awal untuk pengalaman digital komunitas yang
            aman, informatif, dan ramah pengguna.
          </p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
