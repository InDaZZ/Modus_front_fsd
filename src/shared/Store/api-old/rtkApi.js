import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'http://localhost:3000';

export const rApi = createApi({
    reducerPath: 'rApi',
    tagTypes: ['registrAnonimUser'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        base: builder.query({
        }),
    })
});

export const { useRegisterQuery } = rApi;

//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const BASE_URL = 'http://localhost:3000';

/* export const rApi = createApi({
    reducerPath: 'rApi',
    tagTypes: ['registrAnonimUser', 'Rolls', 'Pizzas', 'Hot'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getRolls: builder.query({
            query: () => ({
                method: 'GET',
                url: '/allroll',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        }),
        getPizzas: builder.query({
            query: () => ({
                method: 'GET',
                url: '/allpizza',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }),

        }),
        getHot: builder.query({
            query: () => ({
                method: 'GET',
                url: '/allhot',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        }),
    })
});

export const { useGetRollsQuery, useGetPizzasQuery, useGetHotQuery } = rApi; */