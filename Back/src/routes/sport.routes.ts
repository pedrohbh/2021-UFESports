import { Router } from 'express'
import { SportController } from '../controllers/SportController';

export class SportRoute {

  public sportRouter: Router;
  public sportController: SportController;

  constructor() {
    this.sportRouter = Router();
    this.sportController = new SportController();
  }

  public routes() {
    this.sportRouter.get('/', this.sportController.findAll);
    this.sportRouter.post('/', this.sportController.create);
    this.sportRouter.delete('/:id', this.sportController.delete);

    return this.sportRouter;
  }
}

export default new SportRoute().routes();