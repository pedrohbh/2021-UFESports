import "reflect-metadata";
import express from "express";
import ".";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is runing"));