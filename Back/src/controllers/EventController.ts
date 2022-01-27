import { Request, Response } from "express";
import { CreateEventService } from "../services/Event/CreateEventService";
import { FindAllUpcomingEventsPagedService } from '../services/Event/FindAllUpcomingEventsPagedService';


export class EventController{
    async findAll(request: Request, response: Response) {
        try {
            const { page, limit } = request.query;

            const getPage = page || 1;
            const getLimit = limit || 10;

            const findAllEventsService = new FindAllUpcomingEventsPagedService();
            const events = await findAllEventsService.execute({
                page: +getPage,
                limit: +getLimit
            });

            return response.status(200).json(events);
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

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

    async update(request: Request, response: Response) {
        try {
            const event = request.body;        

            const createEventService = new CreateEventService();
            const eventUpdated = await createEventService.execute(event);

            return response.status(200).json(eventUpdated);            
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }
}