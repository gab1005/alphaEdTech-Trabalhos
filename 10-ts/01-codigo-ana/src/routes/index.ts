import Users from  "./users"
import express from "express"
import { APIResponse } from "../models"

const app = express()

app.user(express.urlencode({extended: false}))
app.user(express.json());

app.use(Users)

export default app;