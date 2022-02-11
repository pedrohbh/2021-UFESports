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
    this.eventRouter.get('/:id', this.eventController.findById);
    this.eventRouter.post('/', this.eventController.create);
    this.eventRouter.put('/:id', this.eventController.update);
    this.eventRouter.delete('/:id', this.eventController.delete);

    return this.eventRouter;
  }
}

export default new EventRoute().routes();