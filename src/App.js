import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ModelFeatures from './ModelFeatures';
import InteractiveFeatures from './InteractiveFeatures';
import CTASection from './CTASection';
import Footer from './Footer';
import './App.css';

function App(){
return(
    <div className="App">
    <Header />
    <HeroSection />
    <ModelFeatures />
    <InteractiveFeatures />
    <CTASection />
    <Footer />
   </div>
);
}

export default App;