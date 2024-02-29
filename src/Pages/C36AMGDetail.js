import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModelDetail.css';
import amgModelsData from '../amgModels.json';

const C36AMGDetail = () => {
  const selectedModel = amgModelsData.find(model => model.modelName === "C36 AMG");
  const navigate = useNavigate();

  const navigateToColorOptions = () => {
    navigate(`/colors/${selectedModel.modelName}`);
  };

  const navigateToCompare = () => {
    navigate(`/compare/${selectedModel.modelName}`);
  };

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
        {/* Buttons with space between them */}
        <div className="button-group">
          <button className="action-button" onClick={navigateToColorOptions}>View Color Options</button>
          <button className="action-button" onClick={navigateToCompare}>Compare Details</button>
        </div>
      </div>
    </div>
  );
};

export default C36AMGDetail;
