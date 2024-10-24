import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          style={{
            textDecoration: 'none',
            color: '#007bff',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#f8f9fa',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e2e6ea';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }}
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Post;
