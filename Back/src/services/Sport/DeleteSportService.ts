import { getRepository } from "typeorm";
import { Sport } from "../../database/entities/Sport";
import AppError from '../../shared/errors/AppError';

export class DeleteSportService {
    async execute(id: number): Promise<void> {
        const repo = getRepository(Sport);

        const sport = await repo.findOne(id);

        if(!sport) {
            throw new AppError({message: "Esporte não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }

        repo.delete(id);

        return ;
    }
}