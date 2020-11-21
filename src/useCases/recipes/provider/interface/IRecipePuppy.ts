export interface IRecipePuppy{
  getRecipeByIngredients(ingredients: []): Promise<void>
}