import { Event } from "../../database/entities/Event";
import { EventRepository } from "../../respositories/Event/EventRepository";


export class CreateEventService {
    async execute(event: Event): Promise<Event> {
        const eventRespository = new EventRepository();
        event.currentlyEnrolled = 0;
        
        const eventSaved = await eventRespository.create(event);

        return eventSaved;
    }
}