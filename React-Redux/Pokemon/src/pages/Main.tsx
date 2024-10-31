import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const pokemonData = useSelector(
    (state: {
      pokemon: { data: Array<{ id: number; name: string; front: string }> };
    }) => state.pokemon.data
  );

  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pokémon Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.id}
            onClick={() => navigate(`/detail/${pokemon.id}`)}
            className="bg-white rounded-lg shadow-md overflow-hidden border-solid border-2 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={pokemon.front}
              alt={`${pokemon.name} front view`}
              className="w-full h-48 object-contain bg-gray-200"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {pokemon.name}
              </h2>
              <p className="text-gray-600 text-center">
                #{pokemon.id.toString().padStart(3, '0')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
