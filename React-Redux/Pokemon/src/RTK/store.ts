import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, pokemonSlice } from './slice';

export const store = configureStore({
  reducer: { pokemon: pokemonSlice.reducer, favorite: favoriteSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
