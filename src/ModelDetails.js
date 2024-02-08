import React from 'react';
import { useParams } from 'react-router-dom';
import './ModelDetail.css';

const ModelDetails = () => {
    let { modelName } = useParams();

    // Fetch model details based on the modelName parameter

    return (
        <div>
            <h2>Details about {modelName}</h2>
            {/* Display model details here */}
        </div>
    );
};

export default ModelDetails;
