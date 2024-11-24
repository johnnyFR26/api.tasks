import { db } from "../lib/db"

export class AttachmentsController {
    async create(request: any, response: any) {
        const data = request.body
        const attachment = await db.attachments.create({
            data
        })
        response.send(attachment)
    }
    
    async get(request: any, response: any) {
        const attachments = await db.attachments.findMany()
        response.send(attachments)
    }

    async update(request: any, response: any) {
        const id = request.params.id
        const data = request.body
        const attachment = await db.attachments.update({
            where: {
                id
            },
            data
        })
        response.send({status: "updated"},attachment)
    }
}