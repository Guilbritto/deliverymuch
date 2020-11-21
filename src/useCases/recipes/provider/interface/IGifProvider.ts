export interface IGifProvider{
  getGifByName(name: string): Promise<void>
}