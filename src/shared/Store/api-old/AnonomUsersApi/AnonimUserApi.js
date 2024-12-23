import { rApi } from "../rtkApi";

export const anonimUser = rApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: () => ({
        method: "POST",
        url: "/signup",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useRegisterMutation } = anonimUser;
