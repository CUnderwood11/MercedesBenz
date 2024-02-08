import React from 'react';
import { Link } from 'react-router-dom';
import './ModelDetail.css';

const C63SAMGDetail = () => {
return(
    <div className="model-detail">
        <div className="model-photo">
            <img src="/Images/c63s-amg.jpg" alt="C63S AMG" />
        </div>
        <div className="model-info">
        <h2>C63S AMG Details</h2>
        <p>
            The C63S AMG is a high performance variant of the Mercedes-Benz C-Class,
            produced by AMG. It features a powerful engine, sporty styling, and advanced technology.
        </p>
        <ul>
            <li>Production Years: 2015-2022</li>
            <li>Engine: 4.0L V8</li>
            <li>Horsepower: 510 hp</li>
            <li>Torque: 516 ft-lb</li>
            <li>0-60 mph: 3.9 seconds</li>
        </ul>
        <Link to="/compare">Compare Details</Link>
    </div>
   </div>
);

};

export default C63SAMGDetail;