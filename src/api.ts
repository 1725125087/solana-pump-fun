import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';

export async function getCoinData(mintStr: string) {
    try {
        const url = `https://client-api-2-74b1891ee9f9.herokuapp.com/coins/${mintStr}`;
        // const url = `https://www.google.com`;

                // 创建代理代理器
        const httpsAgent = new HttpsProxyAgent('http://127.0.0.1:7897/');
        // const instance = axios.create({
        //     httpsAgent: httpsAgent,
        //     httpAgent:httpsAgent
        // });
        axios.defaults.httpsAgent = httpsAgent;
        axios.defaults.proxy = false;



        const response = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Referer": "https://www.pump.fun/",
                "Origin": "https://www.pump.fun",
                "Connection": "keep-alive",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "cross-site",
                "If-None-Match": 'W/"43a-tWaCcS4XujSi30IFlxDCJYxkMKg"'
            }
        });
        if (response.status === 200) {
            console.log('响应数据'+response.data);
            
            return response.data;
        } else {
            console.error('Failed to retrieve coin data:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching coin data:', error);
        return null;
    }
}