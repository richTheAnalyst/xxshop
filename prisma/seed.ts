import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import bcrypt from "bcryptjs";
import prodSeed from "./productSeed";

async function main() {
  console.log("🚀 Seed script started...");
  
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    console.log(`🔗 Connected to database: ${process.env.DATABASE_URL?.split('@')[1]}`);

    await prodSeed( prisma);

    const users = [
      { name: 'Alice Johnson', phone: '+1 555-0101', email: 'alice@example.com', password: 'password123' },
      { name: 'Bob Smith', phone: '+1 555-0102', email: 'bob@example.com', password: 'password123' },
      { name: 'Carol Davis', phone: '+1 555-0103', email: 'carol@example.com', password: 'password123' },
      { name: 'David Wilson', phone: '+1 555-0104', email: 'david@example.com', password: 'password123' },
      { name: 'Emma Brown', phone: '+1 555-0105', email: 'emma@example.com', password: 'password123' },
    ];

    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const result = await prisma.user.upsert({
        where: { email: user.email },
        update: {},
        create: {
          name: user.name,
          phone: user.phone,
          email: user.email,
          password: hashedPassword,
        },
      });
      console.log(`✅ Processed user: ${result.email} (ID: ${result.id})`);
    }
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
