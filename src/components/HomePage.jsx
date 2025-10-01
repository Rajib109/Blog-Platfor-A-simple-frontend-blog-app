// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomePage() {
  // 1. State to store the list of posts
  const [posts, setPosts] = useState([]);
  // 2. State to handle loading status
  const [loading, setLoading] = useState(true);

  // 3. useEffect to fetch data when the component mounts
  useEffect(() => {
    // We use an async function inside useEffect to fetch data
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12'); // Get first 12 posts
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Set loading to false whether it succeeded or failed
      }
    };

    fetchPosts();
  }, []); // The empty array [] means this effect runs only once

  if (loading) {
    return <p>Loading posts...</p>;
  }

  // 4. Render the list of posts
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 100)}...</p> {/* Show a snippet */}
        </div>
      ))}
    </div>
  );
}