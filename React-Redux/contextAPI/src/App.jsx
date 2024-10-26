import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
