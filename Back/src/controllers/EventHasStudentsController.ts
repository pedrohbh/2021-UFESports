import { Request, Response } from "express";
import { FindAllEventsByStudentPagedService } from "../services/EventHasStudents/FindAllEventsByStudentsPagedService";
import { SubscribeStudentFromTheEventService } from "../services/EventHasStudents/SubscribeStudentFromTheEventService";
import { UnsubscribeStudentFromTheEventService } from "../services/EventHasStudents/UnsubscribeStudentFromTheEventService";


export class EventHasStudentsController{
    async findAll(request: Request, response: Response) {
        try {
            const { page, limit } = request.query;
            const { id } = request.params; 

            const getPage = page || 1;
            const getLimit = limit || 10;

            const findAllEventsByStudentPagedService = new FindAllEventsByStudentPagedService();
            const events = await findAllEventsByStudentPagedService.execute({
                studentId: +id,
                page: +getPage,
                limit: +getLimit
            });

            return response.status(200).json(events);
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    async subscribe(request: Request, response: Response) {
        try {
            const { studentid, eventid } = request.body;       

            const subscribeStudentFromTheEventService = new SubscribeStudentFromTheEventService();
            await subscribeStudentFromTheEventService.execute({
                studentId: +studentid,
                eventId: +eventid
            });

            return response.status(200).send();            
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    public async unsubscribe(request: Request, response: Response) {
        try {
            const { studentid, eventid } = request.body;       

            const unsubscribeStudentFromTheEventService = new UnsubscribeStudentFromTheEventService();
            await unsubscribeStudentFromTheEventService.execute({
                studentId: +studentid,
                eventId: +eventid
            });

            return response.status(200).send();
        } catch (err) {
            return response.status(err.statusCode || 500).json({ message: err.message, title: err.title });
        }
    }
}