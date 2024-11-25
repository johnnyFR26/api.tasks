import { db } from "../lib/db"

export class UserController {
    async create(request: any, response: any) {
        const data = request.body
        const user = await db.user.create({
            data
        })
        response.send(user)
    }

    async get(request: any, response: any) {
        const users = await db.user.findMany()
        response.send(users)
    }

    async update(request: any, response: any) {
        const id = request.params.id
        const data = request.body
        const user = await db.user.update({
            where: {
                id
            },
            data
        })
        response.send({status: "updated"},user)
    }
}