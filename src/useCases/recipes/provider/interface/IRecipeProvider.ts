export interface IRecipeProvider{
  getRecipeByIngredients(ingredients: []): Promise<void>
}