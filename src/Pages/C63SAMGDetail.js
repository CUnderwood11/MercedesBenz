import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate
import './ModelDetail.css'; // Assuming you have general CSS for model details

const C63SAMGDetail = () => {
  const [modelDetails, setModelDetails] = useState(null);
  const navigate = useNavigate(); // Initialize navigate using the useNavigate hook

  useEffect(() => {
    const modelName = 'C63S AMG';
    const url = `http://localhost:3001/api/models/${encodeURIComponent(modelName)}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setModelDetails(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!modelDetails) {
    return <div>Loading...</div>;
  }

  // Functions to handle navigation
  const navigateToColorOptions = () => {
    navigate(`/colors/${encodeURIComponent(modelDetails.modelName)}`);
  };

  const navigateToCompare = () => {
    navigate(`/compare/${encodeURIComponent(modelDetails.modelName)}`);
  };

  return (
    <div className="model-detail">
      <div className="model-photo">
        <img src={modelDetails.imageUrl} alt={modelDetails.modelName} />
      </div>
      <div className="model-info">
        <h2>{modelDetails.modelName} Details</h2>
        <p>
          The C63S AMG is part of the fourth generation of C-Class Models and used a similar engine as the Mercedes-AMG GT sports car.
        </p>
        <p>
        This was the first C63 variant that used turbo chargers instead of just being naturally-aspirated which helped with the power output.
        </p>
        <ul>
          <li>Production Years: {modelDetails.productionYears}</li>
          <li>Engine Specs: {modelDetails.engineSpecs}</li>
          <li>Horsepower: {modelDetails.horsepower}</li>
          <li>Torque: {modelDetails.torque}</li>
          <li>0-60 mph: {modelDetails.zeroToSixty}</li>
          <li>Cost: {modelDetails.cost}</li>
        </ul>
        <div className="button-group">
          <button className="action-button" onClick={navigateToColorOptions}>View Color Options</button>
          <button className="action-button" onClick={navigateToCompare}>Compare Details</button>
        </div>
      </div>
    </div>
  );
};

export default C63SAMGDetail;
