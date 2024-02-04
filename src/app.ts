import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import exerciseRoutes from "./routes/exerciseRoutes";

const server = fastify();
const prisma = new PrismaClient();

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.register(exerciseRoutes);

server.get("/workouts", async (request, reply) => {
  return "get all workouts";
});

export default server;
