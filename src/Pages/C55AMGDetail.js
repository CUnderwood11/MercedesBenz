import React from 'react';
import { Link } from 'react-router-dom';
import './ModelDetails.css';

const C55AMGDetail = () => {
return(
    <div className="model-detail">
        <div className="model-photo">
            <img src="/Images/c55-amg.jpg" alt="C55 AMG" />
        </div>
        <div className="model-info">
        <h2>C55 AMG Details</h2>
        <p>
            The C55 AMG is a high performance variant of the Mercedes-Benz C-Class,
            produced by AMG. It features a powerful engine, sporty styling, and advanced technology.
        </p>
        <ul>
            <li>Production Years: 2004-2007</li>
            <li>Engine: 5.4L V8</li>
            <li>Horsepower: 367 hp</li>
            <li>Torque: 376 lb-ft</li>
            <li>0-60 mph: 4.9 seconds</li>
        </ul>
        <Link to="/compare">Compare Details</Link>
    </div>
   </div>
);

};

export default C55AMGDetail;