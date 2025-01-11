import { Request, Response } from "express";
import * as cryptoService from "../service/crypto-service.js";

enum CryptoNames {
  BITCOIN = "bitcoin",
  ETHEREUM = "ethereum",
  MATIC = "matic-network",
}

export const getStat = async (req: Request, res: Response): Promise<void> => {
  try {
    const coin_name: string = req.body.coin.trim().toLowerCase();
    if (!coin_name) {
      res.status(400).json({
        success: false,
        message: "Provide coin name to fetch stat!",
        data: null,
      });
      return;
    }

    if (!Object.values(CryptoNames).includes(coin_name as CryptoNames)) {
      res.status(400).json({
        success: false,
        message: "Invalid coin name!",
        data: null,
      });
      return;
    }

    const stat = await cryptoService.getCryptoData(coin_name);
    res.json({
      success: true,
      message: "Stat fetched successfully!",
      data: stat,
    });
    return;
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Some error occurred!", data: null });
    return;
  }
};

export const getDeviation = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
