import axios from 'axios'
import { AppError } from '../../errors/AppError'
import { IGif, IGifProvider } from '../../useCases/recipes/provider/interface/IGifProvider'

export class FakeGiphyProvider implements IGifProvider{
  async getGifByName(name: string): Promise<string> {
    try{
      return 'http://localhost/url/de/testes'
    }catch(err){
      throw new AppError('Ocorreu um erro ao tentar carregar as Gifs')
    }
  }

}