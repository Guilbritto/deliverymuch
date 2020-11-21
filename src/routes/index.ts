import {Router} from 'express'
import { recipeRoutes } from './recipes.routes';

const route = Router();

route.use('/recipes', recipeRoutes)

export { route }