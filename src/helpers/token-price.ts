import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    /*
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2,olympus,magic-internet-money&vs_currencies=usd";
    const { data } = await axios.get(url);
    */
    const data = { "avalanche-2": { "usd": 93.84 }, "magic-internet-money": { "usd" :1.0 }, "olympus": { "usd":304.14 } };
    cache["AVAX"] = data["avalanche-2"].usd;
    cache["MIM"] = data["magic-internet-money"].usd;
    cache["OHM"] = data["olympus"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
