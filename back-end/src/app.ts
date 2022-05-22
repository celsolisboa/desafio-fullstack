import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

export { app };