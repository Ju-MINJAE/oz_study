import { useSelector } from 'react-redux';
import PokemonCard from '../components/PokemonCard';

const Main = () => {
  const pokemonData = useSelector(
    (state: {
      pokemon: { data: Array<{ id: number; name: string; front: string }> };
    }) => state.pokemon.data
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pokémon Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Main;
