import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = global as unknown as { prisma: PrismaClient; pool: pg.Pool };

const getPrisma = () => {
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const client = new PrismaClient({ adapter, log: ["query"] });
  
  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.pool = pool;
  }
  
  return client;
};

export const prisma = globalForPrisma.prisma || getPrisma();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
