import { configureStore } from '@reduxjs/toolkit';
//import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import { searchMovieReducer, changeSearchTerm } from './slices/searchMovieSlice';
import { favoritesApi } from './apis/favoritesApi';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    searchMovie: searchMovieReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware).concat(favoritesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery } from './apis/moviesApi';
export { useFetchFavoriteMovieIDQuery,useFetchFavoriteMoviesQuery,useRemoveFavoriteIdMutation,useRemoveFavoriteMutation } from './apis/favoritesApi';
export {changeSearchTerm};
