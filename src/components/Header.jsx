// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          My Blog
        </Link>
      </h1>
      <nav style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
        {user ? (
          <>
            {/* 3. Add link to create a new post */}
            <Link to="/add-post">New Post</Link>
            <div>
              <span>Welcome, {user.username}!</span>
              <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
            </div>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}