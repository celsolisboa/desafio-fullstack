import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import "./database";

dotenv.config();
const app = express();

app.use(express.json());

export { app };