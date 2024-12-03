import fastify from "fastify";
import { taskRoutes } from "./routes/tasks.route";
import { attachmentsRoutes } from "./routes/attachments.route";
import { userRoutes } from "./routes/user.route";
import { mainScreen } from "./lib/mainScreen";
import cors from "@fastify/cors";

const server = fastify();

server.register(taskRoutes);
server.register(attachmentsRoutes);
server.register(userRoutes);

server.register(cors, {
  origin: "*",
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
})

server.get("/", async (request, reply) => {
  reply.type("text/html");
  const html = await mainScreen();
  reply.send(html);
});

export default async (req: any, res: any) => {
  await server.ready();
  server.server.emit("request", req, res);
};
