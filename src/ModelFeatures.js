import React from 'react';

const ModelFeatures = () => {
    const models = ['C36 AMG', 'C43 AMG', 'C55 AMG', 'C63 AMG', 'C450 AMG', 'C63S AMG'];

    const getModelImageSrc = (model) => {
        const formattedModel = model.toLowerCase().replace(/\s+/g, '-');
        return `/Images/${formattedModel}.jpg`;
    };

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
                    <button>View Details</button>
                </div>
            ))}
        </section>
    );
};

export default ModelFeatures;
