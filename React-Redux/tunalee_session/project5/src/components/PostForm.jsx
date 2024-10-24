import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const createPost = async () => {
    const newPost = { title, body };
    try {
      const response = await axios.post('http://localhost:3000/posts', newPost);
      if (response.status === 200 || response.status === 201) {
        setStatus(response.status);
        setTitle('');
        setBody('');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333' }}>게시글 만들기</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={createPost}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = '#0056b3')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = '#007bff')
        }
      >
        Submit
      </button>
      {status && (
        <p style={{ color: 'green', textAlign: 'center' }}>
          Post created successfully! Status: {status}
        </p>
      )}
    </div>
  );
};

export default PostForm;
