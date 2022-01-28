import { getRepository } from "typeorm";
import { Event } from "../../database/entities/Event";

export class CreateEventService {
    async execute(event: Event): Promise<Event> {
        const repo = getRepository(Event);
        
        event.currentlyEnrolled = 0;
        const eventCreated = await repo.create(event);
        const eventSaved = await repo.save(eventCreated);

        return eventSaved;
    }
}