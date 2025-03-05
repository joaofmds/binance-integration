import dotenv from 'dotenv'

dotenv.config()

export const ENV = {
  BINANCE_BASE_URL: process.env.BINANCE_BASE_URL || ''
}