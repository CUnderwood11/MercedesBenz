 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import ModelFeatures from './ModelFeatures';
import InteractiveFeatures from './InteractiveFeatures';
import CTASection from './CTASection';
import Footer from './Footer';
import './App.css';
import C36AMGDetail from './Pages/C36AMGDetail';
import C43AMGDetail from './Pages/C43AMGDetail';
import C55AMGDetail from './Pages/C55AMGDetail';
import C63AMGDetail from './Pages/C63AMGDetail';
import C450AMGDetail from './Pages/C450AMGDetail';
import C63SAMGDetail from './Pages/C63SAMGDetail';
import ComparePage from './ComparePage';
import ColorOptionsPage from './ColorOptionsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model/C36 AMG" element={<C36AMGDetail />} />
          <Route path="/model/C43 AMG" element={<C43AMGDetail />} />
          <Route path="/model/C55 AMG" element={<C55AMGDetail />} />
          <Route path="/model/C63 AMG" element={<C63AMGDetail />} />
          <Route path="/model/C450 AMG" element={<C450AMGDetail />} />
          <Route path="/model/C63S AMG" element={<C63SAMGDetail />} />
          <Route path="/compare/:modelName" element={<ComparePage />} />
          <Route path="/colors/:modelName" element={<ColorOptionsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <HeroSection />
    <ModelFeatures />
    <InteractiveFeatures />
    <CTASection />
  </>
);

export default App;