-- CreateTable
CREATE TABLE "Karyawan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "gaji" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Absensi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "karyawanId" INTEGER NOT NULL,
    "status_kehadiran" TEXT NOT NULL,
    CONSTRAINT "Absensi_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Penjualan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "karyawanId" INTEGER NOT NULL,
    "total_pendapatan" INTEGER NOT NULL,
    "tanggal_transaksi" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Penjualan_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Karyawan_nik_key" ON "Karyawan"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "Karyawan_email_key" ON "Karyawan"("email");
