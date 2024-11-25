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

    fastify.route({
        method: "POST",
        url: "/tasks/createMany",
        handler: controller.createMany
    })

    fastify.route({
        method: "GET",
        url: "/tasks/getByUserId/:id",
        handler: controller.getByUserId
    })

    fastify.route({
        method: "PUT",
        url: "/tasks/updateMany",
        handler: controller.updateMany
    })
}