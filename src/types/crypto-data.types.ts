export interface ICryptoData extends Document {
  name: string;
  priceUsd: number;
  marketCapUsd: number;
  change24h: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CryptoDataInput {
  name: string;
  usd: number;
  usd_market_cap: number;
  usd_24h_change: number;
}

export interface CryptoDataResult {
  price: number;
  marketCap: number;
  change24h: number;
}
