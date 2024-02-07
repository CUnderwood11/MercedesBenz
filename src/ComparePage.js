import React, { useState } from 'react';
import './ComparePage.css';
import { useLocation } from 'react-router-dom';
import amgModelsData from './amgModels.json'; // Import the JSON file

const ComparePage = () => {
  const location = useLocation();
  const { model: selectedModel } = location.state || {};

  const [compareModel, setCompareModel] = useState(null);

  // Use the imported JSON data
  const amgModels = amgModelsData;

  const handleSelectModel = (event) => {
    const selectedModelName = event.target.value;
    const selectedModelData = amgModels.find((model) => model.modelName === selectedModelName);
    setCompareModel(selectedModelData);
  };

  return (
    <div className="compare-page-container">
      {selectedModel && (
        <div className="model-container">
          <h2>Selected Model</h2>
          <h3>{selectedModel.modelName}</h3>
          <img className="model-image" src={selectedModel.imageUrl} alt={selectedModel.modelName} />
          <table className="model-details-table">
            <tbody>
              <tr>
                <td>Production Years</td>
                <td>{selectedModel.productionYears}</td>
              </tr>
              <tr>
                <td>Engine</td>
                <td>{selectedModel.engine}</td>
              </tr>
              {/* Add other details here */}
            </tbody>
          </table>
        </div>
      )}

      <div className="model-container">
        <h2>Select a Model to Compare</h2>
        <select onChange={handleSelectModel}>
          <option value="">-- Select Model --</option>
          {amgModels.map((model) => (
            <option key={model.modelName} value={model.modelName}>{model.modelName}</option>
          ))}
        </select>
      </div>

      {compareModel && (
        <div className="model-container">
          <h2>Comparison Details</h2>
          <h3>{compareModel.modelName}</h3>
          <img className="model-image" src={compareModel.imageUrl} alt={compareModel.modelName} />
          <table className="model-details-table">
            <tbody>
              <tr>
                <td>Production Years</td>
                <td>{compareModel.productionYears}</td>
              </tr>
              <tr>
                <td>Engine</td>
                <td>{compareModel.engine}</td>
              </tr>
              {/* Add other details here */}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default ComparePage;
