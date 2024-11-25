import { FastifyInstance } from "fastify"
import { UserController } from "../controllers/user.controller";

const controller = new UserController();


export async function userRoutes(fastify: FastifyInstance) {
     fastify.route({
          method: "POST",
          url: "/users",
          handler: controller.create,
     });

     fastify.route({
          method: "GET",
          url: "/users",
          handler: controller.get,
    })

     fastify.route({
          method: "PUT",
          url: "/users/:id",
          handler: controller.update
     })
}