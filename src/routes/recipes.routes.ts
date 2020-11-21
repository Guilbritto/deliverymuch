import {Router} from 'express'
import { recipeController } from '../useCases/recipes/getRecipesUseCase'

const recipeRoutes = Router()

recipeRoutes.get('/',recipeController.handle.bind(recipeController))

export { recipeRoutes }