import LRU from  'lru-cache'
import nodeFetch from 'node-fetch';
import 'whatwg-fetch';

const inBrowser = typeof window !== 'undefined'

export const apiUrl = {
    apiBaseUrl: "http://114.215.118.183:8033/api/v1/",
    baseServiceUrl: "https://base.yinile.com/api/",
    authUrl: "https://auth.yinile.com/Token",
    clientId: "7706d752bf974482b39dd03613b6c8c7",
    apiImageUrl: "http://pic.yinile.com",
    uploadImageUrl: "http://114.215.118.183:8075/api/images/upload",
    chargeUrl: "http://114.215.118.183:8086/api/charges"
}

export const fetch=inBrowser?window.fetch:nodeFetch;
