import { Sport } from "../../database/entities/Sport";
import { SportRepository } from "../../respositories/Sport/SportRepository"

interface Props {
    page?: number,
    limit?: number,
}

export class FindAllSportsPagedService {
    async execute({ page, limit }: Props): Promise<[Sport[], undefined | number ]> {

        const offset = (page - 1) * limit;

        const sportRespository = new SportRepository();
        const [ sports, count ] = await sportRespository.findAll(limit, offset);

        return [ sports, count ];
    }
}