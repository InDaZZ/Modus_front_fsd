import { rApi } from "../api";

const admin = localStorage.getItem('adminToken');

export const createProducts = rApi.injectEndpoints({
    endpoints: (builder) => ({
        adminDeleteRoll: builder.mutation({
            query: (roll) => ({
                method: 'DELETE',
                url: '/deletroll',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...roll, owner: admin })
            })
        }),
        adminDeletePizza: builder.mutation({
            query: (pizza) => ({
                method: 'DELETE',
                url: '/deletpizza',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...pizza, owner: admin })
            })
        }),

        adminDeleteHot: builder.mutation({
            query: (hot) => ({
                method: 'DELETE',
                url: '/delethot',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...hot, owner: admin })
            })
        }),
    })
});

export const { useAdminDeleteRollMutation, useAdminDeletePizzaMutation, useAdminDeleteHotMutation } = createProducts;