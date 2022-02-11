import { EventRepository } from "../../respositories/Event/EventRepository";
import { Event } from "../../database/entities/Event";
import AppError from "../../shared/errors/AppError";

export class UpdateEventService {
    async execute(id:number, event: Event): Promise<Event> {

        const eventRespository = new EventRepository();
        event.id = id;
        
        const eventSaved = await eventRespository.findById(event.id);

        if(!eventSaved) {
            throw new AppError({message: "Evento não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }

        const eventUpdated = await eventRespository.update(event);

        return eventUpdated;
    }
}