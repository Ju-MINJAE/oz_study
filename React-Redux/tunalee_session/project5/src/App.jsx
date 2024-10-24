import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Post from './components/Post';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/post"
              style={{ textDecoration: 'none', color: '#007bff' }}
            >
              Post List
            </Link>
          </li>
          <li>
            <Link
              to="/post/add"
              style={{ textDecoration: 'none', color: '#007bff' }}
            >
              Add New Post
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/add" element={<PostForm />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
