import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectPokemonById = (pokemonId: number) =>
  createSelector(
    (state: RootState) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

export const selectorPokemonByRegExp = (reg: RegExp) =>
  createSelector(
    (state: RootState) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );