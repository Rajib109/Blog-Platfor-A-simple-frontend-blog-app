// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // 1. Import Link

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ... (useEffect hook remains the same) ...
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12');
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {posts.map(post => (
        // 2. Wrap each card with a Link component
        <Link to={`/post/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}