import {IRecipe, IRecipeProvider} from './interface/IRecipeProvider'
import axios from 'axios'
import { AppError } from '../../../errors/AppError'

export interface IRecipePuppy {
  title:   string;
  version: number;
  href:    string;
  results: IRecipe[];
}

export class RecipePuppy implements IRecipeProvider{
  
  async getRecipeByIngredients(ingredients: string[]){

    try{

      const response = await axios.get<IRecipePuppy>(`${process.env.RECIPE_URL}?i=${ingredients.join(',')}`)
      return response.data.results
    }catch{
      throw new AppError('Não foi possivel buscar receitas, tente novamente mais tarde')
    }
      
  }
}
