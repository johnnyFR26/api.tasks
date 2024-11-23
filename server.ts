import fastify from "fastify";
import { taskRoutes } from "./routes/tasks.route";

const server = fastify();

server.register(taskRoutes)

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});

server.get("/", async (request, reply) => {
    return { hello: "world" };
});
