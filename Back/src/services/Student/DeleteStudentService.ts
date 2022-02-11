import { getRepository } from "typeorm";
import { Student } from "../../database/entities/Student";
import AppError from '../../shared/errors/AppError';

export class DeleteStudentService {
    async execute(id: number): Promise<void> {
        const repo = getRepository(Student);

        const student = await repo.findOne(id);

        if(!student) {
            throw new AppError({message: "Estudante não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }

        await repo.delete(id);

        return ;
    }
}