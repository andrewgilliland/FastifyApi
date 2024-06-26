import server from "./app";

const port = process.env.NODE_ENV === "development" ? 8080 : 3000;

server.listen({ port, host: "127.0.0.1" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
