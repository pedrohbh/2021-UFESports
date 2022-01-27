import { getRepository } from "typeorm";
import { Event } from "../../database/entities/Event";

export class FindEventByIdService {
    async execute(id: number): Promise<Event> {
        const repo = getRepository(Event);

        const event = await repo.findOne(id);

        return event;
    }
}