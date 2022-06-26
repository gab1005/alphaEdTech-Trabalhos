import express, { Express, Request, Response } from "express";
import { send } from "process";

const app: Express = express();
const port = 8080;

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`running in https://localhost:${port}`);
});
