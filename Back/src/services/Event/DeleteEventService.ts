import { getRepository } from "typeorm";
import { Event } from "../../database/entities/Event";
import AppError from '../../shared/errors/AppError';

export class DeleteEventService {
    async execute(id: number): Promise<void> {
        const repo = getRepository(Event);

        const event = await repo.findOne(id);

        if(!event) {
            throw new AppError({message: "Evento não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }

        await repo.delete(id);

        return ;
    }
}