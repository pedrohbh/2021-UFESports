import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../../database/entities/User";
import AppError from "../../shared/errors/AppError";
import { Student } from '../../database/entities/Student';

interface Props {
    email: string;
    password: string;
}

export class LoginService {
    async execute({ email, password }: Props): Promise<any> {
        const repo = getRepository(User);
        const repoStudent = getRepository(Student);

        const user = await repo.findOne({ where: { email }});

        if(!user){
            throw new AppError({message: "Usuário ou senha incorretos!", statusCode: 401, title: "Error! Não foi acessar o sistema."});
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            throw new AppError({message: "Usuário ou senha incorretos!", statusCode: 401, title: "Error! Não foi acessar o sistema."});
        }
        
        const token = sign({}, 
        "JWT_KEY", {
          subject: user.id.toString(),
          expiresIn: "1d"  
        });

        const student = await repoStudent.findOne({ where: { userId: user.id } });

        const response = {
            userId: user.id,
            studentId: student.id,
            email: user.email,
            admin: user.admin.toString(),
            token: token
        }

        return response;
    }
}