import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
//   "X-BingApis-SDK": "true",
//   "X-RapidAPI-Key": "27216bf07fmshdee129fa8936a8ep140b38jsn4c157ef95359",
//   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
 'X-RapidAPI-Key': '27216bf07fmshdee129fa8936a8ep140b38jsn4c157ef95359',
 'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({
    url, headers: cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            //  query: ({newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`) 
             query: (count) => createRequest(`/bsc?limit=${count}`)
        })
    })
})


export const {useGetCryptoNewsQuery} = cryptoNewsApi;