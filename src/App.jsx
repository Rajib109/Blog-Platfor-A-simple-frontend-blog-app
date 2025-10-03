import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SinglePostPage from './components/SinglePostPage'; // 1. Import the new page
import { Routes, Route } from 'react-router-dom'; // 2. Import Routes and Route
import LoginPage from './components/LoginPage';
import AddPost from './components/AddPostForm'; // Import the AddPost component
import AddPostForm from './components/AddPostForm';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <>
      <Header />
      <main>
        {/* 3. Set up the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<SinglePostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/AddPost" element={<AddPost />} />
          <Route 
            path="/add-post" 
            element={
              <ProtectedRoute>
                <AddPostForm />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;