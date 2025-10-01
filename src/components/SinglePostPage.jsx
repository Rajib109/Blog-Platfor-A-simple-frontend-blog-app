// src/components/SinglePostPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // 1. Import useParams and Link
import axios from 'axios';

export default function SinglePostPage() {
  const { postId } = useParams(); // 2. Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // 3. Fetch data for this specific post ID
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); // 4. Re-run the effect if the postId changes

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">&larr; Back to Home</Link> {/* 5. Link back to the homepage */}
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}