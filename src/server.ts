import server from "./app";

console.log("process.env: ", process.env.NODE_ENV);

const port = process.env.NODE_ENV === "development" ? 8080 : 3000;

console.log("port: ", port);

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
