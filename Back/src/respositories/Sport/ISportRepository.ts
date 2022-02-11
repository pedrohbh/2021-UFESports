import { Sport } from "../../database/entities/Sport";

export default interface ISportRespository{
    findById(id: number): Promise<Sport>;

    findAll(limit: number, offset:number): Promise<[Sport[],number]>;

    create(sport: Sport) : Promise<Sport>;

    delete(id: number): Promise<void>;
}