import { getRepository } from "typeorm";
import { Event } from "../../database/entities/Event";
import { Student } from "../../database/entities/Student";
import AppError from "../../shared/errors/AppError";
import { EventHasStudents } from '../../database/entities/EventHasStudents';

interface Props {
    studentId: number,
    eventId: number
}

export class SubscribeStudentFromTheEventService {
    async execute({studentId, eventId}: Props): Promise<void> {
        const repoStudent = getRepository(Student);
        const repoEvent = getRepository(Event);
        const repo = getRepository(EventHasStudents);

        const studentSaved = await repoStudent.findOne({where: {id: studentId}});
        if(!studentSaved) {
            throw new AppError({message: "Estudante não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }
        let eventSaved = await repoEvent.findOne({where: {id: eventId}});
        if(!eventSaved) {
            throw new AppError({message: "Evento não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }
        let subscribleEvent = await repo.findOne({where: {eventId, studentId}});
        if(subscribleEvent) {
            throw new AppError({message: "Desculpe você já está inscrito neste evento!", statusCode: 400, title: "Error ao se inscrever! "});
        }
        if(eventSaved.currentlyEnrolled >= eventSaved.maximumNumberOfParticipants) {
            throw new AppError({message: "Infelizmente este evento já está com o número máximo de alunos!", statusCode: 400, title: "Error! Não foi possível se inscrever!"});
        }

        eventSaved.currentlyEnrolled += 1;
        await repoEvent.save(eventSaved);

        const eventHasStudentsCreated = await repo.create({studentId, eventId});
        await repo.save(eventHasStudentsCreated);

        return;
    }
}