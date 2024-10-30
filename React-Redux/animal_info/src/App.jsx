import React, { Suspense, lazy, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Main = lazy(() => import('./page/Main'));
const Detail = lazy(() => import('./page/Detail'));
const Search = lazy(() => import('./page/Search'));
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      navigate(`/search?animal=${inputValue}`);
    }
  };

  return (
    <>
      <header className="header">
        <h1 className="title">동물은 귀엽고 항상 옳다</h1>
        <div className="search-container">
          <input
            className="search-input"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              navigate(`/search?animals=${e.target.value}`);
            }}
            placeholder="동물을 검색하세요..."
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </header>
      <main className="main-content">
        <Suspense fallback={<h1>로딩중...</h1>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="footer">All rights reserved to MINJAE</footer>
    </>
  );
};

export default App;
