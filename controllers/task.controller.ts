import { user } from './../node_modules/.prisma/client/index.d';
import { Http2ServerRequest } from "http2"
import { db } from "../lib/db"

export class TaskController {
    async create(request: any, response: any) {
        const data = request.body
        const task = await db.tasks.create({
            data
        })
        response.send(task)
    }

    async createMany(request: any, response: any) {
        const data = request.body.tasks
        const tasks = await db.tasks.createMany({
            data
        })
        response.send(tasks)
    }

    async get(request: any, response: any) {
        const tasks = await db.tasks.findMany()
        response.send(tasks)
    }

    async getByUserId(request: any, response: any) {
        const userId = request.params.id
        const tasks = await db.tasks.findMany({
            where: {
                userId
            }
        })
        response.send(tasks)
    }

    async update(request: any, response: any) {
        const id = request.params.id
        const data = request.body
        const task = await db.tasks.update({
            where: {
                id
            },
            data
        })
        response.send({status: "updated"},task)
    }

    async updateMany(request: any, response: any) {
        const userId = request.params.userId
        const data = request.body.tasks
        const tasks = await db.tasks.updateMany({
            where: {
                userId
            },
            data
        })
        response.send(tasks)
    }

    async delete(request: any, response: any) {
        const tasks = await db.tasks.deleteMany()
        response.send(tasks)
    }
}