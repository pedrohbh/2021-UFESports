import { Request, Response } from "express";
import { CreateEventService } from "../services/Event/CreateEventService";


export class EventController{
    async create(request: Request, response: Response) {
        try {
            const event = request.body;        

            const createEventService = new CreateEventService();
            const eventSaved = await createEventService.execute(event);

            return response.status(201).json(eventSaved);            
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }
}