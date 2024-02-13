import { FastifyInstance } from "fastify";
import { WorkoutController } from "../controllers/workoutController";

export default async function workoutRoutes(fastify: FastifyInstance) {
  const workoutController = new WorkoutController();
  const route = "/workouts";

  // Get all workouts
  fastify.get(route, async (req, res) => {
    console.log("Get all workouts");
    const workouts = await workoutController.getAllWorkouts();
    return workouts;
  });
}
