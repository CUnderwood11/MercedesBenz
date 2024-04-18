import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ModelFeatures.css';

const ModelFeatures = ({ modelData }) => {
    const models = ['C36 AMG', 'C43 AMG', 'C55 AMG', 'C63 AMG', 'C450 AMG', 'C63S AMG'];

    const getModelImageSrc = (model) => {
        const formattedModel = model.toLowerCase().replace(/\s+/g, '-');
        return `/Images/${formattedModel}.jpg`;
    };

    const [clickedButton, setClickedButton] = useState(null);

    const handleButtonClick = (model) => {
        setClickedButton(model);
    };

    return (
        <section className="model-features">
            {models.map((model) => (
                <div key={model} className="model-info">
                    <img
                        src={getModelImageSrc(model)}
                        alt={model}
                        style={{ maxWidth: '100%', height: '100%', maxHeight: '100px' }}
                    />
                    <h3>{model}</h3>
                    <Link
                        to={{
                            pathname: `/model/${model}`,
                            state: { initialModel: modelData }, // Pass initialModel as state
                        }}
                        className={`btn-details ${clickedButton === model ? 'clicked' : ''}`}
                        onClick={() => handleButtonClick(model)}
                    >
                        View Details
                    </Link>
                </div>
            ))}
        </section>
    );
};

export default ModelFeatures;
