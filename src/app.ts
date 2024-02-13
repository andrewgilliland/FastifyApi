import fastify from "fastify";
import cors from "@fastify/cors";
import exerciseRoutes from "./routes/exerciseRoutes";
import workoutRoutes from "./routes/WorkoutRoutes";

const server = fastify();

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.register(exerciseRoutes);
server.register(workoutRoutes);

export default server;
