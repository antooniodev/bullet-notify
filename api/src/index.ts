import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const fastify = Fastify({ logger: true });

fastify.listen({ port: 3333 }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    console.log("(Server) Server is running on port 3333");
})