import {
  getLatestCryptoDataByName,
  insertCryptoData,
  getListOfCryptoDataByName,
} from "../model/crypto-data.js";
import { CryptoDataInput } from "../types/crypto-data.types";

export const getCryptoData = async (cryptoName: string) => {
  const stat = await getLatestCryptoDataByName(cryptoName);
  return stat;
};

export const getDeviationInCryptoData = async (cryptoName: string) => {
  const listOfStats = await getListOfCryptoDataByName(cryptoName, 100);

  if (!listOfStats) {
    return null;
  }
  const prices = listOfStats?.map((stat) => stat.priceUsd);
  const mean = prices?.reduce((acc, val) => acc + val, 0) / prices.length;

  const deviation = Math.sqrt(
    prices?.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
      prices.length
  );

  return deviation;
};

export const addCryptoData = async (cryptoData: CryptoDataInput) => {
  await insertCryptoData(cryptoData);
};
