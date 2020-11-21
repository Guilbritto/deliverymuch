export interface IGifProvider{
  getGifByName(name: string): Promise<string>
}

interface IGifItem{
  embed_url: string;
  images:{
    url: string;
  }
}
export interface IGif{
  data: IGifItem[]
  
}