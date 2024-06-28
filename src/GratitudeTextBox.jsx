import React, { useState } from "react";
import './GratitudeTextBox.css'; 


const GratitudeTextBox = () => {
  const [gratefulness, setGratefulness] = useState("");

  const handleGratefulnessChange = (event) => {
    setGratefulness(event.target.value);
  };

  return (
    <div className="gratitude-textbox-container">
      <input
        type="text"
        value={gratefulness}
        onChange={handleGratefulnessChange}
        placeholder="One interaction today that I'm grateful for..."
      />
    </div>
  );
};

export default GratitudeTextBox;
