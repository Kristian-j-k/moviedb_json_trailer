import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const the_api_key = '';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: the_api_key
            },
            method: 'GET',
          };
        },
      }),
      
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: the_api_key
            },
            method: 'GET',
          };
        },
      }),    

      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: the_api_key
            },
            method: 'GET',
          };
        },
      }),

      

      //https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
      fetchRelatedMovies: builder.query({
        query: (movie_id) => {
          return {
            url: 'movie/'+movie_id+'/similar',
            params: {
              api_key: the_api_key
            },
            method: 'GET',
          };
        },
      }),

    };
  },
});


export const {useFetchPopularMoviesQuery,useFetchHighestRatedMoviesQuery,useFetchSearchMovieQuery} = moviesApi;
export { moviesApi };