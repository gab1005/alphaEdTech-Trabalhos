import Router from "express";
import { CreateUser } from "../controllers/create-user";
const route = Route();
route.route("/users")
  .post(new CreateUser().handle.bind(new CreateUser()));

export default route;