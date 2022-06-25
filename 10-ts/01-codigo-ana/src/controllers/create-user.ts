import {Request, Response} from "express";
import { CreateUserService } from "../services/create-use";
class CreateUser 
{
  private service = CreateUserService;

  public handle(req: Request, res: Response)
  {
    try
    {
      const response = new this.service.execute(req.body)

      res.status(201).json(response)
    }
    catch(err: any) //type: unknow or any
    {
      const [statusCode, messages] = err.message.split(":");

      if(Number(statusCode))
      {
        res.status(statusCode).json({
          data: {},
          messages: messages.split("|")
          
        }as APIResponse);
      }
      else
      {
        res.status(500).json({
          data: {},
          messages: [
            "unexpected erros while crateing user"
          ]
        }as APIResponse);
      }
    }
  }
}

export {CreateUser}