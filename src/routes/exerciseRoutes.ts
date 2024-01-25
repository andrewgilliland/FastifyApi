import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { ExerciseController } from "../controllers/exerciseController";
import { Exercise } from "../types/Exercise";

export default async function exerciseRoutes(fastify: FastifyInstance) {
  const exerciseController = new ExerciseController();

  fastify.get("/exercises", async (req: FastifyRequest, res: FastifyReply) => {
    const exercises = await exerciseController.getAllExercises();
    return exercises;
  });

  fastify.post("/exercise", async (req: FastifyRequest, res: FastifyReply) => {
    const exercise = await exerciseController.createExercise(
      req.body as Partial<Exercise>
    );
    return exercise;
  });
}
