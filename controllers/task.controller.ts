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
}