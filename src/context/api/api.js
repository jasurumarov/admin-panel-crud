import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // Asosiy API URL
  baseUrl: "https://674ae84c71933a4e8853c86c.mockapi.io/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token")
    if (token) {
      // Har so'rovda mana shu token headersda qo'shib jo'natiladi
      headers.set('authentication', `${token}`)
    }
    return headers
  },
})

// Qayta urinish soni
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Products", "Users"], // O'zgarish bo'lganda qayta fetch qilish uchun Tag Typelar
  endpoints: () => ({}),
})