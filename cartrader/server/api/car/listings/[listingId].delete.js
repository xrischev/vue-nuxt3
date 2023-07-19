import {PrismaClient} from "@prisma/client";

// Initialize Prisma
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const {listingId} = event.context.params;

    return prisma.car.delete({
        where:{
            id:parseInt(listingId)
        }
    })
})