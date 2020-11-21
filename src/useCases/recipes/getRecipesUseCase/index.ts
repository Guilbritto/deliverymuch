import { GiphyProvider } from "../provider/GifProvider"
import { RecipePuppy } from "../provider/RecipePuppy"
import { GetRecipeController } from "./getRecipeController"
import { GetRecipeUseCase } from "./getRecipeUseCase"

const recipeProvider = new RecipePuppy()
const gifProvider = new GiphyProvider()
const getRecipeUseCase = new GetRecipeUseCase(recipeProvider, gifProvider)
const recipeController = new GetRecipeController(getRecipeUseCase)


export {recipeController, getRecipeUseCase}