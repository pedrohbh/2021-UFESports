import { getRepository, Repository } from "typeorm";
import { Sport } from "../../database/entities/Sport";
import ISportRespository from "./ISportRepository";

export class SportRepository implements ISportRespository{
    
    private repo: Repository<Sport>;

    constructor(){
        this.repo = getRepository(Sport);
    }

    public async findById(id: number): Promise<Sport> {
        return await this.repo.findOne(id);
    }

    public async findAll (limit: number, offset: number) : Promise<[Sport[], number]> {
        
        return await this.repo.createQueryBuilder("sports")
                                .orderBy('sports.name', 'ASC')
                                .limit(limit)
                                .offset(offset)
                                .getManyAndCount();

    }

    public async create(sport: Sport) : Promise<Sport> {

        const sportCreated = await this.repo.create(sport);
        const sportSaved = await this.repo.save(sportCreated);

        return sportSaved
    }

    public async delete(id: number): Promise<void> {
        await this.repo.delete(id);
    }
}