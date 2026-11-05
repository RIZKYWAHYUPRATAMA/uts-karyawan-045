import { Module } from '@nestjs/common';
import { KaryawanResolver } from './karyawan.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [KaryawanResolver, PrismaService],
})
export class KaryawanModule {}