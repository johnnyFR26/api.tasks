//file for routes related to tasks
import { FastifyInstance } from "fastify";
import { TaskController } from "../controllers/task.controller";


const controller = new TaskController();
export async function taskRoutes(fastify: FastifyInstance) {
    fastify.route({
        method: "POST",
        url: "/tasks",
        handler: controller.create,
    });
}