import { Router } from 'express'
import { EventController } from '../controllers/EventController';

export class EventRoute {

  public eventRouter: Router;
  public eventController: EventController;

  constructor() {
    this.eventRouter = Router();
    this.eventController = new EventController();
  }

  public routes() {
    this.eventRouter.post('/create', this.eventController.create);

    return this.eventRouter;
  }
}

export default new EventRoute().routes();