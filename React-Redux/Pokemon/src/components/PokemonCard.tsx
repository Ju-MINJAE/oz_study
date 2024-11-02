import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

interface Pokemon {
  id: number;
  name: string;
  front: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <div
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
          <FavoriteButton pokemonId={pokemon.id} />
          {pokemon.name}
        </h2>
        <p className="text-gray-600 text-center">
          #{pokemon.id.toString().padStart(3, '0')}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
