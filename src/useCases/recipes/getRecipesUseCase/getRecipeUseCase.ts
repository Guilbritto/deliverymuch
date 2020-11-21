export class GetRecipeUseCase{

  constructor(public GiphyProvider: IGifProvider, RecipePuppyProvider: IRecipeProvider) {}
  async execute(params: string){
    const keywords = params.split(',', 3)

  }

}