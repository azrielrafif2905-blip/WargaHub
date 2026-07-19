import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roles = [
  {
    kode: 'ADMIN',
    nama: 'Administrator',
    deskripsi: 'Administrator sistem WargaHub',
  },
  {
    kode: 'PENGURUS_RW',
    nama: 'Pengurus RW',
    deskripsi: 'Pengurus level RW',
  },
  {
    kode: 'PENGURUS_RT',
    nama: 'Pengurus RT',
    deskripsi: 'Pengurus level RT',
  },
  {
    kode: 'WARGA',
    nama: 'Warga',
    deskripsi: 'Pengguna warga komunitas',
  },
];

async function main() {
  for (const role of roles) {
    await prisma.peran.upsert({
      where: { kode: role.kode },
      update: {
        nama: role.nama,
        deskripsi: role.deskripsi,
        is_aktif: true,
      },
      create: {
        kode: role.kode,
        nama: role.nama,
        deskripsi: role.deskripsi,
        is_aktif: true,
      },
    });
  }

  console.log('Seed roles completed successfully.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
