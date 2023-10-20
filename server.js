import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();
const database = new DatabasePostgres();

server.get("/videos", async (request, reply) => {
  const search = request.query.search;
  return await database.list(search);
});

server.post("/videos", async (request, reply) => {
  const video = request.body;
  await database.create(video);
  return reply.status(201).send();
});

server.put("/videos/:id", async (request, reply) => {
  const id = request.params.id;
  const video = request.body;
  await database.update(id, video);
  return reply.status(204).send();
});

server.delete("/videos/:id", async (request, reply) => {
  const id = request.params.id;
  await database.delete(id);
  return reply.status(204).send();
});

server
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT || 3333,
  })
  .then((r) => console.log("server listening on", r));
