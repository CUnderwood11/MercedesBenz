import React from 'react';
import { Link } from 'react-router-dom';
import './ModelDetail.css';
import amgModelsData from '../amgModels.json'; // Import the JSON file

const C36AMGDetail = () => {
  // Find the selected model's information from the JSON data
  const selectedModel = amgModelsData.find(model => model.modelName === "C36 AMG");

  return (
    <div className="model-detail">
      <div className="model-photo">
        <img src={selectedModel.imageUrl} alt={selectedModel.modelName} />
      </div>
      <div className="model-info">
        <h2>{selectedModel.modelName} Details</h2>
        <p>
          The {selectedModel.modelName} is a high-performance variant of the Mercedes-Benz C-Class,
          produced by AMG. It features a powerful engine, sporty styling, and advanced technology.
        </p>
        <ul>
          <li>Production Years: {selectedModel.productionYears}</li>
          <li>Engine: {selectedModel.engine}</li>
          <li>Horsepower: {selectedModel.horsepower}</li>
          <li>Torque: {selectedModel.torque}</li>
          <li>0-60 mph: {selectedModel.zeroToSixty}</li>
        </ul>
        {/* Include the selected model information in the link's state */}
        <Link
          to={{
             pathname: `/compare/${selectedModel.modelName}`,
            state: { initialModel: selectedModel }
          }}
        >
          Compare Details
        </Link>
      </div>
    </div>
  );
};

export default C36AMGDetail;
