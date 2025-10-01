// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { store } from './store/store'; // 1. Import the store
import { Provider } from 'react-redux'; // 2. Import the Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap the app with the Provider */}
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);