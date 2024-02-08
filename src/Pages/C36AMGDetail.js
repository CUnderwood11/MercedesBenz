import React from 'react';
import { Link } from 'react-router-dom';
import './ModelDetail.css';

const C36AMGDetail = () => {
return(
    <div className="model-detail">
        <div className="model-photo">
            <img src="/Images/c36-amg.jpg" alt="C36 AMG" />
        </div>
        <div className="model-info">
        <h2>C36 AMG Details</h2>
        <p>
            The C36 AMG is a high performance variant of the Mercedes-Benz C-Class,
            produced by AMG. It features a powerful engine, sporty styling, and advanced technology.
        </p>
        <ul>
            <li>Production Years: 1995-1997</li>
            <li>Engine: 3.6 4AT L6</li>
            <li>Horsepower: 280 hp</li>
            <li>Torque: 284 lb-ft</li>
            <li>0-60 mph: 6.7 seconds</li>
        </ul>
        <Link to="/compare">Compare Details</Link>
    </div>
   </div>
);

};

export default C36AMGDetail;