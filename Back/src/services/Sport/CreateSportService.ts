import { getRepository } from "typeorm";
import { Sport } from "../../database/entities/Sport";

export class CreateSportService {
    async execute(sport: Sport): Promise<Sport> {
        const repo = getRepository(Sport);
        
        const sportCreated = await repo.create(sport);
        const sportSaved = await repo.save(sportCreated);

        return sportSaved;
    }
}