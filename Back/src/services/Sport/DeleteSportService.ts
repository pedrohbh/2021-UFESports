import { SportRepository } from "../../respositories/Sport/SportRepository";
import AppError from '../../shared/errors/AppError';

export class DeleteSportService {
    async execute(id: number): Promise<void> {
        const sportRespository = new SportRepository();

        const sport = await sportRespository.findById(id);

        if(!sport) {
            throw new AppError({message: "Esporte não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }

        sportRespository.delete(id);

        return ;
    }
}