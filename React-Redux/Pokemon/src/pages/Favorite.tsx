import { useSelector } from 'react-redux';
import { selectFavoritePokemons } from '../RTK/selector';
import PokemonCard from '../components/PokemonCard';

const Favorite = () => {
  const pokemon = useSelector(selectFavoritePokemons);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Favorite;
