import React from 'react';
import { Link } from 'react-router-dom';
import './ModelDetails.css';

const C450AMGDetail = () => {
return(
    <div className="model-detail">
        <div className="model-photo">
            <img src="/Images/c450-amg.jpg" alt="C450 AMG" />
        </div>
        <div className="model-info">
        <h2>C450 AMG Details</h2>
        <p>
            The C450 AMG is a high performance variant of the Mercedes-Benz C-Class,
            produced by AMG. It features a powerful engine, sporty styling, and advanced technology.
        </p>
        <ul>
            <li>Production Years: 2014-2015</li>
            <li>Engine: 3.0L V6</li>
            <li>Horsepower: 367 HP</li>
            <li>Torque: 384 ft-lb</li>
            <li>0-60 mph: 4.7 seconds</li>
        </ul>
        <Link to="/compare">Compare Details</Link>
    </div>
   </div>
);

};

export default C450AMGDetail;