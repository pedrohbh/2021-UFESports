import { getRepository } from "typeorm";
import { Event } from "../../database/entities/Event";
import AppError from "../../shared/errors/AppError";

export class UpdateEventService {
    async execute(event: Event): Promise<Event> {
        const repo = getRepository(Event);

        const eventSaved = await repo.findOne(event.id);
        if(!eventSaved) {
            throw new AppError({message: "Evento não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }

        const eventUpdated = await repo.save(event);

        return eventUpdated;
    }
}