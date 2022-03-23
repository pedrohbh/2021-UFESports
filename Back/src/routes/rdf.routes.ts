import { Router } from 'express'
import { RDFController } from '../controllers/RDFController';

export class RDFRoute {

  public rdfRouter: Router;
  public rdfController: RDFController;

  constructor() {
    this.rdfRouter = Router();
    this.rdfController = new RDFController();
  }

  public routes() {
    this.rdfRouter.get('/events', this.rdfController.findAll);
    this.rdfRouter.get('/events/:id', this.rdfController.findById);
    this.rdfRouter.get('/events/sport/:id', this.rdfController.findBySport);

    return this.rdfRouter;
  }
}

export default new RDFRoute().routes();