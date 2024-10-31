import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Favorite from './pages/Favorite';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <div>
      <h1 className="text-[40px] font-bold text-center">Pokémon</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to="/">Main</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorite">Like</Link>
      </nav>
      <main className="flex justify-center">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:pokemonId" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
