import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResumeBuilder from './pages/ResumeBuilder'; // Correct import
import TemplateSelectionPage from './pages/TemplateSelection';
import ResumeEditorPage from './pages/ResumeEditorpage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path='/template-selection' element={<TemplateSelectionPage />} />
            <Route path="/editor/:template" element={<ResumeEditorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
