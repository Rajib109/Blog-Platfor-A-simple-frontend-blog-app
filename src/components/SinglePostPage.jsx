// src/components/SinglePostPage.jsx
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // 1. Import useSelector

// We no longer need useState, useEffect, or axios here if the post is in the store.
// But we'll keep them as a fallback for posts that aren't in the store yet (e.g. deep linking).
// For this tutorial, we will simplify and assume the post is always in the store if navigated from the app.

export default function SinglePostPage() {
  const { postId } = useParams();

  // 2. Select the specific post from the Redux store
  // The `postId` from the URL is a string, so we need to convert it to a number for comparison
  const post = useSelector((state) => 
    state.posts.items.find((post) => post.id === Number(postId))
  );

  // 3. Render based on whether the post was found in the store
  if (!post) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Post not found!</h2>
        <Link to="/">&larr; Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">&larr; Back to Home</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}