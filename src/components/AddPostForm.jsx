// src/components/AddPostForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewPost } from '../store/PostsSlice';

export default function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      try {
        // We dispatch the async thunk with the post data
        // unwrap() will return a promise that either resolves with the action payload or rejects with an error
        await dispatch(addNewPost({ title, body: content })).unwrap();
        
        // Clear the form and navigate to the homepage on success
        setTitle('');
        setContent('');
        navigate('/');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="postTitle">Post Title:</label><br/>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="postContent">Content:</label><br/>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '100%', padding: '8px', height: '200px' }}
          />
        </div>
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}