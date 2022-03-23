import { Event } from "../../database/entities/Event";

export default interface IEventRespository{
    findById(id: number): Promise<Event>;

    findAll(limit: number, offset:number): Promise<[Event[],number]>;

    findBySport(limit: number, offset:number, sport: number): Promise<[Event[],number]>;

    create(sport: Event) : Promise<Event>;

    update(event: Event): Promise<Event>;
}