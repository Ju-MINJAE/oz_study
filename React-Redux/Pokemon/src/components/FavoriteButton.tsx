import { useDispatch, useSelector } from 'react-redux';
import { favoriteSlice } from '../RTK/slice';
import { RootState } from '../RTK/store';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  pokemonId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ pokemonId }) => {
  const isFavorite = useSelector((state: RootState) =>
    state.favorite.some((item) => item === pokemonId)
  );

  const dispatch = useDispatch();

  const handleFavoriteToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      isFavorite
        ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
        : favoriteSlice.actions.addToFavorite({ pokemonId })
    );
    e.stopPropagation();
  };

  return (
    <button
      onClick={handleFavoriteToggle}
      className={`p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none  ${
        isFavorite
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-gray-400 text-white hover:bg-gray-600'
      }`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart className="w-4 h-4 fill-current" />
    </button>
  );
};

export default FavoriteButton;
