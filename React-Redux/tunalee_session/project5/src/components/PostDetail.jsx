import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();

  const [post, setPost] = useState('');
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/posts/${postId}`);
      setPost(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '5px',
      }}
    >
      {error ? (
        <p style={{ color: 'red' }}>Error fetching post: {error.message}</p>
      ) : (
        <div>
          <h2 style={{ color: '#333' }}>{post.title}</h2>
          <p style={{ color: '#555' }}>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
