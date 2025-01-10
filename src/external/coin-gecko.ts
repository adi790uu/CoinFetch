import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url =
  "https://api.coingecko.com/api/v3/simple/price?include_market_cap=true&include_24hr_vol=false&include_24hr_change=true&";

const fetchCoinPrice = async (coin_id: string, currency: string) => {
  try {
    const response = await axios.get(
      url +
        `ids=${coin_id}&vs_currencies=${currency}&x_cg_demo_api_key=${process.env.COINGECKO_API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error(`Some error occurred while fecthing coin data: ${error}`);
  }
};

export default fetchCoinPrice;
