import { getRepository } from "typeorm";
import AppError from '../shared/errors/AppError';
import { User } from '../database/entities/User';

interface Props {
    email: string;
    password: string;
}

export class LoginService {
    async execute({ email, password }: Props): Promise<User> {
        const repo = getRepository(User);

        const user = await repo.findOne({ where: { email, password}});

        if(!user){
            throw new AppError({message: "Usuário ou senha incorretos!", statusCode: 400, title: "Error! Não foi acessar o sistema."});
        }

        return user;
    }
}