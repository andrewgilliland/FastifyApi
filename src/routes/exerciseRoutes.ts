import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { ExerciseController } from "../controllers/exerciseController";
import { Exercise } from "../types/Exercise";

export default async function exerciseRoutes(fastify: FastifyInstance) {
  const exerciseController = new ExerciseController();
  const route = "/exercises";

  // Get all exercises
  fastify.get(route, async (req: FastifyRequest, res: FastifyReply) => {
    console.log("Get all exercises");
    const exercises = await exerciseController.getAllExercises();
    return exercises;
  });

  // Create exercise
  fastify.post(route, async (req: FastifyRequest, res: FastifyReply) => {
    console.log("Create exercise");
    const exercise = await exerciseController.createExercise(
      req.body as Partial<Exercise>
    );
    return exercise;
  });

  // Get exercise by id
  fastify.get(
    `${route}/:id`,
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      res: FastifyReply
    ) => {
      console.log("Get exercise by id");
      const id = req.params.id;
      const exercise = await exerciseController.getExerciseById(id);
      return exercise;
    }
  );

  // Update exercise by id
  fastify.put(
    `${route}/:id`,
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      res: FastifyReply
    ) => {
      console.log("Update exercise by id");
      const id = req.params.id;
      const exercise = await exerciseController.updateExerciseById(
        id,
        req.body as Partial<Exercise>
      );
      return exercise;
    }
  );

  // Delete exercise by id
  fastify.delete(
    `${route}/:id`,
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      res: FastifyReply
    ) => {
      console.log("Delete exercise by id");
      const id = req.params.id;
      const exercise = await exerciseController.deleteExerciseById(id);
      return exercise;
    }
  );

  // Search exercises by name
  fastify.get(
    `${route}/search/:search`,
    async (
      req: FastifyRequest<{ Params: { search: string } }>,
      res: FastifyReply
    ) => {
      console.log("Search exercises by name");
      const search = req.params.search;
      const exercises = await exerciseController.getExercisesBySearch(search);
      return exercises;
    }
  );
}
