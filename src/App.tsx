import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import UploadPage from './pages/UploadPage';
import PostDetailPage from './pages/PostDetailPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
