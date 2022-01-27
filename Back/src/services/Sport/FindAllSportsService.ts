import { getRepository } from "typeorm";
import { Sport } from "../../database/entities/Sport";

export class FindAllSportsService {
    async execute(): Promise<Sport[]> {
        const repo = getRepository(Sport);
        
        const sports = await repo.find({ order: { name: "ASC" }});

        return sports;
    }
}