import { rApi } from "../rtkApi";

// УДАЛИТЬ ПОЛНОСТЬ, ПОЛСЕ ПЕРЕНОСА

export const getProducts = rApi.injectEndpoints({
  endpoints: (builder) => ({
    getPizzas: builder.mutation({
      query: () => ({
        method: "GET",
        url: "/allpizza",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getHot: builder.mutation({
      query: () => ({
        method: "GET",
        url: "/allhot",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetRollsMutation, useGetPizzasMutation, useGetHotMutation } =
  getProducts;
