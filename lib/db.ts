import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => { // 创建一个新的 Prisma Client 实例，以便后续与数据库交互。
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton() // 确保在整个应用程序中只有一个 Prisma Client 实例，避免了多个实例同时存在导致的连接问题

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma // 如果当前环境不是生产环境，则将 prisma 实例赋值给 globalThis.prismaGlobal