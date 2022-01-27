import { Router } from "express";
import userRoute from './user.routes';
import sportRoute from './sport.routes';
import eventRoute from './event.routes';

const routes = Router();

routes.use("/users", userRoute);
routes.use("/sports", sportRoute);
routes.use("/events", eventRoute);

export { routes };