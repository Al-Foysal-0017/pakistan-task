import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const authService = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6000/api/",
  }),
  endpoints: (builder) => {
    return {
      authLogin: builder.mutation({
        query: (loginData) => {
          console.log("NAIEM:", loginData);
          return {
            url: "login",
            method: "POST",
            body: loginData,
          };
        },
      }),
    };
  },
});

export const { useAuthLoginMutation } = authService;

export default authService;
