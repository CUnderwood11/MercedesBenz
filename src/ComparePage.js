import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ComparePage.css';

const ComparePage = () => {
  const { modelName } = useParams();
  const [initialModel, setInitialModel] = useState(null);
  const [compareModel, setCompareModel] = useState(null);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initially set loading to true and error to null
    setLoading(true);
    setError(null);

    Promise.all([
      fetch(`http://localhost:3001/api/models`),
      fetch(`http://localhost:3001/api/models/details/${encodeURIComponent(modelName)}`)
    ])
    .then(async ([modelsResponse, detailsResponse]) => {
      if (!modelsResponse.ok || !detailsResponse.ok) {
        throw new Error('Failed to fetch data');
      }
      const modelsData = await modelsResponse.json();
      const detailsData = await detailsResponse.json();
      setModels(modelsData);
      setInitialModel(detailsData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setError(error.message);
      setLoading(false);
    });
  }, [modelName]);

  const handleSelectModel = (event) => {
    const selectedModelName = event.target.value;
    fetch(`http://localhost:3001/api/models/details/${encodeURIComponent(selectedModelName)}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch comparison model');
        return response.json();
      })
      .then(data => {
        setCompareModel(data);
      })
      .catch(error => {
        console.error('Error fetching compare model data:', error);
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="compare-page-container">
      {/* Display Selected Model */}
      <div className="model-container">
        <h2>Selected Model</h2>
        {initialModel ? (
          <>
            <h3>{initialModel.modelName}</h3>
            <img className="model-image" src={initialModel.imageUrl} alt={initialModel.modelName} />
            <p>Engine: {initialModel.engineSpecs}</p>
            <p>Horsepower: {initialModel.horsepower}</p>
            <p>Torque: {initialModel.torque}</p>
            <p>0-60 mph: {initialModel.zeroToSixty}</p>
            <p>Cost: {initialModel.cost}</p>
          </>
        ) : <p>No model selected or data available.</p>}
      </div>

      {/* Display Comparison Model */}
      <div className="model-container">
        <h2>Select a Model to Compare</h2>
        <select onChange={handleSelectModel} value={compareModel?.modelName || ''}>
          <option value="">-- Select Model --</option>
          {models.map((model) => (
            <option key={model.id} value={model.modelName}>{model.modelName}</option>
          ))}
        </select>
        {compareModel && (
          <>
            <h3>{compareModel.modelName}</h3>
            <img className="model-image" src={compareModel.imageUrl} alt={compareModel.modelName} />
            <p>Engine: {compareModel.engineSpecs}</p>
            <p>Horsepower: {compareModel.horsepower}</p>
            <p>Torque: {compareModel.torque}</p>
            <p>0-60 mph: {compareModel.zeroToSixty}</p>
            <p>Cost: {compareModel.cost}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
