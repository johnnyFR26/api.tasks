import { FastifyInstance } from "fastify";
import { AttachmentsController } from "../controllers/attachments.controller";

const controller = new AttachmentsController()
export async function attachmentsRoutes(fastify: FastifyInstance) {
    fastify.route({
        method: "POST",
        url: "/attachments",
        handler: controller.create,
    });

    fastify.route({
        method: "GET",
        url: "/attachments",
        handler: controller.get,   
    });

    fastify.route({
        method: "PUT",
        url: "/attachments/:id",
        handler: controller.update
    })
}