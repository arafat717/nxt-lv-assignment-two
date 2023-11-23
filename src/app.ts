import cors from "cors";
import express, { Application, Request, Response } from "express";
import { UserRoute } from "./app/Modules/User/user.route";

const app: Application = express();

///parser
app.use(express.json());
app.use(cors());

////  application route
app.use("/api/users", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
