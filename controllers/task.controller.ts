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

    async get(request: any, response: any) {
        const tasks = await db.tasks.findMany()
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

    async delete(request: any, response: any) {
        const tasks = await db.tasks.deleteMany()
        response.send(tasks)
    }
}