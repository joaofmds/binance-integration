import express from 'express'
import { BinanceController } from './controllers/BinanceController'

const app = express()
const binanceController = new BinanceController()

app.get('/klines', binanceController.getOhlc)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})