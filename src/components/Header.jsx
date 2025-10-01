import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Import our custom hook

export default function Header() {
  const { user, logout } = useAuth(); // 2. Get user and logout from context

  return (
    <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          My Blog
        </Link>
      </h1>
      <nav>
        {/* 3. Conditionally render content */}
        {user ? (
          <div>
            <span>Welcome, {user.username}!</span>
            <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}