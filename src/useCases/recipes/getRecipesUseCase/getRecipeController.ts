import {Request, Response} from 'express'
import { GetRecipeUseCase } from './getRecipeUseCase';

export class GetRecipeController{

  constructor(public getRecipeUseCase: GetRecipeUseCase){}
  async handle(request: Request, response: Response){
    const {query} = request
    
    const recipes = await this.getRecipeUseCase.execute(query.i as string);
    return response.status(200).json(recipes)

  }
}