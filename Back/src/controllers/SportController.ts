import { Request, Response } from "express";
import { FindAllSportsPagedService } from "../services/Sport/FindAllSportsPagedService";
import { CreateSportService } from "../services/Sport/CreateSportService";
import { DeleteSportService } from '../services/Sport/DeleteSportService';


export class SportController{
    async findAll(request: Request, response: Response) {
        try {
            const { page, limit } = request.query;

            const getPage = page || 1;
            const getLimit = limit || 10;

            const findAllSportsService = new FindAllSportsPagedService();
            const sports = await findAllSportsService.execute({
                page: +getPage,
                limit: +getLimit
            });

            return response.status(200).json(sports);
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    async create(request: Request, response: Response) {
        try {
            const sport = request.body;        

            const createSportService = new CreateSportService();
            const sportSaved = await createSportService.execute(sport);

            return response.status(201).json(sportSaved);            
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    public async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const deleteSportService = new DeleteSportService();
            await deleteSportService.execute(+id);

            return response.status(200).send();
        } catch (err) {
            return response.status(err.statusCode || 500).json({ message: err.message, title: err.title });
        }
    }
}