import { Event } from "../../database/entities/Event";
import { EventRepository } from "../../respositories/Event/EventRepository"

interface Props {
    page?: number,
    limit?: number,
}

export class FindAllUpcomingEventsPagedService {
    async execute({ page, limit }: Props): Promise<[Event[], undefined | number ]> {
        
        const offset = (page - 1) * limit;

        const eventRespository = new EventRepository();
        const [ events, count ] = await eventRespository.findAll(limit, offset);

        return [ events, count ];
    }
}