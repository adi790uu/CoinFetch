import cron from "node-cron";
import fetchCoinPrice from "../../external/coin-gecko.js";
import { addCryptoData } from "../../service/crypto-service.js";
const task = cron.schedule("0 */2 * * *", async () => {
    try {
        const coin_id = "bitcoin,matic-network,ethereum";
        const currency = "usd";
        const data = await fetchCoinPrice(coin_id, currency);
        for (const [cryptoName, cryptoData] of Object.entries(data)) {
            const insertCrypto = {
                name: cryptoName, // @ts-ignore
                usd: cryptoData.usd, // @ts-ignore
                usd_market_cap: cryptoData.usd_market_cap, // @ts-ignore
                usd_24h_change: cryptoData.usd_24h_change,
            };
            await addCryptoData(insertCrypto);
        }
        console.log("Coin data added successfully!");
    }
    catch (error) {
        console.error("Error occurred in crypto-job.");
    }
}, {
    scheduled: false,
});
export default task;
