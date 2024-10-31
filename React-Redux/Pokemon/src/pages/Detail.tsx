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
      <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="flex flex-col md:flex-row">
              <div className="relative group">
                <img
                  className="h-48 w-full object-contain md:w-48 bg-gray-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  src={pokemon.front}
                  alt={`${pokemon.name} front view`}
                />
                <div className="absolute inset-0 flex items-end justify-center group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                    Hover to see back
                  </span>
                </div>
                <img
                  className="h-48 w-full object-contain md:w-48 bg-gray-100 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  src={pokemon.back}
                  alt={`${pokemon.name} back view`}
                />
              </div>
            </div>
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
