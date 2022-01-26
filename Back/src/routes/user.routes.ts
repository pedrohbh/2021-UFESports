import { Router } from 'express'
import { UserController } from '../controllers/UserController';

export class UserRoute {

  public userRouter: Router;
  public userController: UserController;

  constructor() {
    this.userRouter = Router();
    this.userController = new UserController();
  }

  public routes() {
    this.userRouter.post('/create', this.userController.create);
    this.userRouter.post('/login', this.userController.login);

    return this.userRouter;
  }
}

export default new UserRoute().routes();