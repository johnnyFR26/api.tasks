import { db } from "../lib/db"

export class UserController {
    async create(request: any, response: any) {
        const data = request.body
        const user = await db.user.create({
            data
        })
        response.send(user)
    }
}