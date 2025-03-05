import { Request, Response } from "express";
import { BinanceService } from "../services/BinanceService";

export class BinanceController {
  private readonly service: BinanceService

  getOhlc = async (req: Request, res: Response) => {
    try {
      const { symbol, interval } = req.params
      const data = await this.service.getOhlc(symbol,interval)

      res.json(data)
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}