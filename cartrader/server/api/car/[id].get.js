import { PrismaClient } from "@prisma/client";

// Initialize Prisma
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;



    const car = await prisma.car.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    if (!car) {
        throw createError({
            statusCode: 404,
            message: `Car with id of ${id}  does not exist`
        });
    }

    return car;
});