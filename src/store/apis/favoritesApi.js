import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const favoritesApi = createApi({
    reducerPath: 'favoriteMovies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints(builder){
        return{
            fetchFavoriteMovies: builder.query({
                providesTags: ['Movies', 'Post', 'Delete'],
                query: () =>{
                    return{
                        url: 'favorites',
                        method: 'GET'
                    };
                },
            }),
            fetchFavoriteMovieID: builder.query({
                providesTags: ['MoviesId'],
                query: () =>{
                    return{
                        url: 'favoriteid',
                        method: 'GET'
                    };
                },
                transformResponse: (response) => response.map(id => id.id)
            }),

           
            addFavorite: builder.mutation({
                  invalidatesTags: ['Movies', 'Post'],
                  query: (movie) =>{
                      return {
                          url: 'favorites', 
                          method: 'POST',
                          body: movie,
                          
                      };
                  }
              }),

              addFavoriteID: builder.mutation({
                invalidatesTags: ['MoviesId', 'Post'],
                query: (id) =>{
                    return {
                        url: 'favoriteId', 
                        method: 'POST',
                        body: {"id": id},
                        
                    };
                }
            }),

              removeFavorite: builder.mutation({
                  invalidatesTags: ['Movies', 'Delete'],
                  query: (movie) => {
                      return {
                          url: `favorites/${movie.id}`, 
                          method: 'DELETE'
                      };
                  }
              }),
              
              removeFavoriteId: builder.mutation({
                invalidatesTags: ['MoviesId', 'Delete'],
                query: (id) => {
                    return {
                        url: `favoriteId/${id}`, 
                        method: 'DELETE'
                    };
                }
            }),
      
        }
    }
});

export const {
    useFetchFavoriteMoviesQuery,
    useFetchFavoriteMovieIDQuery,
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
    useRemoveFavoriteIdMutation,
    useAddFavoriteIDMutation} = favoritesApi;
export {favoritesApi};