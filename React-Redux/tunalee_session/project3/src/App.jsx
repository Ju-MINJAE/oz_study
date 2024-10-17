import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contents from './pages/Contents';
import ContentDetail from './pages/ContentDetail';
import Login from './pages/Login';
import User from './components/User';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<Contents />}>
            <Route path=":id" element={<ContentDetail />} />
          </Route>
          <Route path="/user/:userId" element={<User />} />
          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
