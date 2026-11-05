import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Karyawan } from './karyawan.model';

@Resolver(() => Karyawan)
export class KaryawanResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Karyawan])
  async karyawans() {
    return this.prisma.karyawan.findMany({
      include: { absensis: true, penjualans: true },
    });
  }

  @Query(() => Karyawan, { nullable: true })
  async karyawan(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.karyawan.findUnique({
      where: { id },
      include: { absensis: true, penjualans: true },
    });
  }
}