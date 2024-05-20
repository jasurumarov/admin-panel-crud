import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products', 
        params 
      }),
      providesTags:["Products"]
    }),
    // Delete
    deleteProducts: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:["Products"]
    }),
    postProducts: build.mutation({
      query: (body)=>({
        url: "/products",
        method: "POST",
        body 
      }),
      invalidatesTags: ["Products"]
    }),
    updateProduct: build.mutation({
      query: ({id, body}) => ({
        url: `/products/${id}`,
        method: "PUT",
        body
      }),
      invalidatesTags: ["Products"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useDeleteProductsMutation,
  usePostProductsMutation,
  useUpdateProductMutation
} = productApi