import { api } from './api'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({ 
        url: '/users', 
        params 
      }),
      providesTags:["Users"]
    }),
    // Delete
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Users"]
    }),
    // Post
    postUsers: build.mutation({
      query: (body)=>({
        url: "/users",
        method: "POST",
        body 
      }),
      invalidatesTags: ["Users"]
    })
  }),
})

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  usePostUsersMutation,
} = userApi