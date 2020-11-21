import { GetRecipeController } from "./getRecipeController"
import { GetRecipeUseCase } from "./getRecipeUseCase"

const getRecipeUseCase = new GetRecipeUseCase()
const recipeController = new GetRecipeController(getRecipeUseCase)


export {recipeController, getRecipeUseCase}