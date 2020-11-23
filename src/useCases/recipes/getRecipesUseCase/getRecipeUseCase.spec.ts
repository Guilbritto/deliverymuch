import { AppError } from "../../../errors/AppError"
import { FakeGiphyProvider } from "../../../shared/fakes/FakeGifProvider"
import { FakeRecipePuppy } from "../../../shared/fakes/FakeRecipeProvider"
import { GetRecipeUseCase } from "./getRecipeUseCase"

describe('getRecipes', () => {
  it('Shoul be able to get recipes', async () => {
    const fakeRecipeProvider = new FakeRecipePuppy()
    const fakeGifProvider = new FakeGiphyProvider()
    const getRecipeUseCase = new GetRecipeUseCase(fakeRecipeProvider, fakeGifProvider)

    const response = await getRecipeUseCase.execute('ingrediente1,ingrediente2,ingrediente3')

    expect(response).toHaveProperty('keywords')
    expect(response.keywords).toBeInstanceOf(Array)

  })
  it('Shoul not be able to get recipes withdout an ingredients', async () => {
    const fakeRecipeProvider = new FakeRecipePuppy()
    const fakeGifProvider = new FakeGiphyProvider()
    const getRecipeUseCase = new GetRecipeUseCase(fakeRecipeProvider, fakeGifProvider)


    expect(getRecipeUseCase.execute('')).rejects.toBeInstanceOf(AppError)
    
  })
})