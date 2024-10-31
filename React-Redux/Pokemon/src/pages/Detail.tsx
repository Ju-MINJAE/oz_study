import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';

export default function Detail() {
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  if (!pokemon) {
    return <div className="text-center text-2xl mt-10">Pokemon not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={pokemon.front}
              alt={`${pokemon.name} front view`}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              #{pokemonId?.padStart(3, '0')}
            </div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {pokemon.name}
            </h1>
            <p className="mt-4 text-lg text-gray-500">{pokemon.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
