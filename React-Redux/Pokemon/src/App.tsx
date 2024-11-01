import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white py-6 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Pokédex</h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4 md:space-x-8">
            {[
              { path: '/', label: 'Main' },
              { path: '/favorite', label: 'Favorites' },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-lg md:text-xl font-semibold px-3 py-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-white text-red-600'
                      : 'hover:bg-red-500'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <div>
              <input
                className="px-2 py-[2px] text-gray-700 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                type="text"
                onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
              />
              <button className="px-2 py-[2px] bg-white text-red-600 rounded-r-lg border border-l-0 border-gray-300 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200">
                Search
              </button>
            </div>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
