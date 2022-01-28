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
    this.eventRouter.get('/', this.eventController.findAll);
    this.eventRouter.post('/', this.eventController.create);
    this.eventRouter.put('/', this.eventController.update);

    return this.eventRouter;
  }
}

export default new EventRoute().routes();