import fastify from "fastify";
import cors from "@fastify/cors";
import authRoutes from "./routes/authRoutes";
import exerciseRoutes from "./routes/exerciseRoutes";
import workoutRoutes from "./routes/workoutRoutes";

const server = fastify();

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.get("/", async (request, reply) => {
  return { message: "Hello, ReactFit💪!" };
});

server.register(authRoutes);
server.register(exerciseRoutes);
server.register(workoutRoutes);

export default server;
