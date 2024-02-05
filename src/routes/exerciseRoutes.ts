import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { ExerciseController } from "../controllers/exerciseController";
import { Exercise } from "../types/Exercise";

export default async function exerciseRoutes(fastify: FastifyInstance) {
  const exerciseController = new ExerciseController();

  fastify.get("/exercises", async (req: FastifyRequest, res: FastifyReply) => {
    console.log("/exercises");
    const exercises = await exerciseController.getAllExercises();
    return exercises;
  });

  fastify.get(
    "/exercises/:search",
    async (
      req: FastifyRequest<{ Params: { search: string } }>,
      res: FastifyReply
    ) => {
      console.log("/exercises/:search");
      const search = req.params.search;
      const exercises = await exerciseController.getExercisesBySearch(search);
      return exercises;
    }
  );

  fastify.post("/exercise", async (req: FastifyRequest, res: FastifyReply) => {
    const exercise = await exerciseController.createExercise(
      req.body as Partial<Exercise>
    );
    return exercise;
  });

  fastify.get(
    "/exercise/:id",
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
    "/exercise/:id",
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      res: FastifyReply
    ) => {
      console.log("/exercise/:id PUT route");
      const id = req.params.id;
      const exercise = await exerciseController.updateExerciseById(
        id,
        req.body as Partial<Exercise>
      );
      return exercise;
    }
  );

  fastify.delete(
    "/exercise/:id",
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
