import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://www.omdbapi.com";
const API_KEY = "ef566ba6";
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (query) => `/?apikey=${API_KEY}&s=${query}`,
    }),
    getMovieById: builder.query({
      query: (id) => `/?apikey=${API_KEY}&i=${id}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = movieApi;
