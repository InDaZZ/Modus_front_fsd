import { rApi } from "../api";

export const getProducts = rApi.injectEndpoints({
  endpoints: (builder) => ({
    anonimOrderCreate: builder.mutation({
      query: ({ order, phone, owner, clientData }) => ({
        method: "POST",
        url: "/order",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: order,
          phone: phone,
          owner: owner,
          clientData: clientData,
        }),
      }),
    }),
  }),
});

export const { useAnonimOrderCreateMutation } = getProducts;
