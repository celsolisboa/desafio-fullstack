import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/combine.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(routes);

dotenv.config();

app.listen(4000, () => {
  console.log("Server Running on port 4000");
});
