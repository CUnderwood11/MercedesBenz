import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
    const [clickedLinks, setClickedLinks] = useState([]);

    const handleHeaderLinkClick = (link) => {

        setClickedLinks([...clickedLinks, link]);
    };

    return (
        <header className="header" style={{ height: '50px' }}>
            <img
                src="/Images/AMGLOGO.jpg"
                alt="AMG Logo"
                style={{ maxWidth: '100%', height: '100%', margin: '10px' }}
            />
            <nav>
                <ul>
                    <li><Link to="/" className={`header-link ${clickedLinks.includes("/") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/")}>Home</Link></li>
                    <li><Link to="/model/C36 AMG" className={`header-link ${clickedLinks.includes("/model/C36 AMG") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/model/C36 AMG")}>C36 AMG</Link></li>
                    <li><Link to="/model/C43 AMG" className={`header-link ${clickedLinks.includes("/model/C43 AMG") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/model/C43 AMG")}>C43 AMG</Link></li>
                    <li><Link to="/model/C55 AMG" className={`header-link ${clickedLinks.includes("/model/C55 AMG") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/model/C55 AMG")}>C55 AMG</Link></li>
                    <li><Link to="/model/C63 AMG" className={`header-link ${clickedLinks.includes("/model/C63 AMG") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/model/C63 AMG")}>C63 AMG</Link></li>
                    <li><Link to="/model/C450 AMG" className={`header-link ${clickedLinks.includes("/model/C450 AMG") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/model/C450 AMG")}>C450 AMG</Link></li>
                    <li><Link to="/model/C63S AMG" className={`header-link ${clickedLinks.includes("/model/C63S AMG") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/model/C63S AMG")}>C63S AMG</Link></li>
                    <li><Link to="/about" className={`header-link ${clickedLinks.includes("/about") ? 'clicked' : ''}`} onClick={() => handleHeaderLinkClick("/about")}>About AMG C-Class</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
