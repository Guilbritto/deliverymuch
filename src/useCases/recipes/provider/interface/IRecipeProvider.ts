

export interface IRecipeProvider{
  getRecipeByIngredients(ingredients: string[]): Promise<IRecipe[]>
}
export interface IRecipe {
  title:       string;
  href:        string;
  ingredients: string;
  thumbnail:   string;
}
