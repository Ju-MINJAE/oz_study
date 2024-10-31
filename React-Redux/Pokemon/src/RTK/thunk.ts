import { createAsyncThunk } from '@reduxjs/toolkit';

interface PokemonData {
  id: number;
  name: string;
  description: string;
  front: string;
  back: string;
}

export const fetchMultiplePokemonById = createAsyncThunk<PokemonData[], number>(
  'pokemon/fetchMultiplePokemonById',
  async (maxPokemonId) => {
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId: number) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = await response.json();

      const pokemonData = {
        id: pokemonId,
        name: data.names.find(
          (el: { language: { name: string }; name: string }) =>
            el.language.name === 'ko'
        ).name,
        description: data.flavor_text_entries.find(
          (el: { language: { name: string } }) => el.language.name === 'ko'
        ).flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      };
      return pokemonData;
    };

    return Promise.all(numberArray.map((el) => fetchAPI(el)));
  }
);
