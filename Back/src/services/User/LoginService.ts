import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../../database/entities/User";
import AppError from "../../shared/errors/AppError";

interface Props {
    email: string;
    password: string;
}

export class LoginService {
    async execute({ email, password }: Props): Promise<any> {
        const repo = getRepository(User);

        const user = await repo.findOne({ where: { email }});

        if(!user){
            throw new AppError({message: "Usuário ou senha incorretos!", statusCode: 401, title: "Error! Não foi acessar o sistema."});
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            throw new AppError({message: "Usuário ou senha incorretos!", statusCode: 401, title: "Error! Não foi acessar o sistema."});
        }
        
        const token = sign({
            userId: user.id,
            email: user.email,
            admin: user.admin
        }, 
        "JWT_KEY", {
          subject: user.id.toString(),
          expiresIn: "4h"  
        });

        return token;
    }
}