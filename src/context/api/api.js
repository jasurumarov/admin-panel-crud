import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // Asosiy API URL
  baseUrl: "https://66361b4c415f4e1a5e264945.mockapi.io/api",
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