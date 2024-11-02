import { getRegExp } from 'korean-regexp';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectorPokemonByRegExp } from '../RTK/selector';
import PokemonCard from '../components/PokemonCard';

const Search = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('pokemon') || '';
  const reg = getRegExp(param);

  const pokemon = useSelector(selectorPokemonByRegExp(reg));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pokémon Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Search;
