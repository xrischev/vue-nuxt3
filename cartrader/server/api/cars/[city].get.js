import { PrismaClient } from "@prisma/client";

// Initialize Prisma
const prisma = new PrismaClient();

export default defineEventHandler((event) => {
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);

    const filters = {
        city: city.toLowerCase(),
        ...(make && { make: make }), // include make filter if defined
        ...(minPrice && { price: { gte: parseInt(minPrice) } }), // include minPrice filter if defined
        ...(maxPrice && { price: { lte: parseInt(maxPrice) } }) // include maxPrice filter if defined
    };

    return prisma.car.findMany({
        where: filters,
    });
});