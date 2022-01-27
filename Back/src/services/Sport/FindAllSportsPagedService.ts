import { getRepository } from "typeorm";
import { Sport } from "../../database/entities/Sport";

interface Props {
    page?: number,
    limit?: number,
}

export class FindAllSportsPagedService {
    async execute({ page, limit }: Props): Promise<[Sport[], undefined | number ]> {
        const repo = getRepository(Sport);

        const offset = (page - 1) * limit;
        
        const [ sports, count ] = await repo.createQueryBuilder("sports")
            .orderBy('sports.name', 'ASC')
            .limit(limit)
            .offset(offset)
            .getManyAndCount();

        return [ sports, count ];
    }
}