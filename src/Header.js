import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    return (
        <header className="header" style={{ height: '50px' }}>
            <img
                src="/Images/AMGLOGO.jpg"
                alt="AMG Logo"
                style={{ maxWidth: '100%', height: '100%', margin: '10px' }}
            />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/model/C36 AMG">C36 AMG</Link></li>
                    <li><Link to="/model/C43 AMG">C43 AMG</Link></li>
                    <li><Link to="/model/C55 AMG">C55 AMG</Link></li>
                    <li><Link to="/model/C63 AMG">C63 AMG</Link></li>
                    <li><Link to="/model/C450 AMG">C450 AMG</Link></li>
                    <li><Link to="/model/C63S AMG">C63S AMG</Link></li>
                    <li><Link to="/about">About AMG C-Class</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
