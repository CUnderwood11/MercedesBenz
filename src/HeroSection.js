import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
return(
    <section className="hero">
       <img src="/Images/MBCARS.jpg" alt="AMG C-Class" />
       <div className="text-content">
       <h1>Explore the Pinnacle of Performance with AMG C-Class Models</h1>
       <h2>Unveiling Power, Elegance, and Precision in Every Drive</h2>
      </div>
     </section>
);
};

export default HeroSection;