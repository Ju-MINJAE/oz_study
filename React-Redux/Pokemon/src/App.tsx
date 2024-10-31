import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import { Link, Route, Routes } from 'react-router-dom';
const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
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
              { path: '/search', label: 'Search' },
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
