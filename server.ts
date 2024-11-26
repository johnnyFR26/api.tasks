import fastify from "fastify";
import { taskRoutes } from "./routes/tasks.route";
import { attachmentsRoutes } from "./routes/attachments.route";
import { userRoutes } from "./routes/user.route";
import { mainScreen } from "./lib/mainScreen";
import cors from "@fastify/cors";

// Cria o servidor Fastify
const server = fastify();

// Registra rotas
server.register(taskRoutes);
server.register(attachmentsRoutes);
server.register(userRoutes);

// Configura CORS
server.register(cors, {
  origin: "*",
});

// Rota principal
server.get("/", async (request, reply) => {
  reply.type("text/html");
  reply.send(mainScreen());
});

// Exporta o manipulador de requisições para a Vercel
export default async (req: any, res: any) => {
  await server.ready(); // Garante que o Fastify está pronto para processar requisições
  server.server.emit("request", req, res);
};
