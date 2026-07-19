import { Badge, Button, Card, Input } from '@wargahub/ui';

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

        <div className="actions" role="group" aria-label="Aksi utama">
          <Button variant="primary">Jelajahi WargaHub</Button>
          <Button variant="secondary">Lihat Fitur</Button>
        </div>

        <Card
          title="Mulai dengan WargaHub"
          description="Aplikasi ini menjadi fondasi awal untuk pengalaman digital komunitas yang aman, informatif, dan ramah pengguna."
          className="feature-card"
        >
          <div className="badge-row" aria-label="Fitur utama">
            {highlights.map((item) => (
              <Badge key={item} variant="success">
                {item}
              </Badge>
            ))}
          </div>

          <div className="form-card">
            <Input label="Nama lingkungan" placeholder="Contoh: RT 03" />
            <Button variant="ghost" className="inline-action">
              Hubungi Admin
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
