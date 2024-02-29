import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import colorsData from './colors.json';
import './ColorOptionsPage.css';

const ColorOptionsPage = () => {
  // Access the modelName parameter from the URL
  const { modelName } = useParams();

  // Fetch color options for the selected model
  const modelColors = colorsData.models[modelName];

  if (!modelColors) {
    return <div>Model not found</div>;
  }

  const { exteriorColors, interiorColors } = modelColors;

  return (
    <div className="color-options-page">
      <div className="exterior-colors">
        <h2>Exterior Colors</h2>
        <ul>
          {exteriorColors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
      <div className="interior-colors">
        <h2>Interior Colors</h2>
        <ul>
          {interiorColors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorOptionsPage;
