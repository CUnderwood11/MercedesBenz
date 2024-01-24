import React from 'react';

const Header = () => {
return(
    <header className="header" style={{ height: '50px' }}>
    <img src="/Images/AMGLOGO.jpg" alt="AMG Logo"
     style={{ maxWidth: '100%', height: '100%', margin: '10px'}}
     />
    <nav>
      <ul>
        <li>Home</li>
        <li>C36 AMG</li>
        <li>C43 AMG</li>
        <li>C55 AMG</li>
        <li>C63 AMG</li>
        <li>C450 AMG</li>
        <li>C63S AMG</li>
        <li>About AMG C-Class</li>
      </ul>
     </nav>
    </header>

     );

};

export default Header;