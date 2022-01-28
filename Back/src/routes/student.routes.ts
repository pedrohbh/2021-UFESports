import { Router } from 'express'
import { StudentController } from '../controllers/StudentController';

export class StudentRoute {

  public studentRouter: Router;
  public studentController: StudentController;

  constructor() {
    this.studentRouter = Router();
    this.studentController = new StudentController();
  }

  public routes() {
    this.studentRouter.get('/', this.studentController.findAll);
    this.studentRouter.delete('/:id', this.studentController.delete);

    return this.studentRouter;
  }
}

export default new StudentRoute().routes();