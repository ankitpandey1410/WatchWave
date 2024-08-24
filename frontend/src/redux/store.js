import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";

// Persist configuration for redux-persist
const persistConfig = {
  key: "root", // Key for the persist storage
  storage,     // Defines using localStorage as the storage method
};

// Wrap the userReducer with persistReducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: {
    app: persistedUserReducer, // Persisted user state
    movie: movieReducer,
    searchMovie: searchSlice,
  },
});

// Export the persistor along with the store
export const persistor = persistStore(store);
export default store;

