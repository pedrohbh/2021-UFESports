import { Sport } from "../../database/entities/Sport";
import { SportRepository } from "../../respositories/Sport/SportRepository";

export class CreateSportService {
    async execute(sport: Sport): Promise<Sport> {
        const sportRespository = new SportRepository();
        
        const sportSaved = await sportRespository.create(sport);

        return sportSaved;
    }
}