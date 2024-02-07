import React from 'react';
import { Link } from 'react-router-dom';
import './ModelDetails.css';

const C63AMGDetail = () => {
return(
    <div className="model-detail">
        <div className="model-photo">
            <img src="/Images/c63-amg.jpg" alt="C63 AMG" />
        </div>
        <div className="model-info">
        <h2>C63 AMG Details</h2>
        <p>
            The C63 AMG is a high performance variant of the Mercedes-Benz C-Class,
            produced by AMG. It features a powerful engine, sporty styling, and advanced technology.
        </p>
        <ul>
            <li>Production Years: 2007-2014</li>
            <li>Engine: 6.2L V8</li>
            <li>Horsepower: 457 HP (upgraded to 487 in 2011)</li>
            <li>Torque: 443 ft-lb</li>
            <li>0-60 mph: 4.5 seconds</li>
        </ul>
        <Link to="/compare">Compare Details</Link>
    </div>
   </div>
);

};

export default C63AMGDetail;