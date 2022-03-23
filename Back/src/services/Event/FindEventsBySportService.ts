import { Event } from "../../database/entities/Event";
import { EventRepository } from "../../respositories/Event/EventRepository"

interface Props {
    page?: number,
    limit?: number,
    sport_id: number,
}

export class FindEventsBySportService {
    async execute({ page, limit, sport_id }: Props): Promise<[Event[], undefined | number ]> {
        
        const offset = (page - 1) * limit;

        const eventRespository = new EventRepository();
        const [ events, count ] = await eventRespository.findBySport(limit, offset, sport_id);

        return [ events, count ];
    }
}