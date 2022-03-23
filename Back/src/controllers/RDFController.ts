import { Request, Response } from "express";
import { FindAllUpcomingEventsPagedService } from '../services/Event/FindAllUpcomingEventsPagedService';
import { FindEventByIdService } from "../services/Event/FindEventByIdService";
import { getRDFFile } from "../services/RDF/RDFFile"

export class RDFController{
    async findById(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const findEventByIdService = new FindEventByIdService();
            const event = await findEventByIdService.execute(+id);
            console.log(event);
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
}