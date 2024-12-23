import { rApi } from "../api";

const admin = localStorage.getItem('adminToken');

export const createProducts = rApi.injectEndpoints({
    endpoints: (builder) => ({
        adminCreateRolls: builder.mutation({
            query: (roll) => ({
                method: 'POST',
                url: '/createroll',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(roll)
            })
        }),
        adminCreatePizzas: builder.mutation({
            query: (pizza) => ({
                method: 'POST',
                url: '/createpizza',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...pizza, owner: admin })
            })
        }),

        adminCreateHot: builder.mutation({
            query: (hot) => ({
                method: 'POST',
                url: '/createhot',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...hot, owner: admin })
            })
        }),
    })
});

export const { useAdminCreateRollsMutation, useAdminCreatePizzasMutation,useAdminCreateHotMutation } = createProducts;