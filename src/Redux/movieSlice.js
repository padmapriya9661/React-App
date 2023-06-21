import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedMovies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addMoviesToCart(state, action) {
      state.addedMovies.push(action.payload);
    },
    removeMovieFromCart(state, action) {
      state.addedMovies = state.addedMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const selectAllMovies = (state) => state.movies.addedMovies;
export const { addMoviesToCart, removeMovieFromCart } = movieSlice.actions;

export default movieSlice.reducer;
