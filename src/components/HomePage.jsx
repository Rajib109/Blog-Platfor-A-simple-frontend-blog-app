// src/components/HomePage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // 1. Import Redux hooks
import { fetchPosts } from '../store/postsSlice'; // 2. Import our async thunk

export default function HomePage() {
  const dispatch = useDispatch(); // 3. Get the dispatch function
  
  // 4. Select the data we need from the Redux store
  const posts = useSelector((state) => state.posts.items);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  // 5. Dispatch the fetchPosts action when the component mounts
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  // 6. Render based on the status from the Redux store
  let content;
  if (postStatus === 'loading') {
    content = <p>Loading posts...</p>;
  } else if (postStatus === 'succeeded') {
    content = (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
        {posts.map(post => (
          <Link to={`/post/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    );
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
}