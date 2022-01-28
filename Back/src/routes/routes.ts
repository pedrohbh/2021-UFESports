import { Router } from "express";
import userRoute from './user.routes';
import studentRoute from './student.routes';
import sportRoute from './sport.routes';
import eventRoute from './event.routes';
import eventHasStudents from './eventHasStudents.routes';

const routes = Router();

routes.use("/users", userRoute);
routes.use("/students", studentRoute);
routes.use("/sports", sportRoute);
routes.use("/events", eventRoute);
routes.use("/eventhasstudents", eventHasStudents);

export { routes };