import { Request, Response } from "express";
import * as cryptoService from "../service/crypto-service.js";
import { CryptoNames } from "../core/constants.js";

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
    res.status(200).json({
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
    const deviation = await cryptoService.getDeviationInCryptoData(coin_name);
    res.status(200).json({
      success: true,
      message: `Deviation for ${coin_name} (calculated based on latest 100 records.)!`,
      data: deviation,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Some error occurred!", data: null });
    return;
  }
};
