import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import mysql from "mysql2";




const connectionString = process.env.DATABASE_URL!

const adapter = new PrismaMariaDb(connectionString)

export const prisma = new PrismaClient({ adapter})