import { getCryptoDataByName, insertCryptoData } from "../model/crypto-data.js";
import { CryptoDataInput } from "../types/crypto-data.types";

export const getCryptoData = async (cryptoName: string) => {
  try {
    const stat = await getCryptoDataByName(cryptoName);
    return stat;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addCryptoData = async (cryptoData: CryptoDataInput) => {
  try {
    await insertCryptoData(cryptoData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
