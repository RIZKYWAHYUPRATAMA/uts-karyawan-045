import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Hapus data lama biar bersih
  await prisma.penjualan.deleteMany();
  await prisma.absensi.deleteMany();
  await prisma.karyawan.deleteMany();

  const karyawan = await prisma.karyawan.create({
    data: {
      nik: 'NIK045',
      nama: 'Rizky 045',
      email: 'rizky045@uts.com',
      jabatan: 'Staff IT 045',
      gaji: 5000045,
      absensis: {
        create: [
          { status_kehadiran: 'Hadir 045' }
        ]
      },
      penjualans: {
        create: [
          { total_pendapatan: 50045, tanggal_transaksi: new Date() }
        ]
      }
    },
    include: {
      absensis: true,
      penjualans: true,
    }
  });

  console.log('Data Rizky 045 berhasil dibuat:', karyawan);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());