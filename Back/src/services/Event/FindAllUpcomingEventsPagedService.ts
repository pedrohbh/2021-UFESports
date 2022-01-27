import { getRepository } from "typeorm";
import { Event } from "../../database/entities/Event";

interface Props {
    page?: number,
    limit?: number,
}

export class FindAllUpcomingEventsPagedService {
    async execute({ page, limit }: Props): Promise<[Event[], undefined | number ]> {
        const repo = getRepository(Event);

        const offset = (page - 1) * limit;
        
        const [ events, count ] = await repo.createQueryBuilder("events")
            .innerJoinAndSelect('events.sport', 'sports')
            .where('events.date_of_the_event >= :dateOfTheEvent', { dateOfTheEvent: new Date() })
            .orderBy('events.dateOfTheEvent', 'ASC')
            .limit(limit)
            .offset(offset)
            .getManyAndCount();

        return [ events, count ];
    }
}