import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchMultiplePokemonById } from './thunk';

interface PokemonData {
  id: number;
  name: string;
  description: string;
  front: string;
  back: string;
}

interface PokemonState {
  data: PokemonData[];
  loading: boolean;
}

const initialState: PokemonState = {
  data: [],
  loading: true,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {}, // 동기적 상태 변경
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(
        fetchMultiplePokemonById.fulfilled,
        (state, action: PayloadAction<PokemonData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      );
  }, //비동기적 상태 변경
});

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [1, 2, 3],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
