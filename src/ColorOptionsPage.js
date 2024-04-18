import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ColorOptionsPage.css';

const ColorOptionsPage = () => {
  const { modelName } = useParams();
  const [colors, setColors] = useState({ exteriorColors: [], interiorColors: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/colors/${encodeURIComponent(modelName)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setColors({
          exteriorColors: data.exteriorColors || [],
          interiorColors: data.interiorColors || []
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [modelName]);

  if (loading) {
    return <div>Loading color options...</div>;
  }

  return (
    <div className="color-options-page">
      <div className="exterior-colors">
        <h2>Exterior Colors</h2>
        <ul>
          {colors.exteriorColors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
      <div className="interior-colors">
        <h2>Interior Colors</h2>
        <ul>
          {colors.interiorColors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorOptionsPage;
