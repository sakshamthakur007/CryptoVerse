import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'e99d2515b8msh29764fc9d67b317p1ec9b4jsn08efeb24f45d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoApiHeaders }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => ({ 
                url: '/coins',
                params: {
                    referenceCurrencyUuid: 'yhjMzLPhuIDl',
                    timePeriod: '24h',
                    'tiers[0]': '1',
                    orderBy: 'marketCap',
                    orderDirection: 'desc',
                    limit: count.toString(),
                    offset: '0'
                }
            })
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;

