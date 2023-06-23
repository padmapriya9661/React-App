import { createSlice } from "@reduxjs/toolkit";
const startState = {
  cartMovies: [],

};
const movieSlice = createSlice({

  name: "movie",
  initialState: startState,
  
  reducers: {
    addMoviesToCart(state, action) {
      state.cartMovies.push(action.payload);
    },

    removeMovieFromCart(state, action) {
      
      state.cartMovies = state.cartMovies.filter(
        (movie) => movie.imdbID !== action.payload

        );
      },
    },

});
export default movieSlice.reducer;
export const { addMoviesToCart, removeMovieFromCart } = movieSlice.actions
export const selectAllMovies = (state) => state.movies.cartMovies;

