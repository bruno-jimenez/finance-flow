// ResponsiveComponent.js

import React, { useState } from 'react';
import '../CSS/ResponsiveComponent.css'; // Assurez-vous d'avoir le bon chemin pour le fichier CSS

const ResponsiveComponent = ({ children }) => {
  const [isWideFormat, setIsWideFormat] = useState(true);

  const toggleFormat = () => {
    setIsWideFormat((prevFormat) => !prevFormat);
  };

  return (
    <div className={`responsive-container ${isWideFormat ? 'wide-format' : 'narrow-format'}`}>
      <button className='button' id='switchResponsive' onClick={toggleFormat}>Changer de format</button>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isWideFormat })
      )}
    </div>
  );
};

export default ResponsiveComponent;