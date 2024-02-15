import React, { useState, useEffect } from 'react';
import './ComparePage.css';
import { useParams } from 'react-router-dom';
import amgModelsData from './amgModels.json'; // Import the JSON file

const ComparePage = () => {
  const { modelName } = useParams(); // Get the model name parameter from the URL

  const [initialModel, setInitialModel] = useState(null);
  const [compareModel, setCompareModel] = useState(null);

  // Use the imported JSON data
  const amgModels = amgModelsData;

  useEffect(() => {
    // Find the initial model based on the extracted model name from URL
    const foundModel = amgModels.find((model) => model.modelName === modelName);
    if (foundModel) {
      setInitialModel(foundModel);
    } else {
      // Handle case where model name from URL is not found
      console.log(`Model with name ${modelName} not found.`);
    }
  }, [modelName, amgModels]); // Update the effect when modelName or amgModels change

  const handleSelectModel = (event) => {
    const selectedModelName = event.target.value;
    const selectedModelData = amgModelsData.find((model) => model.modelName === selectedModelName);
    setCompareModel(selectedModelData);
  };

  return (
    <div className="compare-page-container">
      {/* Display Selected Model */}
      <div className="model-container">
        <h2>Selected Model</h2>
        {initialModel && (
          <>
            <h3>{initialModel.modelName}</h3>
            <img className="model-image" src={initialModel.imageUrl} alt={initialModel.modelName} />
            <table className="model-details-table">
              <tbody>
                <tr>
                  <td>Production Years</td>
                  <td>{initialModel.productionYears}</td>
                </tr>
                <tr>
                  <td>Engine</td>
                  <td>{initialModel.engine}</td>
                </tr>
                <tr>
                  <td>Horsepower</td>
                  <td>{initialModel.horsepower}</td>
                </tr>
                <tr>
                   <td>Torque</td>
                   <td>{initialModel.torque}</td>
                </tr>
                <tr>
                    <td>Zero-To-Sixty</td>
                    <td>{initialModel.zeroToSixty}</td>
                </tr>
                <tr>
                    <td>Original MSRP</td>
                    <td>{initialModel.cost}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* Display Comparison Model */}
      <div className="model-container">
        <h2>Select a Model to Compare</h2>
        <select onChange={handleSelectModel}>
          <option value="">-- Select Model --</option>
          {amgModelsData.map((model) => (
            <option key={model.modelName} value={model.modelName}>{model.modelName}</option>
          ))}
        </select>
      </div>

      {/* Display Comparison Details */}
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
              <tr>
                <td>Horsepower</td>
                <td>{compareModel.horsepower}</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>{compareModel.torque}</td>
              </tr>
              <tr>
                <td>Zero-To-Sixty</td>
                <td>{compareModel.zeroToSixty}</td>
              </tr>
              <tr>
                <td>Original MSRP</td>
                <td>{compareModel.cost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
