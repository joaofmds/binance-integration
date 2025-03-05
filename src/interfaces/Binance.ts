export interface IBinance {
  getOhlc(symbol: string, interval: string ): Promise<any>
}