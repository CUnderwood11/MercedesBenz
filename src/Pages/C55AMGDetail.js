import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModelDetail.css';

const C55AMGDetail = () => {
  const [modelDetails, setModelDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const modelName = 'C55 AMG';
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
          The C55 AMG is part of the second generation of C-Class Models and is a high-performance variant of the Mercedes-Benz C-Class,
          produced by AMG. It featured improved suspension and braking systems, which provided better handling and improved safety.
        </p>
        <p>
          The interior of the second generation included more luxurious materials and a more modern design. It also featured an improved climate control system, a navigation system, and a variety of other modern features.
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

export default C55AMGDetail;
