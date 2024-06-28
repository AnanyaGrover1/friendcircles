import React, { useEffect } from 'react';

import './Background.css'; // Import CSS file

const MyComponent = () => {
  useEffect(() => {
    // JavaScript code for initializing scenes
    // You can add any additional logic here
    // This code will run after the component is mounted

    // Initialize scene1
    const scene1 = document.getElementById('scene1');
    // Add any scene-specific logic here

    // Initialize scene2
    const scene2 = document.getElementById('scene2');
    // Add any scene-specific logic here

    // Initialize scene3
    const scene3 = document.getElementById('scene3');
    // Add any scene-specific logic here

    // JavaScript code for scrolling animation
    var scrollPos = 0;
    var aDelta = 1;

    const doit = function() {
      document.documentElement.style.setProperty('--scrollPos', scrollPos + 'px');

      scrollPos += aDelta;

      if (scrollPos > 400)
        aDelta = -1;

      if (scrollPos < 10)
        aDelta = 1;
    }

    const intervalId = setInterval(doit, 100);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return (
    <div id='background'>
      {/* HTML code for scenes */}
      
      <div id="scene1"></div>
      <div id="scene2"></div>
      <div id="scene3"></div>
    </div>
  );
};

export default MyComponent;
