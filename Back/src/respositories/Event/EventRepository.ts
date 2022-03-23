import { getRepository, Repository } from "typeorm";
import { Event } from "../../database/entities/Event";
import IEventRespository from "./IEventRepository";

export class EventRepository implements IEventRespository{
    
    private repo: Repository<Event>;

    constructor(){
        this.repo = getRepository(Event);
    }

    public async findById(id: number): Promise<Event> {
        return await this.repo.findOne(id);
    }

    public async findAll (limit: number, offset: number) : Promise<[Event[], number]> {
        
        return await this.repo.createQueryBuilder("events")
                            .innerJoinAndSelect('events.sport', 'sports')
                            .where('events.date_of_the_event >= :dateOfTheEvent', { dateOfTheEvent: new Date() })
                            .orderBy('events.dateOfTheEvent', 'ASC')
                            .limit(limit)
                            .offset(offset)
                            .getManyAndCount();

    }

    public async findBySport (limit: number, offset: number, sport: number) : Promise<[Event[], number]> {
        
        return await this.repo.createQueryBuilder("events")
                            .innerJoinAndSelect('events.sport', 'sports')
                            .where('events.date_of_the_event >= :dateOfTheEvent AND events.sport_id = :sport_id', { dateOfTheEvent: new Date(), sport_id: sport })
                            .orderBy('events.dateOfTheEvent', 'ASC')
                            .limit(limit)
                            .offset(offset)
                            .getManyAndCount();

    }

    public async create(event: Event) : Promise<Event> {

        const eventCreated = await this.repo.create(event);
        const eventSaved = await this.repo.save(eventCreated);

        return eventSaved;
    }

    public async update(event: Event): Promise<Event> {
        const eventUpdate = await this.repo.save(event);

        return eventUpdate;
    }
}