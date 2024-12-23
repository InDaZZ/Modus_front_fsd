import { rApi } from "../api";

export const adminUser = rApi.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (name, password) => ({
        method: "POST",
        url: "/adminpanellogin",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, password: password }),
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = adminUser;
