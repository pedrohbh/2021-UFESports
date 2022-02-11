import { Request, Response } from "express";
import { CreateEventService } from "../services/Event/CreateEventService";
import { DeleteEventService } from "../services/Event/DeleteEventService";
import { FindAllUpcomingEventsPagedService } from '../services/Event/FindAllUpcomingEventsPagedService';
import { UpdateEventService } from "../services/Event/UpdateEventService";
import { FindEventByIdService } from "../services/Event/FindEventByIdService";

export class EventController{
    async findById(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const findEventByIdService = new FindEventByIdService();
            const event = await findEventByIdService.execute(+id);

            return response.status(200).json(event);
        } catch (err) {
            return response.status(err.statusCode || 500).json({ message: err.message, title: err.title });
        }     
    }


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
            const { id } = request.params;

            const updateEventService = new UpdateEventService();
            const eventUpdated = await updateEventService.execute(+id, event);

            return response.status(200).json(eventUpdated);            
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    public async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const deleteEventService = new DeleteEventService();
            await deleteEventService.execute(+id);

            return response.status(200).send();
        } catch (err) {
            return response.status(err.statusCode || 500).json({ message: err.message, title: err.title });
        }
    }
}