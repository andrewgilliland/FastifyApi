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

  fastify.get(
    "/exercises/:id",
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      res: FastifyReply
    ) => {
      const id = req.params.id;
      const exercise = await exerciseController.getExerciseById(id);
      return exercise;
    }
  );

  fastify.put(
    "/exercises/:id",
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      res: FastifyReply
    ) => {
      const id = req.params.id;
      const exercise = await exerciseController.updateExerciseById(
        id,
        req.body as Partial<Exercise>
      );
      return exercise;
    }
  );

  fastify.delete(
    "/exercises/:id",
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      res: FastifyReply
    ) => {
      const id = req.params.id;
      const exercise = await exerciseController.deleteExerciseById(id);
      return exercise;
    }
  );
}
