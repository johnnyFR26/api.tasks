import fastify from "fastify";
import { taskRoutes } from "./routes/tasks.route";
import { attachmentsRoutes } from "./routes/attachments.route";
import { userRoutes } from "./routes/user.route";
import { mainScreen } from "./lib/mainScreen";
import cors from "@fastify/cors";

const server = fastify();


server.register(taskRoutes)
server.register(attachmentsRoutes)
server.register(userRoutes)

server.register(cors, {
    origin: "*",
})

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});

server.get("/", async (request, reply) => {
    reply.type("text/html")
     reply.send(mainScreen())
});
