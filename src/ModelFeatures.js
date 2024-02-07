import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { getModelImageSrc } from './util'; // You can put this function in a separate utility file

const ModelFeatures = () => {
    const models = ['C36 AMG', 'C43 AMG', 'C55 AMG', 'C63 AMG', 'C450 AMG', 'C63S AMG'];

    return (
        <section className="model-features">
            {models.map((model) => (
                <div key={model} className="model-info">
                    <img
                        src={getModelImageSrc(model)}
                        alt={model}
                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '100px' }}
                    />
                    <h3>{model}</h3>
                    <Link to={`/model/${model}`} className="btn-details"> {/* Navigate to ModelDetails with model name */}
                        View Details
                    </Link>
                </div>
            ))}
        </section>
    );
};

export default ModelFeatures;
