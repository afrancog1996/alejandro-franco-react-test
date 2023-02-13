import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EmployeeApi = createApi({
  reducerPath: "api",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees",
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query<any, void>({
      query: () => "/alejandro_franco",
      providesTags: () => [{ type: "Posts", id: "LIST" }],
    }),
    setEmployee: builder.mutation<any, any>({
      query: (newEmployee: any) => ({
        url: "/alejandro_franco",
        method: "POST",
        body: newEmployee,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const { useGetEmployeesQuery, useSetEmployeeMutation } = EmployeeApi;
