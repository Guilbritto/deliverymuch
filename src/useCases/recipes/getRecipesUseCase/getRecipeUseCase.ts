import { response } from "express";
import { recipeController } from ".";
import { AppError } from "../../../errors/AppError";
import { IGifProvider } from "../provider/interface/IGifProvider";
import { IRecipeProvider } from "../provider/interface/IRecipeProvider";

export class GetRecipeUseCase{

  constructor(public RecipePuppyProvider: IRecipeProvider, public GiphyProvider: IGifProvider ) {}
  async execute(params: string){
    
    if(!params){
      throw new AppError('É necessário informar os ingredientes')
    }

    const keywords = params.split(',', 3)
    const recipes = await this.RecipePuppyProvider.getRecipeByIngredients(keywords)
    const newRecipes = recipes.map( async recipe => {

      const gif = await this.GiphyProvider.getGifByName(recipe.title)
      return {
        title: recipe.title,
        ingredients: recipe.ingredients.split(',').sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0 ) ),
        link: recipe.href,
        gif
      }
    })
    return  Promise.all(newRecipes).then(response => {
      return {
        keywords,
        response
      }
    }
   )
    
  }

}