import { rApi } from "../api";

const admin = localStorage.getItem('adminToken');

export const createProducts = rApi.injectEndpoints({
    endpoints: (builder) => ({
        adminChangeRoll: builder.mutation({
            query: (roll) => ({
                method: 'PATCH',
                url: '/updateroll',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...roll, owner: admin })
            })
        }),
        adminChangePizza: builder.mutation({
            query: (pizza) => ({
                method: 'PATCH',
                url: '/updatepizza',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...pizza, owner: admin })
            })
        }),

        adminChangeHot: builder.mutation({
            query: (hot) => ({
                method: 'PATCH',
                url: '/updatehot',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...hot, owner: admin })
            })
        }),
    })
});

export const { useAdminChangeRollMutation, useAdminChangePizzaMutation, useAdminChangeHotMutation } = createProducts;