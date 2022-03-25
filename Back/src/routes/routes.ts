import { Router } from "express";
import userRoute from './user.routes';
import studentRoute from './student.routes';
import sportRoute from './sport.routes';
import eventRoute from './event.routes';
import eventHasStudents from './eventHasStudents.routes';
import rdfRoute from './rdf.routes';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routes = Router();

routes.use("/users", userRoute);
routes.use("/students", ensureAuthenticated, studentRoute);
routes.use("/sports", ensureAuthenticated, sportRoute);
routes.use("/events", ensureAuthenticated, eventRoute);
routes.use("/eventhasstudents", ensureAuthenticated, eventHasStudents);
routes.use("/rdf", rdfRoute);

export { routes };