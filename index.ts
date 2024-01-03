import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const server = fastify();
const prisma = new PrismaClient();

server.get("/exercises", async (req, res) => {
  const exercises = await prisma.exercises.findMany();

  console.log("exercises: ", exercises);
  return exercises;
});

server.post("/create-exercise", async (req, res) => {
  //   const exercise = await prisma.exercise.create({
  //     data: {
  //       name: "clap pushup",
  //       difficulty: "HARD",
  //       equipment: "NONE",
  //       exerciseType: "STRENGTH",
  //       forceType: "PUSH",
  //       mechanics: "COMPOUND",
  //       secondaryMuscleGroup: ["triceps"],
  //       targetMuscleGroup: "chest",
  //     },
  //   });

  //   console.log("exercise", exercise);
  return `create exercise\n`;
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
