import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Absensi {
  @Field(() => Int) id: number;
  @Field(() => Int) karyawanId: number;
  @Field() status_kehadiran: string;
}

@ObjectType()
export class Penjualan {
  @Field(() => Int) id: number;
  @Field(() => Int) karyawanId: number;
  @Field(() => Int) total_pendapatan: number;
  @Field() tanggal_transaksi: Date;
}

@ObjectType()
export class Karyawan {
  @Field(() => Int) id: number;
  @Field() nik: string;
  @Field() nama: string;
  @Field() email: string;
  @Field() jabatan: string;
  @Field(() => Int) gaji: number;
  @Field(() => [Absensi]) absensis: Absensi[];
  @Field(() => [Penjualan]) penjualans: Penjualan[];
}