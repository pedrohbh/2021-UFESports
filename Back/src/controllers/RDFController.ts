import { Request, Response } from "express";
import { FindAllUpcomingEventsPagedService } from '../services/Event/FindAllUpcomingEventsPagedService';
import { FindEventByIdService } from "../services/Event/FindEventByIdService";
import { FindEventsBySportService } from "../services/Event/FindEventsBySportService";
import { getRDFFile } from "../services/RDF/RDFFile"

export class RDFController{
    async findById(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const findEventByIdService = new FindEventByIdService();
            const event = await findEventByIdService.execute(+id);
            
            response.set('Content-Type', 'text/xml');
            return response.send(getRDFFile([event]));
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
            const [events] = await findAllEventsService.execute({
                page: +getPage,
                limit: +getLimit
            });

            response.set('Content-Type', 'text/xml');
            return response.send(getRDFFile(events));
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    async findBySport(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const { page, limit } = request.query;

            const getPage = page || 1;
            const getLimit = limit || 10;
            
            const findEventsBySportService = new FindEventsBySportService();
            const [events] = await findEventsBySportService.execute({
                page: +getPage,
                limit: +getLimit,
                sport_id: +id
            });
            
            response.set('Content-Type', 'text/xml');
            return response.send(getRDFFile(events));
        } catch (err) {
            return response.status(err.statusCode || 500).json({ message: err.message, title: err.title });
        }     
    }
}