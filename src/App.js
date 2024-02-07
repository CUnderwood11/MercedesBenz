import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import ModelFeatures from './ModelFeatures';
import InteractiveFeatures from './InteractiveFeatures';
import CTASection from './CTASection';
import Footer from './Footer';
import ModelDetails from './ModelDetails'; // Import the ModelDetails component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="model" element={<ModelFeatures />} />
                    <Route path="features" element={<InteractiveFeatures />} />
                    <Route path="cta" element={<CTASection />} />
                    <Route path="model/:modelName" element={<ModelDetails />} />

                    {/* Add other routes as needed */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
