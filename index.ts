import fastify from "fastify";

const server = fastify();

server.get("/exercises", async (request, reply) => {
  return "get all exercises\n";
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
