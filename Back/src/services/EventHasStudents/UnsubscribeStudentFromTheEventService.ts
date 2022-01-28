import { getRepository } from "typeorm";
import { Event } from "../../database/entities/Event";
import { Student } from "../../database/entities/Student";
import AppError from "../../shared/errors/AppError";
import { EventHasStudents } from '../../database/entities/EventHasStudents';

interface Props {
    studentId: number,
    eventId: number
}

export class UnsubscribeStudentFromTheEventService {
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

        const eventHasStudentSaved = await repo.findOne({where: { studentId, eventId }}); 
        if(!eventHasStudentSaved) {
            throw new AppError({message: "Este aluno já não estava inscrito neste evento!", statusCode: 400, title: "Error! Não foi possível se desinscrever!"});
        }

        eventSaved.currentlyEnrolled -= 1;
        await repoEvent.save(eventSaved);

        await repo.delete(eventHasStudentSaved.id);

        return;
    }
}