import axios, { AxiosInstance } from 'axios'
import { ENV } from '../config/env'
import { IBinance } from '../interfaces/Binance'

export class BinanceService implements IBinance {
  private readonly api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: ENV.BINANCE_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'EXAMPLE'
      }
    })
  }
  async getOhlc(symbol: string, interval: string): Promise<any> {
    try {
      const response = await this.api.get(`/api/v3/klines?symbol=${symbol}?interval=${interval}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}