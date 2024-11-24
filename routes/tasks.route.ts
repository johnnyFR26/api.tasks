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

    fastify.route({
        method: "GET",
        url: "/tasks",
        handler: controller.get,
    });

    fastify.route({
        method: "PUT",
        url: "/tasks/:id",
        handler: controller.update
    })

    fastify.route({
        method: "DELETE",
        url: "/tasks",
        handler: controller.delete
    })
}