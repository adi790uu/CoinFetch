import cron from "node-cron";
import fetchCoinPrice from "../../external/coin-gecko.js";
const task = cron.schedule("* * * * *", async () => {
    const coin_id = "bitcoin,matic-network,ethereum";
    const currency = "usd";
    const data = await fetchCoinPrice(coin_id, currency);
    console.log(data);
}, {
    scheduled: false,
});
export default task;
