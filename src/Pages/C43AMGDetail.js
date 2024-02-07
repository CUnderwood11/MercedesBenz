import React from 'react';
import { Link } from 'react-router-dom';
import './ModelDetails.css';

const C43AMGDetail = () => {
return(
    <div className="model-detail">
        <div className="model-photo">
            <img src="/Images/c43-amg.jpg" alt="C43 AMG" />
        </div>
        <div className="model-info">
        <h2>C43 AMG Details</h2>
        <p>
            The C43 AMG is a high performance variant of the Mercedes-Benz C-Class,
            produced by AMG. It features a powerful engine, sporty styling, and advanced technology.
        </p>
        <ul>
            <li>Production Years: 1997-2000</li>
            <li>Engine: 4.3L V8</li>
            <li>Horsepower: 306 HP</li>
            <li>Torque: 302 lb-ft</li>
            <li>0-60 mph: 6.5 seconds</li>
        </ul>
        <Link to="/compare">Compare Details</Link>
    </div>
   </div>
);

};

export default C43AMGDetail;