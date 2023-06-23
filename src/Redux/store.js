import { configureStore } from "@reduxjs/toolkit";
import { contactReducer,selectedContactReducer,} from "./Reducers/ContactReducer";
import { moviertkApi } from "../Components/services/moviertkApi";
import movieReducer from "../Redux/movieSlice";
const store = configureStore({
  reducer: {
    allContacts: contactReducer,
    setSelectedContacts: selectedContactReducer,
    [moviertkApi.reducerPath]: moviertkApi.reducer,
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviertkApi.middleware),
});
export default store;
