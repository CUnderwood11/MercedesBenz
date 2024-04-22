import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModelDetail.css';

const C63AMGDetail = () => {
  const [modelDetails, setModelDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const modelName = 'C63 AMG';
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
          The C63 AMG was the third generation of C-Class Models and the first AMG-Mercedes designed from the ground up.
        </p>
        <p>
        The predecessors of this model had essentially featured bolt on performance modifications. The C63 AMG had the quickest, most responsive steering of any Mercedes vehicle at the time.
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

export default C63AMGDetail;
