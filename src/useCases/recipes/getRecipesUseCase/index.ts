import { RecipePuppy } from "../provider/RecipePuppy"
import { GetRecipeController } from "./getRecipeController"
import { GetRecipeUseCase } from "./getRecipeUseCase"

const recipeProvider = new RecipePuppy()
const getRecipeUseCase = new GetRecipeUseCase(recipeProvider)
const recipeController = new GetRecipeController(getRecipeUseCase)


export {recipeController, getRecipeUseCase}