import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './page/Main';
import Detail from './page/Detail';
import Search from './page/Search';

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
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="동물을 검색하세요..."
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <footer className="footer">All rights reserved to MINJAE</footer>
    </>
  );
};

export default App;
