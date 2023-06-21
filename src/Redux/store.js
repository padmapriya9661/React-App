import { configureStore } from "@reduxjs/toolkit";
import {
  contactReducer,
  selectedContactReducer,
} from "./Reducers/ContactReducer";
import { movieApi } from "../Components/services/movieApi";
import movieReducer from "../Redux/movieSlice";
const store = configureStore({
  reducer: {
    allContacts: contactReducer,
    setSelectedContacts: selectedContactReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
