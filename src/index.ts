import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { Exercise } from "./types/Exercise";

const server = fastify();
const prisma = new PrismaClient();

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.get("/exercises", async (req, res) => {
  const exercises = (await prisma.exercises.findMany()) as Exercise[];

  return exercises;
});

server.post("/exercise", async (req, res) => {
  console.log(req.body);

  const exercise = await prisma.exercises.create({
    data: req.body as Exercise,
  });

  return exercise;
});

server.get("/workouts", async (request, reply) => {
  return "get all workouts";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
