import { getRepository } from "typeorm";
import { Student } from "../../database/entities/Student";

interface Props {
    page?: number,
    limit?: number,
}

export class FindAllStudentsPagedService {
    async execute({ page, limit }: Props): Promise<[Student[], undefined | number ]> {
        const repo = getRepository(Student);

        const offset = (page - 1) * limit;
        
        const [ students, count ] = await repo.createQueryBuilder("students")
            .innerJoinAndSelect('students.user', 'users')
            .where('users.admin = :admin', { admin: false })
            .orderBy('users.name', 'ASC')
            .limit(limit)
            .offset(offset)
            .getManyAndCount();

        return [ students, count ];
    }
}