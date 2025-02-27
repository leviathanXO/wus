/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const globalForPrisma = global as unknown as { prisma: typeof prisma }

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function addUser() {
    const user = await prisma.user.create({
        data: {},
    })
    // .then(() => disconnectDB())
    // TODO: return true if added successfully
}

export async function countUsers() {
    let userNumber;
    const req = await prisma.user.count()
    .then((response) => userNumber = response)
    // .then(() => disconnectDB())
    
    return userNumber
}

export async function disconnectDB() {
     await prisma.$disconnect()
      .catch (async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
}

export default prisma