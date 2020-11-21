import { IGif, IGifProvider } from "./interface/IGifProvider";
import axios, { AxiosError } from 'axios'
import { response } from "express";
import { AppError } from "../../../errors/AppError";

export class GiphyProvider implements IGifProvider{
  async getGifByName(name: string): Promise<string> {
    try{

      const response = await axios.get<IGif>(`${process.env.GIPHY_URL}`, { params : {
        api_key: process.env.GIPHY_API_KEY,
        limit: process.env.GIPHY_API_LIMIT,
        rating: process.env.GIPHY_API_RATING,
        lang: process.env.GIPHY_API_LANG,
        offset: process.env.GIPHY_API_OFFSET,
        q: name.replace(' ', '%20').replace('\n', '')
      }})
      console.log(response.data.data[0].embed_url)
      return response.data.data[0].embed_url
    }catch(err){
      throw new AppError('Ocorreu um erro ao tentar carregar as Gifs')
    }
  }

}