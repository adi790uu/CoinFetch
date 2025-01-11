import mongoose, { Document, Model } from "mongoose";
import {
  ICryptoData,
  CryptoDataResult,
  CryptoDataInput,
} from "../types/crypto-data.types";
const { Schema } = mongoose;

const cryptoDataSchema = new Schema<ICryptoData>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    priceUsd: {
      type: Number,
      required: true,
    },
    marketCapUsd: {
      type: Number,
      required: true,
    },
    change24h: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CryptoData: Model<ICryptoData> = mongoose.model<ICryptoData>(
  "CryptoData",
  cryptoDataSchema
);

export const insertCryptoData = async (
  cryptoData: CryptoDataInput
): Promise<void> => {
  try {
    await CryptoData.create({
      name: cryptoData.name,
      priceUsd: cryptoData.usd,
      marketCapUsd: cryptoData.usd_market_cap,
      change24h: cryptoData.usd_24h_change,
    });
  } catch (error) {
    console.error("Error inserting crypto data:", error);
    throw error;
  }
};

export const getCryptoDataByName = async (
  name: string
): Promise<CryptoDataResult | null> => {
  try {
    const cryptoData = await CryptoData.findOne({ name }).sort({
      createdAt: -1,
    });

    if (!cryptoData) {
      return null;
    }

    return {
      price: cryptoData.priceUsd,
      marketCap: cryptoData.marketCapUsd,
      change24h: cryptoData.change24h,
    };
  } catch (error) {
    console.error("Error getting crypto data:", error);
    throw error;
  }
};
