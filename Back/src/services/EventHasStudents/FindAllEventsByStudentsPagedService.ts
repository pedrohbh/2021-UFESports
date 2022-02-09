import { getRepository } from "typeorm";
import { EventHasStudents } from "../../database/entities/EventHasStudents";
import { Event } from "../../database/entities/Event";

interface Props {
    studentId: number,
    page?: number,
    limit?: number,
}

export class FindAllEventsByStudentPagedService {
    async execute({ studentId, page, limit }: Props): Promise<[Event[], undefined | number ]> {
        const repo = getRepository(EventHasStudents);

        const offset = (page - 1) * limit;
        
        const [ eventHasStudents, count ] = await repo.createQueryBuilder("eventHasStudents")
            .innerJoinAndSelect('eventHasStudents.event', 'events')
            .innerJoinAndSelect('events.sport', 'sports')
            .where('student_id = :studentId', { studentId })
            .orderBy('events.dateOfTheEvent', 'ASC')
            .limit(limit)
            .offset(offset)
            .getManyAndCount();

        return [ eventHasStudents.map(eventHasStudent => eventHasStudent.event), count ];
    }
}