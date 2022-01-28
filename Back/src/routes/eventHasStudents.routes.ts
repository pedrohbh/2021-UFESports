import { Router } from 'express'
import { EventHasStudentsController } from '../controllers/EventHasStudentsController';

export class EventHasStudentsRoute {

  public eventHasStudentsRouter: Router;
  public eventHasStudentsController: EventHasStudentsController;

  constructor() {
    this.eventHasStudentsRouter = Router();
    this.eventHasStudentsController = new EventHasStudentsController();
  }

  public routes() {
    this.eventHasStudentsRouter.get('/:id', this.eventHasStudentsController.findAll);
    this.eventHasStudentsRouter.post('/subscrive', this.eventHasStudentsController.subscribe);
    this.eventHasStudentsRouter.post('/unsubscrive', this.eventHasStudentsController.unsubscribe);

    return this.eventHasStudentsRouter;
  }
}

export default new EventHasStudentsRoute().routes();