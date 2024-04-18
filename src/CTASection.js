import React, { useState } from 'react';
import axios from 'axios';

const CTASection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3001/api/subscribe`, { name, email });
      alert('Subscription successful!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="cta-section">
      <button>Embark on a Thrilling Journey - Explore AMG C-Class Models!</button>
      <form onSubmit={handleSubmit} method="POST" action="/api/subscribe">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default CTASection;
