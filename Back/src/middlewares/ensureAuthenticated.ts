import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const token = request.headers.token;
    
    if(!token) {
        return response.status(401).json({message: "O usuário não esta autenticado."});
    }

    try {
        verify(token.toString(), "JWT_KEY");
        return next();        
    } catch (error) {
        return response.status(401).json({message: "O usuário não esta autenticado."});
    }
}